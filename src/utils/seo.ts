import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

const SITE_NAME = "EventaPulse";
const BASE_URL = "https://www.eventpulse.app";
const OG_IMAGE = "/og-image.jpg";

function setMeta(name: string, content: string, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useSeo({ title, description, path }: SeoConfig) {
  useEffect(() => {
    const fullTitle = path === "/" ? `${SITE_NAME} — Discover Events in Cyprus` : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("description", description);

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", `${BASE_URL}${OG_IMAGE}`, "property");
    setMeta("og:url", `${BASE_URL}${path}`, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${BASE_URL}${OG_IMAGE}`);
  }, [title, description, path]);
}

export const seoData = {
  home: {
    title: "Discover Events in Cyprus",
    description:
      "The premier event discovery platform for Cyprus. Find events, buy tickets, and explore nightlife across Nicosia, Paphos, Larnaca, Ayia Napa, and Limassol.",
    path: "/",
  },
  users: {
    title: "For Event-Goers",
    description:
      "Discover events near you in Cyprus. Browse by city, category, or map. Buy tickets instantly with transparent fees.",
    path: "/users",
  },
  organizers: {
    title: "For Organizers",
    description:
      "Publish events, reach thousands, and grow your brand in Cyprus. Analytics, ticketing, QR scanning, and Stripe payouts.",
    path: "/organizers",
  },
  howItWorks: {
    title: "How It Works",
    description:
      "See how EventaPulse connects event-goers with organizers in Cyprus. Simple discovery, instant ticketing, verified listings.",
    path: "/how-it-works",
  },
  trust: {
    title: "Trust & Safety",
    description:
      "Every listing verified. Every payment secured. Learn about our moderation, refund policy, and transparent fees.",
    path: "/trust",
  },
  contact: {
    title: "Partner With Us",
    description:
      "Join EventaPulse as a venue, organizer, or brand partner. Grow events in Cyprus together.",
    path: "/contact",
  },
} as const;
