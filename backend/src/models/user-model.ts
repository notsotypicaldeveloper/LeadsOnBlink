const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true 
    },
    password: {
        type: String,
        require: true 
    },
})

// define the model or collection name
// by-default mongoose table saved with s after it 
export const usersModel = new mongoose.model("users", userSchema);
