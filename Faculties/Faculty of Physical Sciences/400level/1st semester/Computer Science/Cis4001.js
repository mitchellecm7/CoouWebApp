// import React, { useState } from 'react';

// import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const Cis4001 = ({ navigation }) => {
  
//   return (
//     <SafeAreaView>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       <ScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.push('Csc400')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 400</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc401')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 401</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc405')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 405</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Ccs409')} style={styles.button}>
//           <Text style={styles.text}>CCS 409</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc411')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 411</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc415')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 415</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc441')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 441</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc473')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 473</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc451')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 451</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc421')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 421</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc431')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 431</Text>
//         </TouchableOpacity>


//         <TouchableOpacity onPress={() => navigation.push('Csc471')} style={styles.button}>
//           <Text style={styles.text}>CSC 471</Text>
//         </TouchableOpacity>

//         {/* <Modal isVisible={isLevelMenuVisible} onBackdropPress={toggleLevelMenu}>
//           <View style={styles.modalContent}>
//             {levels.map((level) => (
//               <TouchableOpacity key={level} onPress={() => toggleSemesterMenu(level)} style={styles.modalButton}>
//                 <Text style={styles.modalText}>{level}</Text>                
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Modal> */}
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Cis4001;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//    button: {
//     width: 200,
//     height: 60,
//     margin: 10,
//     borderRadius: 10,
//     backgroundColor: 'green',
//     shadowColor: '#000000',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   iconButton: {
//     position: 'absolute',
//     right: 10,
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#fff'
//   },
//   modalContent: {
//     width: '60%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginVertical: 5,
//   },
//   modalText: {
//     fontSize: 16,
//     borderBottomWidth: 1.5,
//     borderBottomColor: 'black',
//     color: '#1d1615'

//   },
// });


import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collectionId, databaseId, databases3, Query } from '../../../../../src/screens/UploadScreens/config';
// import { Client, Databases, Storage, Realtime, ID, Account, Query } from "react-native-appwrite";
// Appwrite configuration



const Cis4001 = () => {
    const navigation = useNavigation();
  
//   const client = new Client();
// client
//   .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
//   .setProject('676cc024000ad5ed402a')
//   .setPlatform('com.officialcoouapp');

   // Replace with your Appwrite project ID

// const account = new Account(client);
//   const databases = new Databases(client);
  // const databaseId = 'Coou_App';
  // const collectionId = 'Pdf_metadata';
  const [pdfMetadata, setPdfMetadata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPdfMetadata();
  }, []);

  const fetchPdfMetadata = async () => {
    setLoading(true);
    try {
      const response = await databases3.listDocuments(
        databaseId, collectionId,
        [
          Query.equal('faculty', 'Physical Sciences'),
          Query.equal('department', 'Computer Science'),
          Query.equal('level', '400'),
          Query.equal('semester', '1st'),
        ]
      );
      setPdfMetadata(response.documents);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
    setLoading(false);
  };
  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
      <ScrollView>
        <View style={styles.container}>
          {pdfMetadata.length > 0 ? (
            pdfMetadata.map((pdf, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.push(pdf.course)}
                style={styles.button}
              >
                <Text style={styles.text}>{pdf.course}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.text1}>No Courses Uploaded yet</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cis4001;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 60,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  text1: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: '#1d1615',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
