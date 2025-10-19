import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarbucksPresentation from './StarbucksPresentation'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarbucksPresentation />
  </React.StrictMode>
)
