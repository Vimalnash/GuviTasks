import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <UserContext>
  //     <App />
  //   </UserContext>
  // </React.StrictMode>,
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
)
