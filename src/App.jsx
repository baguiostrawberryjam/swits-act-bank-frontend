import { useState } from 'react'
import Account from './pages/Account'
import Transactions from './pages/Transactions'
import LayoutWrapper from './components/Layout/LayoutWrapper'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Navigate to="/account" />} />
          <Route path="/account" element={<LayoutWrapper><Account/></LayoutWrapper>} />
          <Route path="/transactions" element={<LayoutWrapper><Transactions/></LayoutWrapper>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
