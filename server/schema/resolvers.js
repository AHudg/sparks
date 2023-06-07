import { Post } from "../models/Post.js";

export const resolvers = {
  Query: {
    homePost: async (parent, args, context) => {
      if (context) {
        const postData = await Post.find({});
        return postData;
      }
    },
  },
};
