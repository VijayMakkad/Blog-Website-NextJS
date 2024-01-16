/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/heroimg.jpg')",
        'explore-pattern': "url('/exploreimg.jpg')",
        'post-pattern': "url('/postimg.jpg')",
        'slug-pattern': "url('/slugimg.jpg')",
      },
      fontFamily: {
        Tilt: ['Tilt Prism', 'sans-serif'],
        Neon: ['Tilt Neon', 'sans-serif'],
      },
    },
  },

  plugins: [],
}
