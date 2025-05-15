import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopeContextProvider from './context/ShopeContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopeContextProvider>
      <App />
    </ShopeContextProvider>
  </React.StrictMode>
)
       