import { gql } from "@apollo/client";

export const QUERY_ALLPOST = gql`
  query allPost {
    allPost {
      _id
      title
      description
      url
      tags
    }
  }
`;

export const QUERY_TAGPOST = gql`
  query tagPost($tags: String!) {
    tagPost(tags: $tags) {
      _id
      title
      description
      url
      tags
    }
  }
`;

export const QUERY_IDPOST = gql`
  query idPost($_id: ID!) {
    idPost(_id: $_id)
    _id
    title
    description
    url
    tags
  }
`;
