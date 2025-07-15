import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import BurgerBackground from './components/BurgerBackground';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<BurgerBackground />} />
            <Route path="/signup" element={<SignUpForm />} />
            // ...
          </Routes>
        </main>
        <footer className="app-footer">
          <small>© 2025 Some student from IMI :)</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;

