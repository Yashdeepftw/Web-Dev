const express = require('express');
const { string } = require('zod');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

// body {
//     title: string,
//     description: string
// }
app.get("/todo", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo Created"
    });

});

app.put("/complete", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return; 
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})  

app.listen(3000);