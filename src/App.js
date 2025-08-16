import './App.css';
import Home from './Pages/Home/index.js';
import Login from './Pages/Login/index.js';
import SignUp from './Pages/SignUp/index.js';
import Cart from './Pages/Cart/index.js';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header always visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer /> {/* Footer always visible */}
    </BrowserRouter>
  );
}

export default App;
