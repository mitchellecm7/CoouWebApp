import React, { useState } from 'react';
import departments from '../../assets/departmentsData';

const Departments1b = ({ navigation }) => {
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level', '500 level'];
  const semesters = ['1st semester', '2nd semester'];

  // Replace with your actual departments data
   const filteredDepartments = departments.filter(department => department.id > 2 && department.id < 3);


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

    const departmentPrefixes = {
      'Department of ENGLISH': 'English',
      'Department of IGBO LANGUAGE & LINGUISTICS': 'Igbo&Linguistics',
      'Department of MUSIC': 'Music',
      'Department of PHILOSOPHY': 'Philosophy',
      'Department of RELIGION & SOCIETY': 'Religion&Society',
      'Department of THEATRE ARTS': 'TheatreArts',
    };

    const departmentPrefix = departmentPrefixes[selectedDepartment];
    
    if (!departmentPrefix) return;

    const levelNumber = selectedLevel.split(' ')[0];
    const semesterNumber = semester.includes('1st') ? '1' : '2';
    const targetScreen = `${departmentPrefix}${levelNumber}${semesterNumber}`;

    if (targetScreen) {
      navigation.push(targetScreen, {
        department: selectedDepartment,
        level: selectedLevel,
        semester: semester,
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
    // Modal Styles
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
      padding: '20px',
    },
    modalContent: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#333',
      padding: '5px',
    },
    closeButtonHover: {
      color: '#000',
    },
    modalButton: {
      width: '100%',
      padding: '15px 20px',
      margin: '8px 0',
      background: 'none',
      border: 'none',
      borderBottom: '1.5px solid #1d1615',
      color: '#1d1615',
      fontSize: '16px',
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'all 0.2s ease',
    },
    modalButtonHover: {
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
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

        {/* Level Selection Modal */}
        {isLevelMenuVisible && (
          <div style={styles.modalOverlay} onClick={toggleLevelMenu}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={{
                  ...styles.closeButton,
                  ...(hoverStates.closeButton ? styles.closeButtonHover : {})
                }}
                onClick={toggleLevelMenu}
                onMouseEnter={() => handleMouseEnter('closeButton')}
                onMouseLeave={() => handleMouseLeave('closeButton')}
              >
                ×
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  style={{
                    ...styles.modalButton,
                    ...(hoverStates.modalButtons[level] ? styles.modalButtonHover : {})
                  }}
                  onClick={() => toggleSemesterMenu(level)}
                  onMouseEnter={() => handleMouseEnter(`modalButtons.${level}`)}
                  onMouseLeave={() => handleMouseLeave(`modalButtons.${level}`)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Semester Selection Modal */}
        {isSemesterMenuVisible && (
          <div style={styles.modalOverlay} onClick={() => setSemesterMenuVisible(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={{
                  ...styles.closeButton,
                  ...(hoverStates.closeButton ? styles.closeButtonHover : {})
                }}
                onClick={() => setSemesterMenuVisible(false)}
                onMouseEnter={() => handleMouseEnter('closeButton')}
                onMouseLeave={() => handleMouseLeave('closeButton')}
              >
                ×
              </button>
              {semesters.map((semester) => (
                <button
                  key={semester}
                  style={{
                                     ...styles.modalButton,
                  ...(hoverStates.modalButtons[semester] ? styles.modalButtonHover : {})
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

export default Departments1b;