import { Post } from "../models/Post.js";

export const resolvers = {
  Query: {
    allPost: async (parent, args, context) => {
      if (context) {
        const postData = await Post.find({});
        return postData;
      }
    },

    tagPost: async (parent, { tags }) => {
      if (tags) {
        console.log(tags);
        const postData = await Post.find({ tags });
        return postData;
      }
    },

    idPost: async (parent, { _id }) => {
      const postData = await Post.findById(_id);
      return postData;
    },
  },
};
