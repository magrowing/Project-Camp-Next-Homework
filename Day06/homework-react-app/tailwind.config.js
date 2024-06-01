/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F4F4F',
        secondary: '#35383E',
        third: '#ACACAC',
        black: '#000',
        white: '#FFF',
        opacity5: '#35383E0D',
        opacity10: '#35383E1A',
      },
      borderRadius: {
        sm: '0.4rme',
        md: '0.8rem',
      },
      fontSize: {
        md: '1.4rem',
        lg: '2.8rem',
      },
    },
  },
  plugins: [],
};
