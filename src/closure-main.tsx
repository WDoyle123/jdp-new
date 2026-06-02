import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Closure from './components/Closure.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Closure />
  </StrictMode>,
)
