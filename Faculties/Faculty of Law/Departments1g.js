import React, { useState } from 'react';

import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Modal from 'react-native-modal';
import departments from '../../src/assets/departmentsData';


const {width, height} = Dimensions.get('window');

const Departments1g = ({ navigation }) => {
  const [isLevelMenuVisible, setLevelMenuVisible] = useState(false);
  const [isSemesterMenuVisible, setSemesterMenuVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const levels = ['100 level', '200 level', '300 level', '400 level', '500 level'];
  const semesters = ['1st semester', '2nd semester'];

  const filteredDepartments = departments.filter(department => department.id > 7 && department.id < 8);

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
  //   if (selectedDepartment === 'Department of LAW') {
  //     if (selectedLevel === '100 level' && semester === '1st semester') {
  //       targetScreen = 'Law1001';
  //     } else if (selectedLevel === '100 level' && semester === '2nd semester') {
  //       targetScreen = 'Law1002';
  //     } else if (selectedLevel === '200 level' && semester === '1st semester') {
  //       targetScreen = 'Law2001';
  //     } 
  //     else if (selectedLevel === '200 level' && semester === '2nd semester') {
  //       targetScreen = 'Law2002';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '1st semester') {
  //       targetScreen = 'Law3001';
  //     }
  //     else if (selectedLevel === '300 level' && semester === '2nd semester') {
  //       targetScreen = 'Law3002';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '1st semester') {
  //       targetScreen = 'Law4001';
  //     }
  //     else if (selectedLevel === '400 level' && semester === '2nd semester') {
  //       targetScreen = 'Law4002';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '1st semester') {
  //       targetScreen = 'Law5001';
  //     }
  //     else if (selectedLevel === '500 level' && semester === '2nd semester') {
  //       targetScreen = 'Law5002';
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
export default Departments1g;

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