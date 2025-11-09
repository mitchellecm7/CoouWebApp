// import React, { useState } from 'react';

// import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';



// const {width, height} = Dimensions.get('window');

// const Cis2001 = ({ navigation }) => {
  
//   return (
//     <SafeAreaView>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       <ScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.push('Ent211')} style={styles.button}>
//           <Text style={styles.text}>ENT 211</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Math201')} style={styles.button}>
//           <Text style={styles.text}>MATH 211</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos201')} style={styles.button}>
//           <Text style={styles.text}>COS 201</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc211')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 221</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc203')} style={styles.button}>
//           <Text style={styles.text}>CSC 203</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc267')} style={styles.button}>
//           <Text style={styles.text}>COOU CSC 267</Text>
//         </TouchableOpacity>        

//         <TouchableOpacity onPress={() => navigation.push('Csc231')} style={styles.button}>
//           <Text style={styles.text}>CSC 231</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Ift211')} style={styles.button}>
//           <Text style={styles.text}>IFT 211</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos261')} style={styles.button}>
//           <Text style={styles.text}>COOU COS 261</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Sen201')} style={styles.button}>
//           <Text style={styles.text}>SEN 201</Text>
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

// export default Cis2001;

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
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { collectionId, databaseId, databases1, Query } from '../../../../../src/screens/UploadScreens/config';
// import { Client, Databases, Storage, Realtime, ID, Account, Query } from "react-native-appwrite";



const Cis2001 = () => {
  const navigation = useNavigation();

  const [pdfMetadata, setPdfMetadata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPdfMetadata();
  }, []);

  const fetchPdfMetadata = async () => {
    setLoading(true);
    try {
      const response = await databases1.listDocuments(
        databaseId, collectionId,
        [
          Query.equal('faculty', 'Physical Sciences'),
          Query.equal('department', 'Computer Science'),
          Query.equal('level', '200'),
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

export default Cis2001;

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
