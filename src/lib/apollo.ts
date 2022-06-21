import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4opy41e0szy01xke51x802v/master",
  cache: new InMemoryCache(),
});
