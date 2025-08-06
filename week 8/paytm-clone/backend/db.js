const { request } = require('express');
const mongoose = require('mongoose');

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

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        request: true
    },
    balance: {
        type: Number,
        requier: true
    }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}