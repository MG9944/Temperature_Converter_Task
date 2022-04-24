import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Converter from './components/Converter'
import History from './components/History'
//An application function in which routing is configured between the two most important components
function App() {
  return (
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/history" element={<History />} />
        </Routes>
  );
}

export default App;
