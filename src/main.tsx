import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme.ts'
import { Routes } from './routes/index.tsx'
import { Toaster } from 'sonner'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>

      <Toaster
       expand={false}
      />

      <GlobalStyles theme={Theme} />

      <Routes />
      
    </ThemeProvider>
  </StrictMode>,
)
