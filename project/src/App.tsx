import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { FarePage } from './pages/FarePage';
import { FareDetailsPage } from './pages/FareDetailsPage';
import { CustomCursor } from './components/CustomCursor';
import { AiAssistant } from './components/AiAssistant';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <CustomCursor />
      <AiAssistant />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/fare" element={<FarePage />} />
        <Route path="/fare/details" element={<FareDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;