import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return {
    name: "TOEIC RC Booster",
    short_name: "RC Booster",
    description: "TOEIC RC 문법, 어휘, 독해를 이어서 학습하는 개인용 앱",
    start_url: `${basePath}/study/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    orientation: "portrait",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
