const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name"]
    },
    discription: {
        type: String,
        required: [true, "enter discription"]

    },
    image: [{
        url:
        {
            type: String,
            required: true
        },

    }]

})