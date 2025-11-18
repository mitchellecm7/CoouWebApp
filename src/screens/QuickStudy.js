import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../screens/UploadScreens/styles/QuickStudy.css';
import departments from "../../src/assets/departmentsData";

const QuickStudy = () => {
  const navigate = useNavigate();
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const levels = ['100level', '200level', '300level', '400level'];
  const semesters = ['1st semester', '2nd semester'];

  const filteredDepartments = departments.filter(department =>
    department.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      'Department of COMPUTER SCIENCE': 'cis',
    };

    const departmentPrefix = departmentScreenMap[selectedDepartment]; // 'cis'
    const levelPrefix = selectedLevel.replace('level', '').trim();    // '100' 
    const semesterPrefix = semester === '1st semester' ? '1' : '2';  // '1'
    const targetScreen = `${departmentPrefix}${levelPrefix}${semesterPrefix}`; // 'cis1001'

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
    <div className="quick-study-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="departments-list">
        {filteredDepartments.map((department) => (
          <div key={department.id} className="department-item">
            <div className="department-name">
              <span className="department-text">{department.name}</span>
              <button onClick={() => toggleLevelMenu(department.name)} className="icon-button">
                ▼
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Level Modal */}
      {isLevelMenuVisible && (
        <div className="modal-overlay" onClick={() => setLevelMenuVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setLevelMenuVisible(false)}>
              ✕
            </button>
            {levels.map((level) => (
              <button key={level} onClick={() => toggleSemesterMenu(level)} className="modal-button">
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
            <button className="close-button" onClick={() => setSemesterMenuVisible(false)}>
              ✕
            </button>
            {semesters.map((semester) => (
              <button key={semester} onClick={() => handleSemesterSelection(semester)} className="modal-button">
                {semester}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickStudy;