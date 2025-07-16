import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import BurgerBackground from './components/BurgerBackground';
import Burgers from './components/Burgers';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<><BurgerBackground /> <Burgers /> <Footer /></>}/>
            <Route path="/signup" element={<SignUpForm />} />
            // ...
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

