import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabView from '../../components/TabView';
import GPACalculator from '../../components/GPACalculator';
import { ScreenHeader } from '../../App';

const PdfPastQuestions = () => {
  const navigate = useNavigate();
  
  return (
    <div className="screen-container">
      <div className="category-grid">
        <button 
          className="category-button"
          onClick={() => navigate('/chem171')}
        >
          <span className="category-title">CHEM 171</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/phy107')}
        >
          <span className="category-title">Phy 107</span>
        </button>
      </div>
    </div>
  );
};

const FirstSemester100Level = () => {
  const navigate = useNavigate();
  const level = "100";
  const semester = "1";

  return (
    <div className="screen-container">
      <div className="category-grid">
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'cis101' } 
          })}
        >
          <span className="category-title">Cis 101</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'phy101' } 
          })}
        >
          <span className="category-title">Phy 101</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'bio151' } 
          })}
        >
          <span className="category-title">Bio 151</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'math101/111' } 
          })}
        >
          <span className="category-title">Math 101 / 111</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'chem101' } 
          })}
        >
          <span className="category-title">Chem 101</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'statistics' } 
          })}
        >
          <span className="category-title">Statistics</span>
        </button>
      </div>
    </div>
  );
};

const Screen2001 = () => {
  const navigate = useNavigate();
  
  const routes = [
    { key: 'first', title: 'Courses' },
    { key: 'second', title: 'GP Calculator' },
    { key: 'third', title: 'Practical Past-Questions' },
  ];

  const renderScene = (route) => {
    switch (route.key) {
      case 'first':
        return <FirstSemester100Level />;
      case 'second':
        return <GPACalculator storageKey="courses2" />;
      case 'third':
        return <PdfPastQuestions />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ScreenHeader 
        title="100 level 1st Semester" 
        onBack={() => navigate(-1)}
      />
      <div className="screen-content">
        <TabView 
          routes={routes} 
          renderScene={renderScene}
          initialIndex={0}
        />
      </div>
    </div>
  );
};

export default Screen2001;