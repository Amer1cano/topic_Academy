/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'miniPhone':{'min': '280px', 'max' : '320px'},
      'phone':{'min': '320px', 'max' : '400px'},
      'bigPhone':{'min': '400px', 'max' : '576px'},
      'miniTablet':{'min': '576px', 'max' : '768px'},
      'tablet':{'min': '768px', 'max' : '992px'},
      'bigTablet':{'min': '992px', 'max' : '1024px'},
      'miniDesktop':{'min': '1024px', 'max' : '1200px'},
      'desktop':{'min': '1200px', 'max' : '1366px'}
    },
    extend: {
      backgroundImage:{
        'building':"url('/public/head-images/building.png')",
        'button':"linear-gradient(rgba(95, 172, 169, 1), rgba(115, 192, 189, 1),rgba(95, 172, 169, 1))",
        'btn-hover':"linear-gradient(rgba(98, 172, 169, 1), rgba(120, 192, 189, 1),rgba(98, 172, 169, 1))"
        

      },
      backgroundColor:{
        'section':'rgba(197, 242, 203, 0.65)'
      },
      backgroundSize:{
        '960':'60rem',
        '880':'55rem',
        '640':'40rem',
        '480':'30rem',
        '400':'25rem',
        '320':'20rem',

      },
    
      boxShadow:{
        '1xl': '20px 0 50px 15px rgba(255, 255, 255, 1)',
        '0xl': '0 10px 50px 0 rgba(173, 216, 230, 1)',
      }
    },
  },
  plugins: [],
}