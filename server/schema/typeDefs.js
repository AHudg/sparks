import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String
    thumbnail: String
    url: String!
    length: String
    tags: [String]
  }

  type Query {
    allPost: [Post!]!
    tagPost(tags: String!): [Post!]!
    idPost(_id: ID!): Post!
  }

  type Mutation {
    addPost(
      title: String!
      description: String!
      url: String!
      tags: [String]
    ): Post

    removePost(postId: ID!): Post

    editPost(
      postId: ID!
      title: String!
      description: String!
      url: String!
      tags: [String]
    ): Post
  }
`;
