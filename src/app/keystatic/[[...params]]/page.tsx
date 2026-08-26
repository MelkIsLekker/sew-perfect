// src/app/keystatic/[[...params]]/page.tsx
import KeystaticClient from "../KeystaticClient";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    { params: [] },
    { params: ["cloud", "oauth", "callback"] },
    { params: ["cloud", "oauth", "created"] },
    { params: ["collection", "lookbook"] },
  ];
}

export default function Page() {
  return <KeystaticClient />;
}