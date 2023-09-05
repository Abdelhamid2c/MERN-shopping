const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "username obligatoire"],
    },
    email: {
        type: String,
        required: [true, "please add the email"],
        unique: [true, "email adress already taken"],
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

