"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    navigator.serviceWorker.register(`${basePath}/sw.js`).catch(() => {
      // The site still works normally if the browser blocks service workers.
    });
  }, []);

  return null;
}
