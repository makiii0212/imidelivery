import Header from './components/Header';
import BurgerBackground from './components/BurgerBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <BurgerBackground />
      </main>
      <footer className="app-footer">
        <small>© 2025 Some student from IMI :)</small>
      </footer>
    </div>
  );
}

export default App;

