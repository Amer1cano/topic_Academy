import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loader from './components/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div><Loader/></div>} >
      <App />
    </Suspense>
  </React.StrictMode>,
)
