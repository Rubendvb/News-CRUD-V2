import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@apicluster.k1mrpi9.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`
    );
    console.log("Mongoose Connect to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
