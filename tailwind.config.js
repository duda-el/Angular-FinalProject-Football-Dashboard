/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Add your Angular source files here
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1c21", // Add your navbar dark color
        premium: "#f5c451", // Add your premium yellow color
        input: "#2e3034", // Input field background color
        placeholder: "#a0a0a0", // Placeholder text color
      },
    },
  },
  plugins: [],
};
