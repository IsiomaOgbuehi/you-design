import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://api.ngddev.com/",
  cache: new InMemoryCache(),
});
export default client;