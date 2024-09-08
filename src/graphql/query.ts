import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GET_PROJECTS {
    projects {
      description
      id
      image_url
      project_url
      repository_url
      tech
      title
    }
  }
`;
