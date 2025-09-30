// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... vos chemins
  ],
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 👈 Ajoutez ceci
    // ... autres plugins
  ],
}