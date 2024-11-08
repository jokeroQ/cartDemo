import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import ShoppingCart from './pages/shopping-cart/ShoppingCart'
import BottomNav from './components/BottomNav';
const App = () => {
    return (
        <Router>
            <div style={{ paddingBottom: '50px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                </Routes>
                <BottomNav />
            </div>
        </Router>
    );
};

export default App;
