const mongoose = require('mongoose');
const { String } = require('zod');

mongoose.connect("mongodb+srv://yashdeepftw:yashdeep_0218@paytm-clone.vrfdxlo.mongodb.net/");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected to the MongoDB"); 
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    lastName: String,
    firstName: String
});

const User = mongoose.model('User', userSchema);
module.exports = {
    User
}