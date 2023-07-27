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
        xl: '1080px',
      },
    },
    boxShadow: {
      card: '0px 4px 30px 0px rgba(0,0,0,0.2)',
    },
    borderRadius: {
      '4xl': '32px',
    },
    extend: {
      colors: {
        'main-red': '#e01f45',
        gray: '#f9f9f9',
        'gray-black': '#6a6a6a',
        'light-black': '#222222',
      },
    },
  },
  plugins: [],
}
