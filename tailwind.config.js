import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/@material-tailwind/react/**/*.js", // Make sure to add this line
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#8ECAE6",
        "blue": "#219EBC",
        "dark-blue": "#023047",
        "dark-yellow": "#FFB703",
        "orange": "#FB8500",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Your existing plugin
    // Any other Tailwind CSS plugins you're using
  ],
});
