import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import NavBarNew from './NavBarNew';
import BreedingPage from './BreedingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavBarNew/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breeding" element={<BreedingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
