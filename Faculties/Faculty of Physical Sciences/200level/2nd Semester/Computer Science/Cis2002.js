// import React, { useState } from 'react';

// import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';



// const {width, height} = Dimensions.get('window');

// const Cis2002 = ({ navigation }) => {
  
//   return (
//     <SafeAreaView>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       <ScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.push('Gst212')} style={styles.button}>
//           <Text style={styles.text}>GST 212</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Math202')} style={styles.button}>
//           <Text style={styles.text}>MATH 202</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc266')} style={styles.button}>
//           <Text style={styles.text}>COOU-CSC 266</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos202')} style={styles.button}>
//           <Text style={styles.text}>COS 202</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc208')} style={styles.button}>
//           <Text style={styles.text}>CSC 208</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos262')} style={styles.button}>
//           <Text style={styles.text}>COOU COS 262</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Cos264')} style={styles.button}>
//           <Text style={styles.text}>COOU COS 264</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Ift212')} style={styles.button}>
//           <Text style={styles.text}>IFT 212</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Gey206')} style={styles.button}>
//           <Text style={styles.text}>COOU GEY 206</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.push('Csc299')} style={styles.button}>
//           <Text style={styles.text}>CSC 299</Text>
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

// export default Cis2002;

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



const Cis2002 = () => {
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
      const response = await databases1.listDocuments(
        databaseId, collectionId,
        [
          Query.equal('faculty', 'Physical Sciences'),
          Query.equal('department', 'Computer Science'),
          Query.equal('level', '200'),
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

export default Cis2002;

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


// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import { Client, Databases, Query } from 'appwrite';

// const COS101 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS101';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Initialize Appwrite client and database references
//   const client = new Client();
//   client.setEndpoint('https://[YOUR_ENDPOINT]') // Replace with your Appwrite endpoint
//         .setProject('[YOUR_PROJECT_ID]'); // Replace with your project ID

//   const databases = new Databases(client);
//   const databaseId = '[YOUR_DATABASE_ID]'; // Replace with your database ID
//   const collectionId = '[YOUR_COLLECTION_ID]'; // Replace with your collection ID

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       setLoading(true);
//       try {
//         const response = await databases.listDocuments(
//           databaseId, 
//           collectionId,
//           [
//             Query.equal('faculty', faculty),
//             Query.equal('department', department),
//             Query.equal('level', level),
//             Query.equal('semester', semester),
//             Query.equal('course', course),
//           ]
//         );

//         if (response.documents.length > 0) {
//           setPdfUrl(response.documents[0].pdf_url);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (error) {
//         Alert.alert('Error', error.message || 'Failed to fetch PDF URL.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       {pdfUrl ? (
//         <ReactNativePDF
//           source={{ uri: pdfUrl, cache: true }}
//           style={{ flex: 1, width: '100%', height: '100%' }}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 16, fontWeight: '300', color: '#1d1615' }
// });

// export default COS101;
