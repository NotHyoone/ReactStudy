import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Day1ex from './Day1ex';
import Day2ex from './Day2ex';


function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <Link to="/day1">Day 1</Link> | <Link to="/day2">Day 2</Link>
      </nav>
      <Routes>
        <Route path="/day1" element={<Day1ex />} />
        <Route path="/day2" element={<Day2ex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
