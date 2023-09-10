import { Post } from "../models/Post.js";

export const resolvers = {
  Query: {
    allPost: async () => {
      try {
        const postData = await Post.find({});
        return postData;
      } catch {
        throw new Error(
          "Apologies. This request did not reach the database. Please let us know that this happened!"
        );
      }
    },

    tagPost: async (parent, { tags }) => {
      try {
        if (tags) {
          console.log(tags);
          const postData = await Post.find({ tags });
          return postData;
        }
      } catch {
        throw new Error(
          "Apologies. Could not search via the requested tag. Let us know so we can fix it!"
        );
      }
    },

    idPost: async (parent, { _id }) => {
      try {
        const postData = await Post.findById(_id);
        return postData;
      } catch {
        throw new Error(
          "Apologies. Could not locate the specific post you were searching for. Let us know so we can fix it!"
        );
      }
    },
  },

  Mutation: {
    addPost: async (parent, args) => {
      try {
        const postData = await Post.create(args);
        return postData;
      } catch {
        throw new Error("Could not add post to the database.");
      }
    },
    removePost: async (parent, { postId, title, description, url, tags }) => {
      try {
        const postData = await Post.findByIdAndDelete(
          { _id: postId },
          { title: title, description: description, url: url, tags: tags }
        );
        return postData;
      } catch {
        throw new Error(
          "Could not remove post from the database. Double check that the postId is correct."
        );
      }
    },
    editPost: async (parent, { postId, title, description, url, tags }) => {
      try {
        const postData = await Post.findByIdAndUpdate(
          { _id: postId },
          { title: title, description: description, url: url, tags: tags },
          { new: true }
        );
        return postData;
      } catch {
        throw new Error(
          "Could not edit the post. Double check that the postId is correct."
        );
      }
    },
  },
};
