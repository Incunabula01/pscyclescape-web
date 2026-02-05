import type { APIRoute } from "astro";
import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { slug } = params;

    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Slug parameter is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3333",
          },
        }
      );
    }

    const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      subtitle,
      content,
      image
    }`;

    const post = await sanityClient.fetch<SanityDocument>(POST_QUERY, { slug });

    if (!post) {
      return new Response(
        JSON.stringify({ error: "Post not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3333",
          },
        }
      );
    }

    return new Response(JSON.stringify(post), {
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
    console.error("Error fetching post:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch post" }),
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
