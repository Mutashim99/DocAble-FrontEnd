import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
