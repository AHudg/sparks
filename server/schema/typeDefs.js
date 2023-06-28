import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    allPost: [Post!]!
    tagPost(tags: String!): [Post!]!
    idPost(_id: ID!): Post!
  }

  type Post {
    id: ID!
    title: String!
    description: String
    thumbnail: String
    url: String!
    length: String
    tags: [String]
  }
`;
