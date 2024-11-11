import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import BottomNav from './components/BottomNav';
const App = () => {
    return (
            <div style={{ paddingBottom: '50px' }}>
                <Outlet />
                <BottomNav />
            </div>
    );
};

export default App;
