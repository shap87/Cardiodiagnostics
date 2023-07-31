/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        xl: '1112px',
      },
    },
    extend: {
      colors: {
        primary: '#e01f45',
        second: '#EA5252',
        gray: '#f9f9f9',
        'gray-black': '#6a6a6a',
        'second-black': '#222222',
      },
      borderRadius: {
        '4xl': '32px',
      },
      boxShadow: {
        form: '6px 6px 18px 0px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
