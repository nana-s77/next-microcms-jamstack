import { createClient } from "microcms-js-sdk";

export const client = createClient({
  // microcms.ioの前がドメイン
  serviceDomain: "pita",
  apiKey: process.env.API_KEY,
});
