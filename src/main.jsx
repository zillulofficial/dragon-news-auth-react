import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/ROutes.jsx'
import Providers from './Providers/Providers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
    <RouterProvider router={Router} />
    </Providers>
  </React.StrictMode>,
)
