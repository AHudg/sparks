import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    homePost: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    description: String
    thumbnail: String
    url: String!
    length: Int
    tags: [String]
  }
`;
