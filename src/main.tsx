import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home/index.tsx'
import { GlobalStyles } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>

      <GlobalStyles theme={Theme} />

      <Home />
      
    </ThemeProvider>
  </StrictMode>,
)
