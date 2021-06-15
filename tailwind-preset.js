module.exports = {
     theme: {
       extend: {
  
        colors: {
          primary: '#FF1616',
          secondary: {
            'purple': '#CB16FF',
            'gray': '#D9D9D9',
            'gold': '#EAC218',
          },
          text: '#000000',
          bg: '#FFFFFF',
        },
        fontFamily: {
          'mont': ['Montserrat', 'Arial'],
          'rale': ['Raleway', 'sans-serif']
        },
        fontSize: {
          'mont-lt': ['48px', '58.51px'],
          'mont-rg': ['49px', '59.73px'],
          'mont-bd': ['49px', '59.73px'],
          'rale': ['49px', '57.53px'],
          'body-title-mont': ['16px', '20px'],
          'body-mont': ['14px', '17px'],
          'body-title-rale': ['16px', '20px'],
          'body-rale': ['14px', '16px'],
          'btn-text': ['30px', '100%'],
        },
        borderRadius: {
          DEFAULT: '15px',
          'card': '10px',
        },
        spacing: {
          'btn-w': '278.55px',
          'btn-h': '73px',
        },
        boxShadow: {
          'contained': '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
          'card': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        letterSpacing: {
          'btn': '0.055em'
        },
        margin: {
          'nav-serch': '1.313rem',
        },
  
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }