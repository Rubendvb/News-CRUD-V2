require("dotenv").config();
import mongoose from "mongoose";

console.log(process.env.MONGO_URI_PROD);

(async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://Rubendvb:iYvMHiOeyJYI6Lyi@apicluster.k1mrpi9.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Mongoose Connect to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
