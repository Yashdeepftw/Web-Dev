import express from 'express'
import cors from 'cors'
app.listen(3000);
app.use(express.json());
app.use(cors());

app.get('/notifications', (req, res) => {
    console.log("this is form server");

    const notifications = {
        network: Math.floor(Math.random() * 11),

        jobs: Math.floor(Math.random() * 11),

        messaging: Math.floor(Math.random() * 7),

        notifications: Math.floor(Math.random() * 120)
    };

    res.json(notifications);
})