import React, { useEffect, useState, useRef } from 'react';
import '../screens/UploadScreens/styles/ExamMode.css';
import { useLocation } from 'react-router-dom';

const QUESTION_SIZE = 50;

const ExamMode = () => {
  const location = useLocation();
  const { level, semester, category } = location.state || {};
  
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [textAnswers, setTextAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const quizTime = getTimeBasedOnCategory(category);
    setTimeLeft(quizTime * 60);
    getInitialQuestions();
    startTimer();
  
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  
  const getTimeBasedOnCategory = (category) => {
    if (!category) return 30;
    
    switch (true) {
      case category.toLowerCase().slice(0, 4) === 'chem':
        return 35;
      case category.toLowerCase().slice(0, 3) === 'phy':
        return 30;
      case category.toLowerCase().slice(0, 4) === 'math':
        return 50;
      case category.toLowerCase().slice(0, 3) === 'bio':
        return 25;
      case category.toLowerCase().slice(0, 3) === 'cis':
        return 30;
      case category.toLowerCase().slice(0, 3) === 'cos':
        return 30;
      default:
        return 30;
    }
  }

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearTimeout(timerRef.current);
          handleSubmit();
          return 0;
        }
        startTimer();
        return prevTime - 1;
      });
    }, 1000);
  };
  
  const getInitialQuestions = async () => {
    // Mock questions - replace with your actual data fetching
    const mockQuestions = Array.from({ length: QUESTION_SIZE }, (_, i) => ({
      id: i + 1,
      question: `Sample question ${i + 1} for ${category}`,
      option1: `Option A for Q${i + 1}`,
      option2: `Option B for Q${i + 1}`,
      option3: `Option C for Q${i + 1}`,
      option4: `Option D for Q${i + 1}`,
      correctOption: Math.floor(Math.random() * 4) + 1 // Single correct option
    }));
    setQuestions(mockQuestions);
  };

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: option });
  };

  const handleTextInputChange = (questionIndex, text) => {
    setTextAnswers({ ...textAnswers, [questionIndex]: text });
  };

  const handleSubmit = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  
    if (showResults) {
      return;
    }
  
    let correctAnswers = 0;
  
    questions.forEach((question, index) => {
      const userSelectedOption = selectedOptions[index];
      const userTextAnswer = textAnswers[index]?.trim().toLowerCase();
  
      const correctOption = question.correctOption;
      const correctAnswer = question.answer?.trim().toLowerCase();
  
      if (correctOption !== undefined && userSelectedOption === correctOption) {
        correctAnswers++;
      } else if (correctAnswer !== undefined && userTextAnswer === correctAnswer) {
        correctAnswers++;
      }
    });
  
    setScore(correctAnswers);
    setShowResults(true);
    setShowModal(true);
  };
  
  const handleTryAgain = () => {
    const quizTime = getTimeBasedOnCategory(category);
    setShowModal(false);
    setShowResults(false);
    setSelectedOptions({});
    setTextAnswers({});
    setScore(0);
    setTimeLeft(quizTime * 60);
    getInitialQuestions();
    startTimer();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const getGrade = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage > 69) return 'A';
    if (percentage >= 60 && percentage < 70) return 'B';
    if (percentage >= 50 && percentage < 60) return 'C';
    if (percentage >= 45 && percentage < 50) return 'D';
    if (percentage >= 40 && percentage < 45) return 'E';
    return 'F';
  };
  
  const getRemark = (score) => {
    const remark = (score / questions.length) * 100;
    if (remark > 69) return 'Excellent';
    if (remark >= 60 && remark < 70) return 'Very Good';
    if (remark >= 50 && remark < 60) return 'Good';
    if (remark >= 45 && remark < 50) return 'Fair';
    if (remark >= 40 && remark < 45) return 'Pass';
    return 'Fail';
  };

  return (
    <div className="exam-mode-container">
      <div className="timer-container">
        <span className="timer">{formatTime(timeLeft)}</span>
      </div>
      
      <div className="questions-list">
        {questions.map((item, index) => (
          <div key={index} className="question-container">
            <h3 className="question">{`${index + 1}) ${item.question}`}</h3>
            {item.correctOption ? (
              <div className="options-container">
                {[1, 2, 3, 4].map((optionNum) => (
                  <button
                    key={optionNum}
                    className={`option ${
                      selectedOptions[index] === optionNum ? 'selected' : ''
                    } ${
                      showResults && item.correctOption === optionNum ? 'correct' : ''
                    } ${
                      showResults && selectedOptions[index] === optionNum && 
                      selectedOptions[index] !== item.correctOption ? 'wrong' : ''
                    }`}
                    onClick={() => handleOptionSelect(index, optionNum)}
                    disabled={showResults}
                  >
                    {item[`option${optionNum}`]}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-input-container">
                <textarea
                  className={`text-input ${
                    showResults && item.answer && 
                    item.answer.toLowerCase() === (textAnswers[index] || '').toLowerCase() ? 'correct-input' : ''
                  } ${
                    showResults && item.answer && 
                    item.answer.toLowerCase() !== (textAnswers[index] || '').toLowerCase() ? 'wrong-input' : ''
                  }`}
                  value={textAnswers[index] || ''}
                  onChange={(e) => handleTextInputChange(index, e.target.value)}
                  maxLength={25}
                  disabled={showResults}
                  placeholder="Type in your answer"
                />
                {showResults && item.answer && item.answer.toLowerCase() !== (textAnswers[index] || '').toLowerCase() && (
                  <p className="correct-answer">Correct answer: {item.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button className="submit-button" onClick={handleSubmit} disabled={showResults}>
        Submit
      </button>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <p className="result-text">You scored {score * 2}/{questions.length / questions.length * 100}%</p>
            <p className="result-text1">Grade: {getGrade(score)}</p>
            <p className="result-text2">{getRemark(score)}</p>
            <button className="try-again-button" onClick={handleTryAgain}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamMode;