import * as prismic from "@prismicio/client";

const repoName = "trivify";
const client = prismic.createClient(repoName);

export default client