import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const GPACalculator = ({ storageKey = 'courses', initialCourses = [{ courseCode: '', units: '', grade: '' }] }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [gpa, setGpa] = useState(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = () => {
    const newCourses = [...courses, { courseCode: '', units: '', grade: '' }];
    setCourses(newCourses);
    saveCourses(newCourses);
  };

  const resetForm = () => {
    setCourses(initialCourses);
    setGpa(null);
    storage.removeItem(storageKey);
  };

  const handleInputChange = (value, index, field) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalUnits = 0;
    let invalidGrade = false;
    let invalidUnits = false;

    courses.forEach((course) => {
      const gradePoint = getGradePoint(course.grade);
      const units = parseFloat(course.units);

      if (!gradePoint && !invalidGrade) {
        invalidGrade = true;
      }
      if ((isNaN(units) || units <= 0) && !invalidUnits) {
        invalidUnits = true;
      }

      if (!invalidGrade && !invalidUnits) {
        totalPoints += gradePoint * units;
        totalUnits += units;
      }
    });

    if (invalidGrade) {
      alert("Invalid Input: Invalid grade entered for one or more courses. Please enter valid grades (A, B, C, D, E, F).");
      return;
    }

    if (invalidUnits) {
      alert("Invalid Input: Please enter valid numeric credit units greater than 0.");
      return;
    }

    if (totalUnits > 0) {
      const gpaResult = (totalPoints / totalUnits).toFixed(2);
      setGpa(gpaResult);
    } else {
      setGpa(null);
    }

    saveCourses(courses);
  };

  const getGradePoint = (grade) => {
    switch (grade.toUpperCase()) {
      case 'A':
        return 5;
      case 'B':
        return 4;
      case 'C':
        return 3;
      case 'D':
        return 2;
      case 'E':
        return 1;
      case 'F':
        return 0;
      default:
        return null;
    }
  };

  const saveCourses = async (coursesToSave) => {
    try {
      await storage.setItem(storageKey, JSON.stringify(coursesToSave));
    } catch (error) {
      console.error("Failed to save data", error);
    }
  };

  const loadCourses = async () => {
    try {
      const savedCourses = await storage.getItem(storageKey);
      if (savedCourses !== null) {
        setCourses(JSON.parse(savedCourses));
      }
    } catch (error) {
      console.error("Failed to load data", error);
    }
  };

  const deleteCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
    saveCourses(newCourses);
  };

  const canCalculate = () => {
    return courses.every(course => 
      course.courseCode.trim() !== '' && 
      course.units.trim() !== '' && 
      course.grade.trim() !== ''
    ) && courses.length > 0;
  };

  return (
    <div className="gpa-calculator">
      <h2 className="calculator-title">GPA Calculator</h2>

      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-row">
            <input
              type="text"
              placeholder="Course Code"
              className="course-input"
              maxLength={20}
              value={course.courseCode}
              onChange={(e) => handleInputChange(e.target.value, index, 'courseCode')}
            />
            <input
              type="text"
              placeholder="Units"
              className="course-input"
              inputMode="numeric"
              maxLength={1}
              value={course.units}
              onChange={(e) => handleInputChange(e.target.value, index, 'units')}
            />
            <input
              type="text"
              placeholder="Grade"
              className="course-input"
              maxLength={1}
              value={course.grade}
              onChange={(e) => handleInputChange(e.target.value, index, 'grade')}
            />
            <button 
              className="delete-button" 
              onClick={() => deleteCourse(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="calculator-actions">
        <button onClick={addCourse} className="action-button">
          Add Course
        </button>
        <button 
          onClick={calculateGPA} 
          className={`action-button ${!canCalculate() ? 'disabled' : ''}`}
          disabled={!canCalculate()}
        >
          Calculate GPA
        </button>
      </div>

      {gpa && (
        <div className="result-section">
          <h3 className="gpa-result">Your GPA is: {gpa} / 5.00</h3>
          <button onClick={resetForm} className="action-button">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
