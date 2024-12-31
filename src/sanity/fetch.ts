import { createClient, QueryParams } from "next-sanity";
import { postQuery, postQueryBySlug } from "./sanity-query";
import clientConfig from "@/sanity/config/client-config"

export const client = createClient(clientConfig);
export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next:{tags}
  });
}

export const getPosts = async () => {
  const data = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags:["blogPost","author","category"]
  });
  return data;
};


export const getPostBySlug = async (slug: string) => {
  const data:any = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags:["blogPost","author","category"]
  });

  return data;
};