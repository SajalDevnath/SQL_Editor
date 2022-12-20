module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        "lightpurple" : "#8c66e6",
        "darkpurple":"#6457cd",
        "myblack":"#262626"
      },
      screens: {
        sm: { max: '767px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '768px', max: '1023px' }, // Tablet (matches max: iPad Pro @ 1112px).
        md2: {min: '1024px', max: '1377px'},
        lg: { min: '1378px' }, // Desktop smallest.
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'Sanspro': ['Source Sans Pro', 'sans-serif'],
      },

    },
  },
  plugins: [],
}