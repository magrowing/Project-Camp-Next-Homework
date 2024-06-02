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
        sm: '0.4rem',
        md: '0.8rem',
      },
      fontSize: {
        md: '1.4rem',
        lg: '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.bold': {
          '@apply font-bold': '',
        },
        '.section-wrapper': {
          '@apply w-[37.5rem] px-[2.5rem] py-[4rem] bg-white rounded-md': '',
        },
        '.form-wrapper': {
          '@apply flex flex-col gap-[1.6rem]': '',
        },
        '.btn-wrapper': {
          '@apply flex flex-col gap-[1.6rem] mt-[3.2rem]': '',
        },
      });
    },
  ],
};
