import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1a474ad327d82eccb87aad6b4cfa57284bbd0e17', queries,  });
export default client;
  