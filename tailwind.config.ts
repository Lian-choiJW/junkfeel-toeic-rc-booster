import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14213d",
        line: "#d8e3f0",
        ocean: "#2563eb",
        mint: "#0f766e",
        amber: "#b45309"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(20, 33, 61, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
