import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(     // functionality, ReactDOM.createRoot
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

