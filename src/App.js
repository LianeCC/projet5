import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import FicheLogement from './pages/fichelogement'; 
import APropos from './pages/apropos'; 
import NotFound from './pages/notfound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bienvenue dans l'application Kasa</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;