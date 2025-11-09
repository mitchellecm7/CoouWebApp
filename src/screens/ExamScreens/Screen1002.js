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
          onClick={() => navigate('/chem172')}
        >
          <span className="category-title">CHEM 172</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/phy192')}
        >
          <span className="category-title">Phy 192</span>
        </button>
      </div>
    </div>
  );
};

const SecondSemester100Level = () => {
  const navigate = useNavigate();
  const level = "100";
  const semester = "2";

  return (
    <div className="screen-container">
      <div className="category-grid">
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'cis102' } 
          })}
        >
          <span className="category-title">Cos 102</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'phy102' } 
          })}
        >
          <span className="category-title">Phy 102</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'chem122' } 
          })}
        >
          <span className="category-title">Chem 122</span>
        </button>
        <button 
          className="category-button"
          onClick={() => navigate('/exam-mode', { 
            state: { level, semester, category: 'math102' } 
          })}
        >
          <span className="category-title">Math 102</span>
        </button>
      </div>
    </div>
  );
};

const Screen1002 = () => {
  const navigate = useNavigate();
  
  const routes = [
    { key: 'first', title: 'Courses' },
    { key: 'second', title: 'GP Calculator' },
    { key: 'third', title: 'PDF Past-Questions' },
  ];

  const renderScene = (route) => {
    switch (route.key) {
      case 'first':
        return <SecondSemester100Level />;
      case 'second':
        return <GPACalculator storageKey="courses1" />;
      case 'third':
        return <PdfPastQuestions />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ScreenHeader 
        title="100 level 2nd Semester" 
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

export default Screen1002;