// import React, { useState } from 'react';

// import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';



// const {width, height} = Dimensions.get('window');

// const Cis3002 = ({ navigation }) => {
  
//   return (
//     <SafeAreaView>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       <ScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.push('Cos102')} style={styles.button}>
//           <Text style={styles.text}>COS 102</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos192')} style={styles.button}>
//           <Text style={styles.text}>COS 192</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc104')} style={styles.button}>
//           <Text style={styles.text}>CSC 104</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc128')} style={styles.button}>
//           <Text style={styles.text}>CSC 128</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Gst112')} style={styles.button}>
//           <Text style={styles.text}>GST 112</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Math102')} style={styles.button}>
//           <Text style={styles.text}>MATH 102</Text>
//         </TouchableOpacity>        

//         <TouchableOpacity onPress={() => navigation.push('Physics102')} style={styles.button}>
//           <Text style={styles.text}>PHYSICS 102</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Physics108')} style={styles.button}>
//           <Text style={styles.text}>PHYSICS 108</Text>
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

// export default Cis3002;

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
import { collectionId, databaseId, databases2, Query } from '../../../../../src/screens/UploadScreens/config';
// import { Client, Databases, Storage, Realtime, ID, Account, Query } from "react-native-appwrite";
// Appwrite configuration



const Cis3002 = () => {
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
      const response = await databases2.listDocuments(
        databaseId, collectionId,
        [
          Query.equal('faculty', 'Physical Sciences'),
          Query.equal('department', 'Computer Science'),
          Query.equal('level', '300'),
          Query.equal('semester', '2nd'),
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
                onPress={() => navigation.push('PdfViewer', { pdfUrl: pdf.url })}
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

export default Cis3002;

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
