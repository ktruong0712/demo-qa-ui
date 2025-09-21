import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#5A8DEE",
        'primary-indigo': "#3B5FF2",
        'accent-mint': "#A8E0C8",
        'accent-aqua': "#D3F0EE",
        'gradient-start': "#C7E0F8",
        'gradient-end': "#B2E0E3",
        'text-dark': "#222222",
        'text-medium': "#5C5C5C",
        'pattern-blue': "#B8C8F5",
      },
      backgroundImage: {
        "gradient-soft": "linear-gradient(135deg, #C7E0F8 0%, #B2E0E3 100%)",
        "gradient-primary": "linear-gradient(135deg, #5A8DEE 0%, #3B5FF2 100%)",
        "circuit-pattern": `
          radial-gradient(circle at 20% 20%, rgba(168, 224, 200, 0.2) 2px, transparent 2px),
          radial-gradient(circle at 80% 80%, rgba(168, 224, 200, 0.2) 2px, transparent 2px),
          linear-gradient(45deg, transparent 40%, rgba(211, 240, 238, 0.3) 50%, transparent 60%)
        `,
      },
      animation: {
        "fade-in-left": "fadeInLeft 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "stagger-in": "staggerIn 0.6s ease-out",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        staggerIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
