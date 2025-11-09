import React, { useState } from 'react';
import '../screens/UploadScreens/styles/ExamIntro.css';

const ExamIntro = ({ navigation }) => {
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
      targetScreen = 'Screen1001';
    } else if (selectedLevel === '100 level' && semester === '2nd semester') {
      targetScreen = 'Screen1002';
    } else if (selectedLevel === '200 level' && semester === '1st semester') {
      targetScreen = 'Screen2001';
    } else if (selectedLevel === '200 level' && semester === '2nd semester') {
      targetScreen = 'Screen2002';
    } else if (selectedLevel === '300 level' && semester === '1st semester') {
      targetScreen = 'Screen3001';
    } else if (selectedLevel === '300 level' && semester === '2nd semester') {
      targetScreen = 'Screen3002';
    } else if (selectedLevel === '400 level' && semester === '1st semester') {
      targetScreen = 'Screen4001';
    } else if (selectedLevel === '400 level' && semester === '2nd semester') {
      targetScreen = 'Screen4002';
    } else if (selectedLevel === '500 level' && semester === '1st semester') {
      targetScreen = 'Screen5001';
    } else if (selectedLevel === '500 level' && semester === '2nd semester') {
      targetScreen = 'Screen5002';
    }

    if (targetScreen && navigation) {
      navigation.push(targetScreen, {
        level: selectedLevel,
        semester: semester,
      });
    }
  };

  return (
    <div className="safe-area">
      <div className="container">
        <p className="title">
          Welcome to the CBT feature, Your Personal GP Calculator and Practicals' Past Question of this Application.{' '}
          To proceed click the START-EXAM button below then indicate by clicking your level, then your semester of choice.{' '}
          For the CBT test, click the course which you would like to take as an exam.{' '}
          For Your Personal GP Calculator swipe left of your screen or click the titled header "Your Personal GP Calculator"{' '}
          (and ensure to input your Course code, units and grade where specified).{' '}
          For Practical Past Questions, swipe left of your screen or click the titled header "Practical Past Questions"{' '}
          (and have full access to that your current levels' semester Practical Past Questions).
        </p>
        <button className="start-exam-button" onClick={toggleLevelMenu}>
          START-EXAM
        </button>
      </div>

      {isLevelMenuVisible && (
        <div className="modal-overlay" onClick={toggleLevelMenu}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleLevelMenu}>
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

      {isSemesterMenuVisible && (
        <div className="modal-overlay" onClick={() => setSemesterMenuVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSemesterMenuVisible(false)}>
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
  );
};

export default ExamIntro;