import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import PortfolioInfo from './components/portfolio/PortfolioInfo'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' />
          <Route path='about' />
          <Route path='services' />
          <Route path='experience' />
          <Route path='portfolio'>
            <Route path=':portfolioId' element={<PortfolioInfo />} />
          </Route>
          <Route path='testimonials' />
          <Route path='contacts' />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()