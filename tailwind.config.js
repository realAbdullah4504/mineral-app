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
        'pexels-dario-fernandez-ruz': "url('/src/assets/images/pexels-dario-fernandez-ruz-6827529.png')",
        'pexels-jack-redgate': "url('/src/assets/images/pexels-jack-redgate-333633-2929211.png')",
        'pakistan-image': "url('/src/assets/images/pakistanPic.png')",
        'china-image': "url('/src/assets/images/China.png')",
        'rectangle-image': "url('/src/assets/images/Rectangle.png')",
        'president-image': "url('/src/assets/images/President.png')",
        'Energy-image' : "url('/src/assets/images/Energy.png')" , 
        'gypsum-image' : "url('/src/assets/images/gemstoneClassification.png')" , 
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
