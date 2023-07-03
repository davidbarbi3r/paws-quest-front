/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // extend: {
    //   colors: {
    //     'background': '#E8EDDF',
    //     'primary': '#242423',
    //     'secondary': '#F5CB5C',
    //   },
    // },
    fontFamily: {
      'title': ['var(--font-margarine)', 'cursive'],
      'body': ['var(--font-space-mono)', 'sans-serif'],
    },
  },
  plugins: [],
}
