// src/utils/getOptimizedImage.ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "src/lib/sanityClient.ts"; // adjust path if needed

const builder = imageUrlBuilder(client);

export function getOptimizedImage(
  imageRef: string,
  width = 1100,
  height?: number
) {
  const image = builder.image(imageRef).width(width).auto("format").quality(75);
  return height ? image.height(height).url() : image.url();
}
