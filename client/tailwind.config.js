/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array tells Tailwind which files to scan for class names.
  // This is crucial for Tailwind's Just-In-Time (JIT) engine to generate
  // only the CSS classes that are actually used in your project,
  // keeping the final CSS bundle size small.
  content: [
    // Scans your main HTML file (index.html) for any Tailwind classes.
    "./index.html",
    // Scans all .js, .ts, .jsx, and .tsx files within the 'src' directory
    // and its subdirectories. This covers your React components.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // The 'extend' object allows you to add custom Tailwind configurations
    // (like custom colors, fonts, spacing, etc.) without overriding
    // Tailwind's default theme.
    extend: {},
  },
  plugins: [
    // This array is where you would add any official or community-developed
    // Tailwind plugins (e.g., @tailwindcss/typography, @tailwindcss/forms).
    // For a basic setup, you might not need any plugins initially.
  ],
}