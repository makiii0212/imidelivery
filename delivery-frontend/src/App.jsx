import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import BurgerBackground from './components/BurgerBackground';
import Burgers from './components/Burgers';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<><BurgerBackground /> <Burgers /></>}/>
            <Route path="/signup" element={<SignUpForm />} />
            // ...
          </Routes>
        </main>
        <footer className="app-footer">
          <small>© 2025 Some student from IMI :)</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

