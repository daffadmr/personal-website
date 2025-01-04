import CONST from "@/utils/constant";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: CONST.HTTP_URL!,
      headers: {
        "x-hasura-admin-secret": CONST.HASURA_KEY!,
      },
    }),
  });
});
