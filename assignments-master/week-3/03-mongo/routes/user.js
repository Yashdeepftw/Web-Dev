const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const password = req.body.password;
    const username = req.body.username;
    await User.create({
        username,
        password
    })
    res.json({
        msg:"User Created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
        await User.updateOne({
            username
        },{
            "$push": {
                purchasedCourses: courseId
            }
        });
    }
    catch(e){
        console.log(e);
    }
    res.json({
        msg:"purchased complete"
    });
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    }) 
});

module.exports = router