import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Signup from './pages/signup';

function Signup() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default Signup