// src/app/keystatic/KeystaticClient.tsx
"use client";

import { Keystatic } from "@keystatic/core/ui";
import config from "../../../keystatic.config";

export default function KeystaticClient() {
  return <Keystatic config={config as any} />;
}