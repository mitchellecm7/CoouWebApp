// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView } from 'react-native';
// import ReactNativePDF from 'react-native-pdf'; 
// import supabase from '../../../../src/screens/UploadScreens/config';

// const CSC426 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '400';
//   const semester = '2nd';
//   const course = 'CSC426';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch the PDF URI based on course metadata
//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('pdf_info')
//           .select('pdf_url')
//           .eq('faculty', faculty)
//           .eq('department', department)
//           .eq('level', level)
//           .eq('semester', semester)
//           .eq('course', course)
//           .single(); // Using 'single' as we expect one match per course

//         if (error) {
//           throw error;
//         }

//         if (data) {
//           setPdfUrl(data.pdf_url);
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

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       {pdfUrl ? (
//         <ReactNativePDF
//           source={{uri: pdfUrl, cache: true}}
//           style={{flex: 1, width: '100%', height: '100%'}}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: {fontSize: 16, fontWeight: '300', color: '#1d1615'  }
// });

// export default CSC426;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import ReactNativePDF from 'react-native-pdf';
import RNFetchBlob from 'react-native-blob-util';

import { databases3, databaseId, collectionId, Query, bucketId, projectId3 } from '../../../../../src/screens/UploadScreens/config';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// Appwrite Configuration


const CSC426 = () => {
  const faculty = 'Physical Sciences';
  const department = 'Computer Science';
  const level = '400';
  const semester = '2nd';
  const course = 'CSC426';

  const [pdfUrl, setPdfUrl] = useState(null);
  const [localFilePath, setLocalFilePath] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfUri = async () => {
      try {
        // Fetch the PDF URL from Appwrite
        const response = await databases3.listDocuments(databaseId, collectionId, [
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
          const remotePdfUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId3}`;
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

export default CSC426;
