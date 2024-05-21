import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./styles.css";
import Masuk from './MasukPage/Masuk'
import { LandingPage } from "./LandingPage/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/masuk' element={<Masuk />} />
      </Routes>
    </Router>
  );
}
