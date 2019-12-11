import 'typeface-roboto'
import { createMuiTheme } from '@material-ui/core/styles'

export const gatsbyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#ffaf1d',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default gatsbyTheme
