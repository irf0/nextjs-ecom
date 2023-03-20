import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9haph2gc",
  dataset: "production",
  apiVersion: "2023-02-02",
  useCdn: true,
  token: process.env.NEXT_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
