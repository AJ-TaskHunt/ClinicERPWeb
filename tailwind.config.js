/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#326CFF',
          light: '#478CF7',
          dark: '#1F8BCC',
        },
        cyan: {
          DEFAULT: '#33F5FF',
          light: '#26C6DA',
        },
        status: {
          success: '#20D608',
          error: '#D60808',
          warning: '#FABE02',
          pending: '#F7A36F',
        },
        accent: {
          pink: '#FF68AC',
          yellow: '#FFE177',
          gold: '#DEB945',
        },
        bg: {
          primary: '#F5F5F5',
          card: '#FDFDFD',
        },
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(117deg, rgba(51, 245, 255, 0.73) -0.38%, #497DFF 100.9%)',
        'gradient-alt': 'linear-gradient(117deg, rgba(51, 245, 255, 0.86) 12.3%, #497DFF 100.9%)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        stat: '0 4px 4px 0',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
