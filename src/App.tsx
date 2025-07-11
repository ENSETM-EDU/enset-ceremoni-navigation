import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';
import GenderSelectionPage from './pages/GenderSelectionPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-8"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/navigate/:id" element={<NavigationPage />} />
            <Route path="/gender-selection/:type" element={<GenderSelectionPage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;