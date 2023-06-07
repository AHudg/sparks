import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  length: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
});

export const Post = model("Post", postSchema);
