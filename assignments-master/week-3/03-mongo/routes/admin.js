const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // checks if a user with the username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        price,
        description,
        imageLink
    })
    console.log(newCourse);
    res.json({
        msg:"Course Created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourse = await Course.find({});
    res.json({
        courses: allCourse
    });
});

module.exports = router;