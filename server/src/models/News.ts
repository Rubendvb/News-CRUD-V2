import { Schema, model, Document } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    subtitle: {
      type: String,
      require: true,
      trim: true,
    },
    content: {
      type: String,
      require: true,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    image: String,
    editorial: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

interface INews extends Document {
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image: string;
  editorial: string;
}

export default model<INews>("News", newsSchema);
