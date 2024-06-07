import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home.js';
import DragonMinutes from './Pages/Projects/DragonMinutes.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/DragonMinutes" element={<DragonMinutes />} />
      </Routes> 
    </div>
  );
}

export default App;
