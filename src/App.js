import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FilmDetails from './FilmDetails';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:title" element={<FilmDetails />} />
      </Routes>
    </Router>
  )
}

export default App