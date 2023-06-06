// tagged template literal used for wrapping GQL strings for schema definitions
// converts GraphQL strings into the format that Apollo lib expect when working w/ operations and schemas
import { gql } from "apollo-server-express";

// The Query type is the entry points into the rest of our schema.
// These are the top-level fields that our client can query for

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String
    thumbnail: String
    embedded: String!
  }

  type Query {
    recentPost: [Post!]!
  }
`;

module.exports = typeDefs;
