import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Navigation = lazy(() => import('./routes/navigation'))
const Home = lazy(() => import('./routes/home'))

function App() {
  const [mode, setMode] = React.useState('light')
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const defaultTheme = createTheme({ palette: { mode } })

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />    
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigation mode={mode} toggleColorMode={toggleColorMode} />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
