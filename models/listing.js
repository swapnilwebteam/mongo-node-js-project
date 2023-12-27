const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
         required: true,
    },
    descripyion: String,
    image: {
        type: String,
        default : "https://www.lionleaf.com/wp-content/uploads/2014/11/1415275_22821821.jpg" ,
        set: (v) => v === "" ? "https://www.lionleaf.com/wp-content/uploads/2014/11/1415275_22821821.jpg" : v,

    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;