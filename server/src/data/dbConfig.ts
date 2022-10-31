require("dotenv").config();
import mongoose from "mongoose";

// console.log(process.env.MONGO_URI_PROD);
const MONGO_URL = process.env.MONGO_URI_PROD;

(async () => {
  try {
    const db = await mongoose.connect(MONGO_URL);
    console.log("Mongoose Connect to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
