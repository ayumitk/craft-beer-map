import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
// import './fonts.scss'

// Load Montserrat typeface
// import 'typeface-montserrat'

// A custom theme for this app
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#424D4B',
      dark: '#252C2B',
      light: '#94A09E',
    },
    error: {
      main: `#CB0505`,
    },
  },
  // shadows: ['none'],
  typography: {
    fontFamily: [
      // 'Montserrat',
      // 'NotoSansJP',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Apple Color Emoji"',
    ].join(','),
  },
})

export default darkTheme
