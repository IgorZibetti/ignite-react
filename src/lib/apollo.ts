import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clfka650k0q1401uhcraf9m12/master',
    cache: new InMemoryCache()
})