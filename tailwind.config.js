/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "background": "#fbfaee",
          "tertiary-fixed-dim": "#c8c8b0",
          "inverse-primary": "#add0a8",
          "on-primary-container": "#98ba94",
          "surface-container": "#efeee3",
          "outline": "#737970",
          "surface-container-highest": "#e4e3d7",
          "surface-bright": "#fbfaee",
          "inverse-on-surface": "#f2f1e5",
          "secondary-fixed": "#ffdcc6",
          "on-primary": "#ffffff",
          "surface-container-low": "#f5f4e8",
          "on-surface": "#1b1c15",
          "primary-fixed-dim": "#add0a8",
          "on-tertiary": "#ffffff",
          "secondary-fixed-dim": "#eabda0",
          "surface-container-high": "#e9e9dd",
          "primary": "#173418",
          "secondary": "#79573f",
          "tertiary-fixed": "#e4e4cc",
          "on-error-container": "#93000a",
          "error": "#ba1a1a",
          "tertiary-container": "#444533",
          "on-error": "#ffffff",
          "on-tertiary-fixed": "#1b1d0e",
          "on-secondary-container": "#7a5840",
          "inverse-surface": "#303129",
          "on-primary-fixed-variant": "#304e2f",
          "on-tertiary-fixed-variant": "#474836",
          "on-surface-variant": "#434841",
          "surface-tint": "#476646",
          "surface-container-lowest": "#ffffff",
          "on-secondary-fixed-variant": "#5f402a",
          "outline-variant": "#c3c8be",
          "secondary-container": "#ffd1b3",
          "surface-variant": "#e4e3d7",
          "primary-fixed": "#c8ecc3",
          "on-secondary-fixed": "#2d1604",
          "on-primary-fixed": "#042108",
          "on-background": "#1b1c15",
          "surface": "#fbfaee",
          "error-container": "#ffdad6",
          "on-secondary": "#ffffff",
          "primary-container": "#2d4b2d",
          "surface-dim": "#dbdbcf",
          "tertiary": "#2d2f1f",
          "on-tertiary-container": "#b2b39c"
      },
      "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
      },
      "fontFamily": {
          "headline": ["Manrope"],
          "body": ["Work Sans"],
          "label": ["Inter"]
      },
      "animation": {
          "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      "keyframes": {
          "fadeUp": {
              "0%": { opacity: "0", transform: "translateY(40px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
          }
      }
  },
  },
  plugins: [],
}
