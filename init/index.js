//initial write logic
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


main()
.then(() => {
    console.log("connect to db");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

//all data delete
const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "69635c36c8e264d2e68ab613"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();