import { gql } from "@apollo/client";
import { Project } from "../types/Projects";
import { getGraphQL } from "./graphql";

export async function getProjects() {
  try {
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
    `;

    const nodes = await getGraphQL().query({
      query: GET_PROJECTS,
      fetchPolicy: "network-only",
    });

    const allRepos = nodes.data.user.repositories.edges.map(
      (edge: any) => edge.node
    );

    const portfolioRepos = allRepos.filter((repo: any) =>
      repo.repositoryTopics.edges.some(
        (topicEdge: any) =>
          topicEdge.node.topic.name.toLowerCase() === "portfolio"
      )
    );

    const projects: Project[] = portfolioRepos.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      website: repo.website,
      url: repo.url,
      homepage: repo.homepageUrl,
      imageUrl: repo.openGraphImageUrl,
      languages: repo.languages.edges.map(
        ({ node: langNode }: any) => langNode.name
      ),
      topics: repo.repositoryTopics.edges
        .map(({ node: topicNode }: any) => topicNode.topic.name)
        .filter((topicName: string) => topicName.toLowerCase() !== "portfolio"),
    }));

    return projects;
  } catch (error) {
    console.error("❌ Failed to fetch GitHub projects:", error);
    return []; // Return an empty array to avoid crashing the page
  }
}
