var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default: "https://hiteshchoudhary.com/imgs/users/001-boy-1.png"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = Person = mongoose.model("myPerson", PersonSchema);