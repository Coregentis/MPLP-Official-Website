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
          // Brand Palette - Stable & Authoritative
          blue: "#1A73E8",
          "blue-soft": "#3B82F6",
          cyan: "#5ADEFF",
          indigo: "#6366F1",
          emerald: "#10B981",

          // Neutrals (Dark Theme)
          dark: "#020617", // slate-950
          "dark-soft": "#0F172A", // slate-900
          border: "#1E293B", // slate-800
          text: "#F8FAFC", // slate-50
          "text-muted": "#94A3B8", // slate-400

          // Semantic
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "IBM Plex Mono", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
      },
      boxShadow: {
        stable: "0 4px 24px -2px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(255, 255, 255, 0.05)",
        glow: "0 0 40px rgba(37, 99, 235, 0.1)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mplp-gradient": "linear-gradient(135deg, var(--mplp-blue-soft) 0%, var(--mplp-indigo) 100%)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
