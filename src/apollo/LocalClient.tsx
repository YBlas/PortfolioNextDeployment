import { ApolloClient, InMemoryCache } from "@apollo/client";


const localClient = new ApolloClient({
    uri: "https://yebel-portfolio-api.herokuapp.com/graphql",
    cache: new InMemoryCache()
});

export default localClient;