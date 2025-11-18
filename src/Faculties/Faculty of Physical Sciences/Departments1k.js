import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Departments1k.css';

// Mock departments data - replace with your actual data
const departments = [
  { id: 12, name: 'Department of COMPUTER SCIENCE' }
];

const Departments1k = () => {
  const navigate = useNavigate();
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level'];
  const semesters = ['1st semester', '2nd semester'];

  const filteredDepartments = departments.filter(department => department.id > 11 && department.id < 12);

  const toggleLevelMenu = (departmentName) => {
    setSelectedDepartment(departmentName);
    setLevelMenuVisible(!isLevelMenuVisible);
  };

  const toggleSemesterMenu = (level) => {
    setSelectedLevel(level);
    setSemesterMenuVisible(!isSemesterMenuVisible);
  };

  const handleSemesterSelection = (semester) => {
    setSemesterMenuVisible(false);
  
    const departmentScreenMap = {
      'Department of COMPUTER SCIENCE': 'Cis',
    };
  
    const departmentPrefix = departmentScreenMap[selectedDepartment];
    const levelPrefix = selectedLevel.replace('level', '').trim();
    const semesterPrefix = semester === '1st semester' ? '1' : '2';
    const targetScreen = `${departmentPrefix}${levelPrefix}${semesterPrefix}`;
  
    if (targetScreen) {
      navigate(`/${targetScreen}`, {
        state: {
          department: selectedDepartment,
          level: selectedLevel,
          semester: semester,
        }
      });
    }
  };

  return (
    <div className="departments-container">
      <h1 className="departments-header">Departments</h1>
      <div className="departments-scroll">
        {filteredDepartments.map((department) => (
          <div className="department-card" key={department.id}>
            <div className="department-name">
              <span className="department-text">{department.name}</span>
              <button 
                onClick={() => toggleLevelMenu(department.name)} 
                className="dropdown-button"
              >
                ▼
              </button>
            </div>
          </div>
        ))}

        {/* Level Modal */}
        {isLevelMenuVisible && (
          <div className="modal-overlay" onClick={toggleLevelMenu}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={toggleLevelMenu} className="close-button">
                ×
              </button>
              {levels.map((level) => (
                <button 
                  key={level} 
                  onClick={() => toggleSemesterMenu(level)} 
                  className="modal-button"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Semester Modal */}
        {isSemesterMenuVisible && (
          <div className="modal-overlay" onClick={() => setSemesterMenuVisible(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSemesterMenuVisible(false)} className="close-button">
                ×
              </button>
              {semesters.map((semester) => (
                <button 
                  key={semester} 
                  onClick={() => handleSemesterSelection(semester)} 
                  className="modal-button"
                >
                  {semester}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments1k;