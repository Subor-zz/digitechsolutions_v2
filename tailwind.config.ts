import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-blue-50", "bg-green-50", "bg-purple-50", "bg-orange-50", "bg-cyan-50", "bg-pink-50",
    "text-deepBlue", "text-green-800", "text-purple-800", "text-deepOrange", "text-cyan-800", "text-pink-800",
    "bg-techOrange",
  ],
  theme: {
    extend: {
      colors: {
        // New brand colors (from v2 design)
        primary: "#1152d4",
        "primary-light": "#3b76e8",
        "primary-dark": "#0a3a9c",
        accent: "#F59E0B",
        "accent-hover": "#d97706",
        "background-light": "#fafafb",
        "background-dark": "#0f172a",
        // Legacy colors (kept for compatibility)
        deepBlue: "#0B3C8A",
        azureBlue: "#1FA2E1",
        midBlue: "#145DA0",
        techOrange: "#F97316",
        warmOrange: "#FB8C00",
        deepOrange: "#EA580C",
        darkGray: "#4B5563",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob': 'blob 12s infinite alternate cubic-bezier(0.45, 0, 0.55, 1)',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
