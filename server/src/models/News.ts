import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: "string",
      require: true,
      trim: true,
      unique: true,
    },
    subtitle: {
      type: "string",
      require: true,
      trim: true,
    },
    content: {
      type: "string",
      require: true,
      trim: true,
    },
    author: {
      type: "string",
      trim: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    editorial: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("News", newsSchema);
