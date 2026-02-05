import type { APIRoute } from "astro";
import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "12";
    const offset = url.searchParams.get("offset") || "0";

    const POSTS_QUERY = `*[
      _type == "post"
      && defined(slug.current)
    ]|order(publishedAt desc)[${offset}...${parseInt(offset) + parseInt(limit)}]{
      _id,
      title,
      subtitle,
      "slug": slug.current,
      publishedAt,
      excerpt,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      "author": author->{
        name,
        image
      }
    }`;

    const posts = await sanityClient.fetch<SanityDocument[]>(POSTS_QUERY);

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300", // Cache for 5 minutes
        "Access-Control-Allow-Origin": "http://localhost:3333",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch posts" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3333",
        },
      }
    );
  }
};
