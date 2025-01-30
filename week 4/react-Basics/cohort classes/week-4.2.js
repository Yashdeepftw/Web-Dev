const express = require('express');
const app = express();

app.get('/',(req,res) => {
    const user = req.headers['user'];
    const usr = {};
    console.log(usr);
});
app.listen(3000);