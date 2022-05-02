import './index.css';
import Home from './components/Home'
import Login from './components/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
