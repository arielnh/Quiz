
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {amber} from '@mui/material/colors';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  palette: {
    primary: amber,
    mode: 'light'   
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
  </ThemeProvider>
)
