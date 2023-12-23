import React, { useState, useEffect } from 'react';

// Base styles for the component
const alertMessage = {
  marginTop: '5px',
};

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red',
};

const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [highlightInput, setHighlightInput] = useState(false); // State for input highlighting

  const handleAddSkill = () => {
    if (formData.skill && formData.skills.length < 5) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skill],
        skill: '',
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, skills } = formData;

    if (name && email && role && skills.length > 0) {
      const isDuplicateEmail = candidates.some((candidate) => candidate.email === email);

      if (isDuplicateEmail) {
        setHighlightInput(true); // Highlight the input on duplicate email
        setRegistrationStatus('Email already exists');
      } else {
        setHighlightInput(false);
        setRegistrationStatus('Candidate profile created');
        setCandidates([...candidates, { name, email, role, skills }]);
        setFormData({ name: '', email: '', role: '', skill: '', skills: [] });
      }
    } else {
      setHighlightInput(true); // Highlight the input on missing fields
      setRegistrationStatus('Please fill in all required fields and add at least one skill');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', role: '', skill: '', skills: [] });
  };

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  return (
    <div style={centerContainerStyle}>
      <div style={formBoxStyle}>
        <div data-testid='registration-component' style={formBoxStyle}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                required
                style={inputStyle}
                data-testid='form-input-name'
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                required
                style={{ ...inputStyle, ...(highlightInput ? highlight : {}) }}
                data-testid='form-input-email'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
                value={formData.role}
                placeholder="Role"
                required
                style={inputStyle}
                data-testid='form-input-role'
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                data-testid="form-input-skill"
                type="text"
                name="skill"
                value={formData.skill}
                placeholder="Skill"
                style={inputStyle}
                onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span key={index} data-testid='skill-tag' style={skillTagStyle}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={buttonGroupStyle}>
              <button
                data-testid="submit-btn"
                type="submit"
                style={sharpEdgeButtonStyle}
                disabled={
                  !formData.name || !formData.email || !formData.role || formData.skills.length === 0
                }
              >
                Register
              </button>
              <button
                data-testid="reset-btn"
                type="button"
                style={sharpEdgeButtonStyle}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
          {registrationStatus && <p style={alertMessage} data-testid="alertMessage">{registrationStatus}</p>}
        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;