module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        herosize: '80vh',
      },
      colors: {
        logo: '#2874A6',
        primary: '#D4E6F1',
        secondary: '#3498DB',
        additional: '#EAF2F8',
      },
      fontFamily: {
        body: ["'Nunito Sans', sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
