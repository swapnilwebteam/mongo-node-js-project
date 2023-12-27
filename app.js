const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Listing = require("./models/listing.js")

// MONGO DB URL
const MONGO_URL = "mongodb://127.0.0.1:27017/wander";

// MONGO DB function connected with express
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("connected with DB")
    })
    .catch((err) => {
        console.log(err)
    })


// ROOT 
app.get("/", (req, res) => {
    res.send("hi am swapnil")
})

//App

app.get("/testListing", async (req,res) =>{
   let sample= new Listing({
    title : "MY new Villa",
    description : "By the beatch",
    price : 1200,
    location : "Tamil",
    country : "India",
   });

   await sample.save();
//    console.log("same was saved");
   res.send("successful testing");
//    console.log("data save")
});
// Express server start 
app.listen(8080, () => {
    console.log("server listening to port 8080")
})