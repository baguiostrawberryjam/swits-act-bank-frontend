import { useState } from 'react'
import Account from './pages/Account'
import Transactions from './pages/Transactions'
import LayoutWrapper from './components/Layout/LayoutWrapper'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/account" element={<LayoutWrapper><Account/></LayoutWrapper>} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
