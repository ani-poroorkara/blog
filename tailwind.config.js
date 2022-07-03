module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}