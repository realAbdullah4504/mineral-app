/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'geological-section': "url('/src/assets/images/geological-section.png')",
        'san-andreas-fault': "url('/src/assets/images/san-andreas-fault.png')",
        'pakistan-image': "url('/src/assets/images/pakistanPic.png')",
        'china-image': "url('/src/assets/images/China.png')",
        'rectangle-image': "url('/src/assets/images/Rectangle.png')",
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
