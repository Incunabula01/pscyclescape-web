import type { APIRoute } from "astro";
import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const upcoming = url.searchParams.get("upcoming") === "true";
    
    let EVENTS_QUERY = `*[_type == "event"`;
    
    if (upcoming) {
      const now = new Date().toISOString();
      EVENTS_QUERY += ` && date >= "${now}"`;
    }
    
    EVENTS_QUERY += `]{
      _id,
      title,
      date,
      location,
      description
    } | order(date ${upcoming ? "asc" : "desc"})`;

    const events = await sanityClient.fetch<SanityDocument[]>(EVENTS_QUERY);

    return new Response(JSON.stringify(events), {
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
    console.error("Error fetching events:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch events" }),
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
