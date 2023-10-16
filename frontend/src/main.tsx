//import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import { HomeProvider } from './pages/Home/Context.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  /*<React.StrictMode>
  </React.StrictMode>*/
  <HomeProvider>
      <Home />
  </HomeProvider>
)
