import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import NavBar from './components/layout/NavBar';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/pokemon/:pokemonIndex" element={<Pokemon/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
