import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    // Close semester menu if open
    setSemesterMenuVisible(false);
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
      navigate(`/${targetScreen.toLowerCase()}`, {
        state: {
          department: selectedDepartment,
          level: selectedLevel,
          semester: semester,
        }
      });
    }
  };

  // Internal CSS styles
  const styles = {
    quickStudyContainer: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      padding: '20px',
      position: 'relative',
    },
    searchContainer: {
      padding: '10px',
      backgroundColor: '#f2f2f2',
      marginTop: '10px',
      borderRadius: '8px',
    },
    searchInput: {
      height: '50px',
      width: '100%',
      border: '2px solid #1d1615',
      borderRadius: '8px',
      padding: '0 10px',
      backgroundColor: '#fff',
      color: '#333',
      fontSize: '16px',
      outline: 'none',
    },
    departmentsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    departmentItem: {
      width: '100%',
      maxWidth: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    departmentName: {
      marginTop: '20px',
      height: '90px',
      width: '100%',
      borderRadius: '20px',
      backgroundColor: 'green',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    departmentText: {
      fontSize: '16px',
      fontWeight: '700',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
    },
    iconButton: {
      position: 'absolute',
      right: '10px',
      top: '5px',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
      padding: '5px',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      width: '60%',
      maxWidth: '300px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    closeButton: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#000',
      marginBottom: '10px',
      padding: '5px',
    },
    modalButton: {
      padding: '15px 20px',
      margin: '5px 0',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#1d1615',
      borderBottom: '1.5px solid #e0e0e0',
      textAlign: 'center',
      width: '100%',
      transition: 'background-color 0.2s ease',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.quickStudyContainer}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Search departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={(e) => {
            e.target.style.borderColor = 'green';
            e.target.style.backgroundColor = '#f9fff9';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#1d1615';
            e.target.style.backgroundColor = '#fff';
          }}
        />
      </div>

      <div style={styles.departmentsList}>
        {filteredDepartments.map((department) => (
          <div key={department.id} style={styles.departmentItem}>
            <div 
              style={styles.departmentName}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.backgroundColor = '#006400';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'green';
              }}
            >
              <span style={styles.departmentText}>{department.name}</span>
              <button 
                onClick={() => toggleLevelMenu(department.name)} 
                style={styles.iconButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ▼
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Level Selection Modal */}
      {isLevelMenuVisible && (
        <div 
          style={styles.modalOverlay} 
          onClick={() => setLevelMenuVisible(false)}
        >
          <div 
            style={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={styles.closeButton} 
              onClick={() => setLevelMenuVisible(false)}
            >
              ✕
            </button>
            <h3 style={{marginBottom: '15px', color: '#333'}}>Select Level</h3>
            {levels.map((level) => (
              <button 
                key={level} 
                onClick={() => {
                  setLevelMenuVisible(false);
                  toggleSemesterMenu(level);
                }} 
                style={styles.modalButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Semester Selection Modal */}
      {isSemesterMenuVisible && (
        <div 
          style={styles.modalOverlay} 
          onClick={() => setSemesterMenuVisible(false)}
        >
          <div 
            style={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={styles.closeButton} 
              onClick={() => setSemesterMenuVisible(false)}
            >
              ✕
            </button>
            <h3 style={{marginBottom: '15px', color: '#333'}}>Select Semester</h3>
            {semesters.map((semester) => (
              <button 
                key={semester} 
                onClick={() => handleSemesterSelection(semester)} 
                style={styles.modalButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
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