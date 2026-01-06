import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mplp: {
          // Brand Palette - Technical & Standard (Matches Docs)
          blue: "#2563EB",       // Tailwind Blue 600
          "blue-soft": "#3B82F6", // Tailwind Blue 500
          "blue-light": "#60A5FA", // Tailwind Blue 400
          "blue-dark": "#1D4ED8",  // Tailwind Blue 700

          cyano: "#5ADEFF",        // Legacy accent kept for now
          indigo: "#6366F1",       // Legacy accent kept for now
          emerald: "#10B981",

          // Neutrals (Dark Theme - Slate Scale)
          dark: "#030712",      // slate-950
          "dark-soft": "#111827", // slate-900
          border: "#1F2937",    // slate-800
          text: "#F9FAFB",      // slate-50
          "text-muted": "#9CA3AF", // slate-400

          // Semantic
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#0EA5E9",
        },
      },
      fontFamily: {
        // System Stack for Native/Technical feel (Matches Docs)
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ],
      },
      borderRadius: {
        lg: "0.5rem",   // 8px - Tighter default
        xl: "0.75rem",  // 12px
        "2xl": "1rem",  // 16px
      },
      boxShadow: {
        // Reduced to minimal shadows
        stable: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
