const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 8,
    },
    type: {
        type: String,
        enum: [
          "Gulshan",
          "Banani",
          "Dhanmondi",
          "Baridhara",
          "Mohakhali",
        //   "Mirpur",
        //   "Mohakhali",
        //   "Mohammadpur",
        //   "Kakrail",
        //   "Naya_Paltan",
        //   "Elephant_Road",
        //   "Farmgate",
        //   "New_Market",
        //   "Shahbag",
        //   "Motijheel",
        //   "Banani_DOHS",
        //   "Bashundhara_RA",
        //   "Khilgaon",
        //   "Malibagh"
        ],
        required: true,
    },
    desc: {
        type: String,
        required: true,
        min: 20,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sqfeet: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
        min: 2,
    },
    featured: {
        type: Boolean,
        default: false,
    }
    

}, {timestamps: true})

module.exports = mongoose.model("Property", PropertySchema)