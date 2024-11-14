const mongoose = require("mongoose");

const leadsScehma = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true 
    },
    linkedinUrl:  {
        type: String,
        require: false 
    },
    phoneNumber: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})

// define the model or collection name
// by-default mongoose table saved with s after it 
export const leadsModel = new mongoose.model("leads", leadsScehma);

