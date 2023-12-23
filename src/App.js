import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateList from './components/CandidateList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate/registration" element={<CandidateRegistration />} />
          <Route path="/candidate/list" element={<CandidateList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;