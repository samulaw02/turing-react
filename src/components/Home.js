import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh',
  textAlign: 'center'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
  margin: '20px'
};

const buttonStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px'
};

function Home() {
  const [candidateCount, setCandidateCount] = useState(0);
  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      const parsedCandidates = JSON.parse(storedCandidates);
      setCandidateCount(parsedCandidates.length);
    }
  }, []);
  return (
    <div data-testid='home-component' style={homeStyle}>
      <div style={buttonContainerStyle}>
         {/* Hint: Implement this */}
          <Link to="/candidate/registration" style={buttonStyle} data-testid="registration-btn">
            Candidate Registration
          </Link>
          <Link to="/candidate/list" style={buttonStyle} data-testid="list-btn">
            Candidate List ({candidateCount})
          </Link>
      </div>
    </div>
  );
}

export default Home;
