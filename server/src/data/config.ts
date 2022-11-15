import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "news",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
};
