
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import ReactNativePDF from 'react-native-pdf';
import RNFetchBlob from 'react-native-blob-util';
import {  databases, databaseId, collectionId, Query, bucketId, projectId } from '../../../../../src/screens/UploadScreens/config';
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";


const COS101 = () => {
  const faculty = 'Physical Sciences';
  const department = 'Computer Science';
  const level = '100';
  const semester = '1st';
  const course = 'COS101';

  const [pdfUrl, setPdfUrl] = useState(null);
  const [localFilePath, setLocalFilePath] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfUri = async () => {
      try {
        // Fetch the PDF URL from Appwrite
        const response = await databases.listDocuments(databaseId, collectionId, [
          Query.equal('faculty', faculty),
          Query.equal('department', department),
          Query.equal('level', level),
          Query.equal('semester', semester),
          Query.equal('course', course),
        ]);

        console.log('Appwrite Response:', response);

        if (response.documents.length > 0) {
          const fileId = response.documents[0].fileId; // Get the file ID

          // Construct the download URL
          const remotePdfUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}`;
          console.log('Download URL:', remotePdfUrl);

          setPdfUrl(remotePdfUrl);

          // Download the PDF file
          const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
          console.log('Local path:', localPath);

          try {
            const download = await RNFetchBlob.config({
              fileCache: true,
              path: localPath,
            }).fetch('GET', remotePdfUrl);

            console.log('Download response:', download);
            console.log('Download path:', download.path());

            // Verify the content type
            const contentType = download.respInfo.headers['content-type'];
            console.log('Content-Type:', contentType);

            if (contentType !== 'application/pdf') {
              throw new Error('Downloaded file is not a PDF.');
            }

            const filePath = `file://${download.path()}`;
            console.log('Local file path:', filePath);
            setLocalFilePath(filePath);
          } catch (err) {
            console.error('Download error:', err);
            Alert.alert('Error', 'Failed to download the PDF.');
          }
        } else {
          Alert.alert('No PDF Available', 'No PDF is available for this course.');
        }
      } catch (err) {
        console.error('Error:', err);
        Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
      } finally {
        setLoading(false);
      }
    };

    fetchPdfUri();
  }, [faculty, department, level, semester, course]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007BFF" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
      {localFilePath && (
              <View style={styles.verifiedBadge}>
                <Text style={{fontSize: 15, fontWeight: 900, position: 'relative',
                       flexDirection: 'column', alignSelf: 'flex-end', color: '#1d1615'}}> CM7 
                       <MaterialIcons name='verified' size={12} color='#0000ff' /></Text>
              </View>
            )}
      {localFilePath ? (
        <ReactNativePDF
          source={{ uri: localFilePath, cache: true }}
          style={styles.pdf}
          onError={(error) => {
            console.error('PDF Error:', error);
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`PDF loaded successfully. Pages: ${numberOfPages}, Path: ${filePath}`);
          }}
        />
      ) : (
        <Text style={styles.text}>No PDF available for this course.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    color: '#1d1615',
  },
});

export default COS101;

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   PermissionsAndroid,
//   Platform,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';

// import Pdf from 'react-native-pdf';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS101 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS101';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pdfLoading, setPdfLoading] = useState(false);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         if (response.documents.length > 0) {
//           setPdfUrl(response.documents[0].pdf_url);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         Alert.alert('Error', err.message || 'Failed to fetch PDF URL.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   // Request permissions for Android
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       const requestStoragePermission = async () => {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//             {
//               title: 'Storage Permission',
//               message: 'This app needs access to your storage to read PDF files.',
//               buttonNeutral: 'Ask Me Later',
//               buttonNegative: 'Cancel',
//               buttonPositive: 'OK',
//             },
//           );
//           if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//             Alert.alert('Permission Denied', 'Storage permission is required to read PDF files.');
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       };

//       requestStoragePermission();
//     }
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {pdfUrl ? (
//         <>
//           {pdfLoading && (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#007BFF" />
//               <Text style={styles.loadingText}>Loading PDF...</Text>
//             </View>
//           )}
//           <Pdf
//             source={{ uri: pdfUrl, cache: true }}
//             style={styles.pdf}
//             onLoadComplete={() => setPdfLoading(false)}
//             onError={(error) => {
//               console.error(error);
//               Alert.alert('Error', 'Failed to load PDF.');
//               setPdfLoading(false);
//             }}
//             onLoadProgress={() => setPdfLoading(true)}
//           />
//         </>
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#007BFF',
//   },
// });

// export default COS101;

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   PermissionsAndroid,
//   Platform,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Pdf from 'react-native-pdf';
// import NetInfo from '@react-native-community/netinfo';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS101 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS101';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pdfLoading, setPdfLoading] = useState(false);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         if (response.documents.length > 0) {
//           setPdfUrl(response.documents[0].pdf_url);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         Alert.alert('Error', err.message || 'Failed to fetch PDF URL.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   // Request permissions for Android
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       const requestStoragePermission = async () => {
//         try {
//           const granted = await PermissionsAndroid.requestMultiple([
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           ]);
//           if (
//             granted['android.permission.READ_EXTERNAL_STORAGE'] !== PermissionsAndroid.RESULTS.GRANTED ||
//             granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== PermissionsAndroid.RESULTS.GRANTED
//           ) {
//             Alert.alert('Permission Denied', 'Storage permissions are required to read PDF files.');
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       };

//       requestStoragePermission();
//     }
//   }, []);

//   // Check network connectivity
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       if (!state.isConnected) {
//         Alert.alert('No Internet', 'Please check your internet connection.');
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (!pdfUrl || !pdfUrl.startsWith('http')) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Invalid PDF URL.</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {pdfLoading && (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#007BFF" />
//           <Text style={styles.loadingText}>Loading PDF...</Text>
//         </View>
//       )}
//       <Pdf
//         source={{ uri: pdfUrl, cache: true, trustAllCerts: Platform.OS === 'android' }}
//         style={styles.pdf}
//         onLoadComplete={() => setPdfLoading(false)}
//         onError={(error) => {
//           console.error(error);
//           Alert.alert('Error', 'Failed to load PDF.');
//           setPdfLoading(false);
//         }}
//         onLoadProgress={() => setPdfLoading(true)}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#007BFF',
//   },
// });

// export default COS101;
