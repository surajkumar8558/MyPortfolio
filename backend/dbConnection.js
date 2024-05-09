const mongoose = require("mongoose");
require("dotenv").config();

const MongoURL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MongoURL);
    console.log("Database Connected...");
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

module.exports = connectDB;
