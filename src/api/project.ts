import { gql } from "@apollo/client"
import { Project } from "../types/Projects"
import { getGraphQL } from "./graphql.ts"

export async function getProjects() {
  const GET_PROJECTS = gql`
    query {
      user(login: "ayushnigam1") {
        repositories(first: 100) {
          edges {
            node {
              name
              description
              openGraphImageUrl
              url
              homepageUrl
              languages(first: 10) {
                edges {
                  node {
                    name
                  }
                }
              }
              repositoryTopics(first: 10) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const nodes = await getGraphQL().query({ query: GET_PROJECTS })
 console.log("node",nodes)
  const projects: Project[] = nodes.data.user.repositories.edges.map(({node}: any) => ({
    name: node.name,
    description: node.description,
    url: node.url,
    homepage: node.homepageUrl,
    imageUrl: node.openGraphImageUrl,
    languages: node.languages.edges.map(({node}: any) => node.name),
    topics: node.repositoryTopics.edges.map(({ node }: any) => node.topic.name)
  }))

  return projects
}
