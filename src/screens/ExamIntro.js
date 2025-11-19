import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamIntro = () => {
  const navigate = useNavigate();
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level', '500 level'];
  const semesters = ['1st semester', '2nd semester'];

  const toggleLevelMenu = () => {
    setLevelMenuVisible(!isLevelMenuVisible);
  };

  const toggleSemesterMenu = (level) => {
    setSelectedLevel(level);
    setLevelMenuVisible(false);
    setSemesterMenuVisible(true);
  };

  const handleSemesterSelection = (semester) => {
    setSemesterMenuVisible(false);

    let targetScreen = '';
    if (selectedLevel === '100 level' && semester === '1st semester') {
      targetScreen = 'screen1001';
    } else if (selectedLevel === '100 level' && semester === '2nd semester') {
      targetScreen = 'screen1002';
    } else if (selectedLevel === '200 level' && semester === '1st semester') {
      targetScreen = 'screen2001';
    } else if (selectedLevel === '200 level' && semester === '2nd semester') {
      targetScreen = 'screen2002';
    } else if (selectedLevel === '300 level' && semester === '1st semester') {
      targetScreen = 'screen3001';
    } else if (selectedLevel === '300 level' && semester === '2nd semester') {
      targetScreen = 'screen3002';
    } else if (selectedLevel === '400 level' && semester === '1st semester') {
      targetScreen = 'screen4001';
    } else if (selectedLevel === '400 level' && semester === '2nd semester') {
      targetScreen = 'screen4002';
    } else if (selectedLevel === '500 level' && semester === '1st semester') {
      targetScreen = 'screen5001';
    } else if (selectedLevel === '500 level' && semester === '2nd semester') {
      targetScreen = 'screen5002';
    }

    if (targetScreen) {
      navigate(`/${targetScreen}`, {
        state: {
          level: selectedLevel,
          semester: semester,
        }
      });
    }
  };

  // Internal CSS styles
  const styles = {
    safeArea: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '800px'
    },
    title: {
      fontSize: '14px',
      fontWeight: '800',
      marginBottom: '20px',
      color: '#1d1615',
      textAlign: 'center',
      lineHeight: '1.5',
      whiteSpace: 'pre-line'
    },
    startExamButton: {
      marginTop: '20px',
      height: '70px',
      width: '200px',
      borderRadius: '30px',
      backgroundColor: 'green',
      color: '#fff',
      border: 'none',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    startExamButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
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
      zIndex: 1000
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
      position: 'relative'
    },
    closeButton: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#000',
      marginBottom: '10px'
    },
    modalButton: {
      padding: '10px 20px',
      margin: '5px 0',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#1d1615',
      borderBottom: '1.5px solid black',
      textAlign: 'center',
      width: '100%',
      transition: 'background-color 0.2s ease'
    },
    modalButtonHover: {
      backgroundColor: '#f5f5f5'
    }
  };

  // State for hover effects
  const [isButtonHovered, setButtonHovered] = useState(false);

  return (
    <div style={styles.safeArea}>
      <div style={styles.container}>
        <p style={styles.title}>
          Welcome to the CBT feature, Your Personal GP Calculator and Practicals' Past Question of this Application.{' '}
          To proceed click the START-EXAM button below then indicate by clicking your level, then your semester of choice.{' '}
          For the CBT test, click the course which you would like to take as an exam.{' '}
          For Your Personal GP Calculator swipe left of your screen or click the titled header "Your Personal GP Calculator"{' '}
          (and ensure to input your Course code, units and grade where specified).{' '}
          For Practical Past Questions, swipe left of your screen or click the titled header "Practical Past Questions"{' '}
          (and have full access to that your current levels' semester Practical Past Questions).
        </p>
        <button 
          style={{
            ...styles.startExamButton,
            ...(isButtonHovered ? styles.startExamButtonHover : {})
          }}
          onClick={toggleLevelMenu}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          START-EXAM
        </button>
      </div>

      {isLevelMenuVisible && (
        <div style={styles.modalOverlay} onClick={toggleLevelMenu}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={toggleLevelMenu}>
              ×
            </button>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => toggleSemesterMenu(level)}
                style={styles.modalButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {isSemesterMenuVisible && (
        <div style={styles.modalOverlay} onClick={() => setSemesterMenuVisible(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSemesterMenuVisible(false)}>
              ×
            </button>
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => handleSemesterSelection(semester)}
                style={styles.modalButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
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

export default ExamIntro;