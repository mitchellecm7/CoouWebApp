import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

function Screen5002() {
  const styles = {
    container: {
      flex: 1,
      padding: '20px',
    },
    customTabList: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: '0 0 20px 0',
      borderBottom: '2px solid #ddd',
      backgroundColor: 'green',
      borderRadius: '8px 8px 0 0',
    },
    customTab: {
      padding: '12px 24px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'green',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      borderBottom: '3px solid transparent',
      transition: 'all 0.3s ease',
    },
    customTabSelected: {
      color: '#fff',
      borderBottom: '3px solid yellow',
      backgroundColor: 'green',
      fontWeight: 'bold',
    },
    tabPanel: {
      padding: '20px 0',
    },
    container1: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#1d1615",
    },
    categoryContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 0,
      paddingBottom: 0,
    },
    category: {
      width: 180,
      height: 60,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "green",
      boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    categoryTitle: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
    },
    course: {
      width: 180,
      height: 60,
      margin: 10,
      borderRadius: 6,
      backgroundColor: "green",
      boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    courseText: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
    },
    courseRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    input: {
      borderWidth: 2,
      borderColor: "#1d1615",
      borderStyle: "solid",
      padding: 10,
      width: "30%",
      color: "#1d1615",
    },
    deleteButtonText: {
      fontSize: 20,
      color: "#1d1615",
      fontWeight: "bold",
      cursor: "pointer",
    },
    result: {
      marginTop: 20,
      alignItems: "center",
      textAlign: "center",
    },
    gpa: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#1d1615",
    },
    course0: {
      width: 200,
      height: 200,
      margin: 10,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
  };

  return (
    <div style={styles.container}>
      <Tabs>
        <TabList style={styles.customTabList}>
          <Tab 
            style={styles.customTab}
            selectedStyle={styles.customTabSelected}
          >
            Courses
          </Tab>
          <Tab 
            style={styles.customTab}
            selectedStyle={styles.customTabSelected}
          >
            GP Calculator
          </Tab>
          <Tab 
            style={styles.customTab}
            selectedStyle={styles.customTabSelected}
          >
            Practical PQ
          </Tab>
        </TabList>

        <TabPanel style={styles.tabPanel}>
          <FirstSemester100Level styles={styles} />
        </TabPanel>

        <TabPanel style={styles.tabPanel}>
          <GpCalculatorRoute styles={styles} />
        </TabPanel>

        <TabPanel style={styles.tabPanel}>
          <PdfPastQuestions styles={styles} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
export default Screen5002;





/* ------------------------------------------------------------------
   GPA CALCULATOR (WEB VERSION)
-------------------------------------------------------------------*/
function GpCalculatorRoute({ styles }) {
  const [courses, setCourses] = useState([{ courseCode: "", units: "", grade: "" }]);
  const [gpa, setGpa] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("courses9");
    if (saved) setCourses(JSON.parse(saved));
  }, []);

  const addCourse = () => {
    setCourses([...courses, { courseCode: "", units: "", grade: "" }]);
    save();
  };

  const save = () =>
    localStorage.setItem("courses9", JSON.stringify(courses));

  const handleInputChange = (value, index, field) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const deleteCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  const getGradePoint = (g) => {
    switch (g.toUpperCase()) {
      case "A": return 5;
      case "B": return 4;
      case "C": return 3;
      case "D": return 2;
      case "E": return 1;
      case "F": return 0;
      default: return null;
    }
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalUnits = 0;

    for (let c of courses) {
      const gp = getGradePoint(c.grade);
      const units = parseFloat(c.units);

      if (gp === null) return alert("Enter valid grade (A–F)");
      if (isNaN(units) || units <= 0) return alert("Invalid units");

      totalPoints += gp * units;
      totalUnits += units;
    }

    if (totalUnits > 0) setGpa((totalPoints / totalUnits).toFixed(2));
    save();
  };

  const reset = () => {
    setCourses([{ courseCode: "", units: "", grade: "" }]);
    setGpa(null);
  };

  return (
    <div style={styles.container1}>
      <h2 style={styles.title}>GPA Calculator</h2>

      {courses.map((item, index) => (
        <div key={index} style={styles.courseRow}>
          <input
            style={styles.input}
            placeholder="Course Code"
            value={item.courseCode}
            onChange={(e) => handleInputChange(e.target.value, index, "courseCode")}
          />
          <input
            style={styles.input}
            placeholder="Units"
            type="number"
            value={item.units}
            onChange={(e) => handleInputChange(e.target.value, index, "units")}
          />
          <input
            style={styles.input}
            placeholder="Grade"
            maxLength={1}
            value={item.grade}
            onChange={(e) => handleInputChange(e.target.value, index, "grade")}
          />
          <span
            style={styles.deleteButtonText}
            onClick={() => deleteCourse(index)}
          >
            ×
          </span>
        </div>
      ))}

      <div style={styles.categoryContainer}>
        <div style={styles.course} onClick={addCourse}>
          <span style={styles.courseText}>Add Course</span>
        </div>

        <div style={styles.course} onClick={calculateGPA}>
          <span style={styles.courseText}>Calculate GPA</span>
        </div>
      </div>

      {gpa && (
        <div style={styles.result}>
          <h3 style={styles.gpa}>Your GPA is: {gpa} / 5.00</h3>

          <div style={styles.course} onClick={reset}>
            <span style={styles.courseText}>Clear</span>
          </div>
        </div>
      )}

      <div style={styles.course0}></div>
    </div>
  );
}



/* ------------------------------------------------------------------
   PAST QUESTIONS
-------------------------------------------------------------------*/

function PdfPastQuestions({ styles }) {
  const navigate = useNavigate();
  return (
    <div style={styles.categoryContainer}>
      <div style={styles.category} onClick={() => navigate("/chem171")}>
        <span style={styles.categoryTitle}>CHEM 171</span>
      </div>

      <div style={styles.category} onClick={() => navigate("/phy107")}>
        <span style={styles.categoryTitle}>Phy 107</span>
      </div>
    </div>
  );
}



/* ------------------------------------------------------------------
   COURSES TAB
-------------------------------------------------------------------*/

function FirstSemester100Level({ styles }) {
  const navigate = useNavigate();
  const level = "100";
  const semester = "1";

  const items = [
    ["Cis 101", "cis101"],
    ["Phy 101", "phy101"],
    ["Bio 151", "bio151"],
    ["Math 101 / 111", "math101111"],
    ["Chem 101", "chem101"],
    ["Statistics", "statistics"]
  ];

  return (
    <div style={styles.categoryContainer}>
      {items.map(([title, key]) => (
        <div
          key={key}
          style={styles.category}
          onClick={() => navigate(`/exam-mode/${level}/${semester}/${key}`)}
        >
          <span style={styles.categoryTitle}>{title}</span>
        </div>
      ))}
    </div>
  );
}
