/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        carbon: "#11131a",
        ember: "#f2b16f",
        glow: "#f8e2c4"
      },
      boxShadow: {
        aura: "0 0 40px rgba(242, 177, 111, 0.25)",
        glass: "0 20px 40px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-texture": "radial-gradient(circle at top, rgba(248,226,196,0.35), transparent 55%), linear-gradient(180deg, rgba(10,10,15,0.7), rgba(10,10,15,1))",
        "mesh-gradient": "linear-gradient(120deg, rgba(242,177,111,0.08), rgba(248,226,196,0.02)), radial-gradient(circle at 15% 20%, rgba(242,177,111,0.15), transparent 55%), radial-gradient(circle at 80% 10%, rgba(148,121,232,0.12), transparent 45%)"
      }
    }
  },
  plugins: []
};
