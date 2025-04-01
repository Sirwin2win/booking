/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-home": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/compound2.avif')",
        "hero-room": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/room06.jpeg')",
        "hero-about": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/chat.avif')",
        "hero-rooms": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/room2.avif')",
        "hero-contact": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/customerService.avif')",
        "hero-reg": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/reg.avif')",
        "hero-amen": "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5) ),url('../../assets/images/amen.avif')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
