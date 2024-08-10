import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client"

export const getGraphQL = () => {
    const apolloLink = new ApolloLink((operation, forward) => {
        operation.setContext({
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }})
        return forward(operation)
    })
    const httpLink = new HttpLink({
            uri: 'https://api.github.com/graphql',
            fetch
        })
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: ApolloLink.from([apolloLink, httpLink]),
    })
}