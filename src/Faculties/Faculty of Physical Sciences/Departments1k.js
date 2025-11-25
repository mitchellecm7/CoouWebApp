import React, { useState } from 'react';
import departments from '../../assets/departmentsData';
import { useNavigate } from 'react-router-dom';

const Departments1k = ({  }) => {
    const navigate = useNavigate();

  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level'];
  const semesters = ['1st semester', '2nd semester'];

  // Replace with your actual departments data
    const filteredDepartments = departments.filter(department => department.id > 11 && department.id < 12);

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

  // Internal CSS Styles
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    departmentCard: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    departmentHeader: {
      position: 'relative',
      marginTop: '20px',
      height: '90px',
      marginBottom: '10px',
      width: '100%',
      maxWidth: '300px',
      borderRadius: '20px',
      backgroundColor: 'green',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    departmentHeaderHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    departmentText: {
      fontSize: '16px',
      fontWeight: '700',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
    },
    dropdownButton: {
      position: 'absolute',
      right: '10px',
      top: '5px',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '5px',
    },
    dropdownIcon: {
      fontSize: '16px',
      transition: 'transform 0.2s ease',
    },
    dropdownIconHover: {
      transform: 'scale(1.1)',
    },
    // Updated Modal Styles (from QuickStudy)
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
    // Mobile Responsive Styles
    mobileStyles: {
      container: {
        padding: '15px',
      },
      departmentHeader: {
        height: '80px',
        maxWidth: '280px',
      },
      departmentText: {
        fontSize: '14px',
        padding: '0 15px',
      },
      modalContent: {
        margin: '20px',
        padding: '15px',
      },
      modalButton: {
        padding: '12px 15px',
        fontSize: '14px',
      },
    },
    smallMobileStyles: {
      container: {
        padding: '10px',
      },
      departmentHeader: {
        height: '70px',
        maxWidth: '260px',
        marginTop: '15px',
      },
      departmentText: {
        fontSize: '13px',
        padding: '0 10px',
      },
      modalContent: {
        margin: '10px',
        padding: '12px',
      },
      closeButton: {
        top: '5px',
        right: '10px',
        fontSize: '20px',
      },
      modalButton: {
        padding: '10px 12px',
        fontSize: '13px',
      },
    },
  };

  // Function to handle hover effects
  const [hoverStates, setHoverStates] = useState({
    department: false,
    dropdown: false,
    closeButton: false,
    modalButtons: {},
  });

  const handleMouseEnter = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: true }));
  };

  const handleMouseLeave = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: false }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {filteredDepartments.map((department) => (
          <div style={styles.departmentCard} key={department.id}>
            <div 
              style={{
                ...styles.departmentHeader,
                ...(hoverStates.department ? styles.departmentHeaderHover : {})
              }}
              onMouseEnter={() => handleMouseEnter('department')}
              onMouseLeave={() => handleMouseLeave('department')}
            >
              <span style={styles.departmentText}>{department.name}</span>
              <button 
                style={styles.dropdownButton}
                onClick={() => toggleLevelMenu(department.name)}
                onMouseEnter={() => handleMouseEnter('dropdown')}
                onMouseLeave={() => handleMouseLeave('dropdown')}
              >
                <span style={{
                  ...styles.dropdownIcon,
                  ...(hoverStates.dropdown ? styles.dropdownIconHover : {})
                }}>
                  ▼
                </span>
              </button>
            </div>
          </div>
        ))}

        {/* Level Selection Modal - Updated Styling */}
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
                onMouseEnter={() => handleMouseEnter('closeButton')}
                onMouseLeave={() => handleMouseLeave('closeButton')}
              >
                ✕
              </button>
              <h3 style={{marginBottom: '15px', color: '#333'}}>Select Level</h3>
              {levels.map((level) => (
                <button
                  key={level}
                  style={{
                    ...styles.modalButton,
                    ...(hoverStates.modalButtons[level] ? { backgroundColor: '#f5f5f5' } : {})
                  }}
                  onClick={() => {
                    setLevelMenuVisible(false);
                    toggleSemesterMenu(level);
                  }}
                  onMouseEnter={() => handleMouseEnter(`modalButtons.${level}`)}
                  onMouseLeave={() => handleMouseLeave(`modalButtons.${level}`)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Semester Selection Modal - Updated Styling */}
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
                onMouseEnter={() => handleMouseEnter('closeButton')}
                onMouseLeave={() => handleMouseLeave('closeButton')}
              >
                ✕
              </button>
              <h3 style={{marginBottom: '15px', color: '#333'}}>Select Semester</h3>
              {semesters.map((semester) => (
                <button
                  key={semester}
                  style={{
                    ...styles.modalButton,
                    ...(hoverStates.modalButtons[semester] ? { backgroundColor: '#f5f5f5' } : {})
                  }}
                  onClick={() => handleSemesterSelection(semester)}
                  onMouseEnter={() => handleMouseEnter(`modalButtons.${semester}`)}
                  onMouseLeave={() => handleMouseLeave(`modalButtons.${semester}`)}
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