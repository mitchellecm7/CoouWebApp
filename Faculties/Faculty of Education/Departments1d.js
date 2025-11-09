import React, { useState } from 'react';

import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Modal from 'react-native-modal';
import departments from '../../src/assets/departmentsData';


const {width, height} = Dimensions.get('window');

const Departments1d = ({ navigation }) => {
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level', '500 level'];
  const semesters = ['1st semester', '2nd semester'];

  const filteredDepartments = departments.filter(department => department.id > 4 && department.id < 5);

  const toggleLevelMenu = (departmentName) => {
    setSelectedDepartment(departmentName);
    setLevelMenuVisible(!isLevelMenuVisible);
  };

  const toggleSemesterMenu = (level) => {
    setSelectedLevel(level);
    setSemesterMenuVisible(!isSemesterMenuVisible);
  };

  // const handleSemesterSelection = (semester) => {
  //   setSemesterMenuVisible(false);

  //   // Conditional navigation based on department, level, and semester
  //   let targetScreen = '';
  //   if (selectedDepartment === 'Department of Economics Education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'EconomicsEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'EconomicsEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'EconomicsEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'EconomicsEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'EconomicsEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'EconomicsEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'EconomicsEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'EconomicsEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'EconomicsEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'EconomicsEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   } 

  //   else if (selectedDepartment === 'Department of English Education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'EnglishEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'EnglishEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'EnglishEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'EnglishEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'EnglishEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'EnglishEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'EnglishEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'EnglishEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'EnglishEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'EnglishEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Political Science Education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'PoliticalScienceEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'PoliticalScienceEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'PoliticalScienceEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'PoliticalScienceEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'PoliticalScienceEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'PoliticalScienceEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'PoliticalScienceEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'PoliticalScienceEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'PoliticalScienceEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'PoliticalScienceEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of BUSINESS EDUCATION') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'BusinessEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'BusinessEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'BusinessEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'BusinessEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'BusinessEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'BusinessEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'BusinessEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'BusinessEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'BusinessEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'BusinessEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Early Childhood Education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'EarlyChildhoodEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'EarlyChildhoodEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'EarlyChildhoodEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'EarlyChildhoodEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'EarlyChildhoodEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'EarlyChildhoodEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'EarlyChildhoodEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'EarlyChildhoodEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'EarlyChildhoodEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'EarlyChildhoodEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Education Management') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'EducationManagement1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'EducationManagement1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'EducationManagement2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'EducationManagement2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'EducationManagement3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'EducationManagement3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'EducationManagement4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'EducationManagement4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'EducationManagement5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'EducationManagement5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Guidance and Counselling') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'Guidance&Counselling1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'Guidance&Counselling1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'Guidance&Counselling2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'Guidance&Counselling2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'Guidance&Counselling3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'Guidance&Counselling3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'Guidance&Counselling4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'Guidance&Counselling4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'Guidance&Counselling5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'Guidance&Counselling5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Primary / Elementary') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'Primary/Elementary1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'Primary/Elementary1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'Primary/Elementary2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'Primary/Elementary2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'Primary/Elementary3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'Primary/Elementary3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'Primary/Elementary4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'Primary/Elementary4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'Primary/Elementary5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'Primary/Elementary5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of HUMAN KINETICS') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'HumanKinetics1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'HumanKinetics1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'HumanKinetics2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'HumanKinetics2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'HumanKinetics3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'HumanKinetics3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'HumanKinetics4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'HumanKinetics4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'HumanKinetics5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'HumanKinetics5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of LIBRARY AND INFORMATION SCIENCE') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'LibraryAndInformationScience1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'LibraryAndInformationScience1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'LibraryAndInformationScience2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'LibraryAndInformationScience2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'LibraryAndInformationScience3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'LibraryAndInformationScience3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'LibraryAndInformationScience4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'LibraryAndInformationScience4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'LibraryAndInformationScience5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'LibraryAndInformationScience5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Biology education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'BiologyEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'BiologyEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'BiologyEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'BiologyEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'BiologyEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'BiologyEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'BiologyEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'BiologyEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'BiologyEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'BiologyEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Chemistry Education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'ChemistryEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'ChemistryEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'ChemistryEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'ChemistryEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'ChemistryEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'ChemistryEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'ChemistryEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'ChemistryEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'ChemistryEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'ChemistryEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Computer science education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'ComputerScienceEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'ComputerScienceEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'ComputerScienceEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'ComputerScienceEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'ComputerScienceEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'ComputerScienceEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'ComputerScienceEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'ComputerScienceEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'ComputerScienceEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'ComputerScienceEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Integrated science education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'IntegratedScienceEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'IntegratedScienceEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'IntegratedScienceEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'IntegratedScienceEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'IntegratedScienceEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'IntegratedScienceEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'IntegratedScienceEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'IntegratedScienceEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'IntegratedScienceEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'IntegratedScienceEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Mathematics education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'MathematicsEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'MathematicsEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'MathematicsEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'MathematicsEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'MathematicsEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'MathematicsEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'MathematicsEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'MathematicsEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'MathematicsEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'MathematicsEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of Physics education') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'PhysicsEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'PhysicsEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'PhysicsEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'PhysicsEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'PhysicsEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'PhysicsEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'PhysicsEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'PhysicsEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'PhysicsEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'PhysicsEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
  //   else if (selectedDepartment === 'Department of TECHNOLOGY EDUCATION') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'TechnologyEducation1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'TechnologyEducation1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'TechnologyEducation2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'TechnologyEducation2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'TechnologyEducation3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'TechnologyEducation3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'TechnologyEducation4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'TechnologyEducation4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'TechnologyEducation5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'TechnologyEducation5002';
  //     }
  //     //I will Add more conditions for other levels and semesters
  //   }
    
  //   if (targetScreen) {
  //     navigation.push(targetScreen, {
  //       department: selectedDepartment,
  //       level: selectedLevel,
  //       semester: semester,
  //     });
  //   }
  // };
  const handleSemesterSelection = (semester) => {
    setSemesterMenuVisible(false);
  
    // Mapping of department names to their screen prefixes
    const departmentPrefixes = {
      'Department of ENGLISH': 'English',
      'Department of IGBO LANGUAGE & LINGUISTICS': 'Igbo&Linguistics',
      // Add other departments here as needed:
      // 'Department Name': 'ScreenPrefix',
    };
  
    // Get the department prefix
    const departmentPrefix = departmentPrefixes[selectedDepartment];
    
    if (!departmentPrefix) {
      // Department not found in mapping
      return;
    }
  
    // Extract level number (100, 200, etc.)
    const levelNumber = selectedLevel.split(' ')[0];
    
    // Determine semester number (1 or 2)
    const semesterNumber = semester.includes('1st') ? '1' : '2';
    
    // Construct target screen name
    const targetScreen = `${departmentPrefix}${levelNumber}${semesterNumber}`;
  
    if (targetScreen) {
      navigation.push(targetScreen, {
        department: selectedDepartment,
        level: selectedLevel,
        semester: semester,
      });
    }
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
      <ScrollView>
        {filteredDepartments.map((department) => (
          <View style={styles.container} key={department.id}>
            <View style={styles.departmentName}>
              <Text style={styles.text}>{department.name}</Text>
              <TouchableOpacity onPress={() => toggleLevelMenu(department.name)} style={styles.iconButton}>
                <Ionicons name='chevron-down' size={25} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        ))}

<Modal 
  isVisible={isLevelMenuVisible} 
  onBackdropPress={toggleLevelMenu}
  style={styles.modal}
  // style={{ justifyContent: 'center', alignItems: 'center' }} // Center the modal
>
  <View style={styles.modalContent}>
    <TouchableOpacity onPress={toggleLevelMenu} style={styles.closeButton}>
      <Ionicons name='close' size={25} color='black' />
    </TouchableOpacity>
    {levels.map((level) => (
      <TouchableOpacity key={level} onPress={() => toggleSemesterMenu(level)} style={styles.modalButton}>
        <Text style={styles.modalText}>{level}</Text>
      </TouchableOpacity>
    ))}
  </View>
</Modal>

<Modal 
  isVisible={isSemesterMenuVisible} 
  onBackdropPress={() => setSemesterMenuVisible(false)}
  style={styles.modal} // Center the modal
>
  <View style={styles.modalContent}>
    <TouchableOpacity onPress={() => setSemesterMenuVisible(false)} style={styles.closeButton}>
      <Ionicons name='close' size={25} color='black' />
    </TouchableOpacity>
    {semesters.map((semester) => (
      <TouchableOpacity key={semester} onPress={() => handleSemesterSelection(semester)} style={styles.modalButton}>
        <Text style={styles.modalText}>{semester}</Text>
      </TouchableOpacity>
    ))}
  </View>
</Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Departments1d;

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  departmentName: {
    marginTop: 20,
    height: 90,
    marginVertical: 10,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transition: '.2s',
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '60%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  modalText: {
    fontSize: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    color: '#1d1615'
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
});