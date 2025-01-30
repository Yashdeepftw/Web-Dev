



// Middlewares

// const express = require('express');
// const app = express();
// app.listen(3000); 
// app.use(express.json());
// /*
// app.use takes a function as argument and after this call
// all the requests will use that called func as a middleware 
// everytime
// */
// // Middlewares
// function usernameMiddleware(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username != "harkirat" || password != "pass"){
//         res.status(400).json({
//             msg:'something is wrong with your inputs'
//         });
//     }
//     else{
//         next();
//     }
// };

// function kidneyIdMiddleware(req,res,next){
//     const kidneyId = req.query.kidneyId;
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             msg:'something is wrong with your inputs'
//         });
//     }
//     else{
//         next();
//     }
// };

// app.get('/health-checkup',usernameMiddleware,kidneyIdMiddleware,(req,res) =>{

//     // const username = req.headers.username;
//     // const password = req.headers.password;
//     // const kidneyId = req.query.kidneyId;

//     // if(username != "harkirat" || password != "pass"){
//     //     res.status(400).json({
//     //         msg:'something is wrong with your inputs'
//     //     });
//     //     return
//     // }

//     // if(kidneyId != 1 && kidneyId != 2){
//     //     res.status(400).json({
//     //         msg:'something is wrong with your inputs'
//     //     });
//     //     return
//     // }

//     res.json({
//         msg:'Your Kidney is fine!'
//     });
    
// });

// Input validator
/*
    why we use input validators ? :=>
        to check wether the user has given a correct input
        type or not.
        if not then to cath this error and show something else
        but not the server issue list
    
    To solve this we use the global catch method as defined 
*/
const express = require('express');
const app = express();
app.listen(4000);
app.use(express.json());

// global catches
app.use(function(err,req,res,next){
    res.status(500).send('wrong inputs')
});

/*
    now i need to check every input entered in a form like email
    and passwords and other things again and again. for this i 
    have to make similar functions again and again , to handle 
    this problem node js has a library for input validations 
    which are more commom 
*/
// Zod
const z = require("zod");
const schema = z.array(z.number());
/*
    {
        email:string=>email
        password: atleast 8 letters
        country: "IN" , "US" 
    }

    => write a zod validation for these above properties
*/

const schemaEmail = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.post('/health-checkup',(req,res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    const response = schema.safeParse(kidneys);


    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        });
    }
    res.send({
        response
    });

//     res.send("You have" + kidneysLength + "kidneys");
});



// Authentication

