import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MarketingApp } from './components/marketingApp'
import { Header } from './components/header'

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}