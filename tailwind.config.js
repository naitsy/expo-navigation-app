/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
		colors: {
			primary: '#49129C',
			secondary: {
				DEFAULT: '#B40086',
				100: '#C51297',
				200: '#831266',				
			},
			terciary: '#EF2967'
		},

      	// Defino el nombre que quiero usar en los componentes
		fontFamily: {
			'work-black':  [ 'WorkSans-Black', 'sans-serif' ],
			'work-medium': [ 'WorkSans-Medium', 'sans-serif' ],
			'work-light':  [ 'WorkSans-Light', 'sans-serif' ],
		}

    },
  },
  plugins: [],
}

