// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/global.css';
import Layout from './components/Layout/Layout';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
