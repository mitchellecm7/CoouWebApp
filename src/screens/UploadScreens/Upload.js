// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../UploadScreens/styles/Upload.css';
// import { 
//   databases, account, client, storage, 
//   databases1, client1, storage1,
//   databases2, client2, storage2,
//   databases3, client3, storage3,
//   databaseId, collectionId, Query, ID, bucketId 
// } from './config';

// const Upload = () => {
//   const navigate = useNavigate();

//   const [faculty, setFaculty] = useState('');
//   const [department, setDepartment] = useState('');
//   const [level, setLevel] = useState('');
//   const [semester, setSemester] = useState('');
//   const [course, setCourse] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [pdf, setPdf] = useState(null);
//   const [pdfMetadata, setPdfMetadata] = useState(null);
//   const [actionButtonText, setActionButtonText] = useState('Upload PDF');
//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [actionType, setActionType] = useState('');
//   const [selectedDetails, setSelectedDetails] = useState({});

//   const faculties = ['Agriculture','Arts','Basic Medical Sciences','Education','Engineering','Environmental Sciences','Law','Management Sciences','Medicine','Pharmaceutical Sciences','Physical Sciences','Natural Sciences','Social Sciences'];
//   const departments = {
//     'Physical Sciences': ['Computer Science', 'Geology' ,'Industrial Physics', 'Mathematics', 'Pure and Industrial Chemistry', 'Statistics'],
//     'Engineering': ['Mechanical Engineering'],
//   };
//   const levels = ['100', '200', '300', '400'];
//   const semesters = ['1st', '2nd'];
//   const courses = {
//     'Physical Sciences': {
//       'Computer Science': {
//         '100': { '1st': ['COS101', 'MTH101', 'PHY101', 'COS115', 'CSC105', 'CSC111', 'GST111', 'STA111', 'PHY107'], '2nd': ['COS102', 'COS192', 'CSC104', 'CSC128', 'GST112', 'MTH102', 'PHY102', 'PHY106', 'PHY108', 'GEY116'] },
//         '200': { '1st': ['ENT211', 'MTH201', 'COS201', 'CSC221', 'CSC203', 'CSC267', 'CSC231', 'IFT211', 'COS261', 'SEN201'], '2nd': ['GST212', 'MTH202', 'CSC266', 'COS202', 'CSC208', 'COS262', 'COS264', 'IFT212', 'GEY206', 'CSC299'] },
//         '300': { '1st': [ 'CSC301', 'CSC309', 'CSC321','CSC375', 'ICT305', 'CSC323', 'CSC371', 'CYB301'],
//            '2nd': ['CSC399','GST312', 'ENT312','CSC308', 'CSC322', 'DTS304', 'CSC310','COOUCSC322'] },
//         '400': { '1st': ['CSC400', 'CSC401', 'CSC405', 'CCS409', 'CSC411', 'CSC415', 'CSC435', 'CSC441', 'CSC473', 'CSC471', 'CSC451', 'CSC421',
//           'CSC431',], '2nd': ['CSC404', 'CSC412', 'CSC424', 'CSC454', 'CSC464', 'CSC474', 'CYB407', 'CSC472', 'CSC428', 'CSC426'] },
//       },
//       'Physics': {
//         '100': { '1st': ['PH101', 'PH102'], '2nd': ['PH103', 'PH104'] },
//         '200': { '1st': ['PH201', 'PH202'], '2nd': ['PH203', 'PH204'] },
//       },
//     },
//     'Engineering': {
//       'Mechanical Engineering': {
//         '100': { '1st': ['ME101', 'ME102'], '2nd': ['ME103', 'ME104'] },
//       },
//     },
//   };


//   const styles = {
//   deleteButton: {
//     width: '100%',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//     marginTop: '5px',
//     marginBottom: '5px',
//     backgroundColor: 'red',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   buttonText: {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#fff'
//   }
// };
//   // Get the appropriate client based on level
//   const getClientByLevel = (level) => {
//     switch (level) {
//       case '100':
//         return { databases: databases, storage: storage, client: client };
//       case '200':
//         return { databases: databases1, storage: storage1, client: client1 };
//       case '300':
//         return { databases: databases2, storage: storage2, client: client2 };
//       case '400':
//         return { databases: databases3, storage: storage3, client: client3 };
//       default:
//         return { databases: databases, storage: storage, client: client };
//     }
//   };

//   // Get current client based on selected level
//   const getCurrentClient = () => {
//     return getClientByLevel(level);
//   };

//   useEffect(() => {
//     checkIfFileExists();

//     // Real-time updates for current level client
//     const currentClient = getCurrentClient().client;
//     const unsubscribe = currentClient.subscribe(
//       [`databases.${databaseId}.collections.${collectionId}.documents`],
//       (response) => {
//         console.log('Realtime Event:', response);
//         if (
//           response.events.includes('databases.*.collections.*.documents.*.create') ||
//           response.events.includes('databases.*.collections.*.documents.*.update') ||
//           response.events.includes('databases.*.collections.*.documents.*.delete')
//         ) 
//         {
//           checkIfFileExists();
//         }
//       }
//     );

//     return () => unsubscribe();
//   }, [faculty, department, level, semester, course]);

//   const validateFields = () => {
//     const newErrors = {};
//     if (!faculty) newErrors.faculty = 'Faculty is required.';
//     if (!department) newErrors.department = 'Department is required.';
//     if (!level) newErrors.level = 'Level is required.';
//     if (!semester) newErrors.semester = 'Semester is required.';
//     if (!course) newErrors.course = 'Course is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const isValid = useMemo(() => faculty && department && level && semester && course, [faculty, department, level, semester, course]);

//   const resetForm = () => {
//     setFaculty('');
//     setDepartment('');
//     setLevel('');
//     setSemester('');
//     setCourse('');
//     setPdfMetadata(null);
//     setPdf(null);
//     setActionButtonText('Upload PDF');
//   };

//   const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  
//   const handleFileSelection = async (event) => {
//     try {
//       const file = event.target.files[0];
//       if (!file) return;

//       if (file.type !== 'application/pdf') {
//         alert('Please select a PDF file');
//         return;
//       }

//       if (file.size > MAX_FILE_SIZE) {
//         alert('File too large. Maximum file size is 50MB');
//         return;
//       }

//       setPdf(file);
//       setErrors((prevErrors) => ({ ...prevErrors, pdf: null }));
      
//       // If there's existing metadata, show Update PDF, otherwise Upload PDF
//       if (pdfMetadata) {
//         setActionButtonText('Update PDF');
//       } else {
//         setActionButtonText('Upload PDF');
//       }
//     } catch (err) {
//       setErrors((prevErrors) => ({ ...prevErrors, pdf: 'Failed to select a file.' }));
//     }
//   };

//   const handleUpload = async () => {
//     if (!validateFields() || !pdf) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         pdf: 'Please select a PDF file.',
//       }));
//       return;
//     }
  
//     setIsLoading(true);

//     try {
//       console.log('Starting upload process...');
      
//       // Get the appropriate client based on level
//       const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();
//       const fileId = ID.unique();

//       // Upload the file using the level-specific storage client
//       console.log('Uploading file to storage...');
//       const uploadResponse = await currentStorage.createFile(bucketId, fileId, pdf);
//       console.log('File uploaded:', uploadResponse);

//       // Get the public URL using the level-specific storage client
//       console.log('Getting file URL...');
//       const publicURL = currentStorage.getFilePreview(bucketId, uploadResponse.$id);
//       console.log('Public URL:', publicURL);

//       // Ensure we have a valid URL string
//       const pdfUrl = typeof publicURL === 'string' ? publicURL : publicURL.href;
      
//       if (!pdfUrl) {
//         throw new Error('Failed to generate PDF URL');
//       }

//       console.log('Final PDF URL:', pdfUrl);

//       // Prepare document data
//       const documentData = {
//         faculty,
//         department,
//         level,
//         semester,
//         course,
//         pdf_url: pdfUrl,
//         fileId
//       };

//       console.log('Document data to save:', documentData);

//       // Update or create metadata using the level-specific databases client
//       if (pdfMetadata && pdfMetadata.$id) {
//         console.log('Updating existing document...');
//         await currentDatabases.updateDocument(databaseId, collectionId, pdfMetadata.$id, documentData);
//         alert('Success! PDF Updated successfully!');
//       } else {
//         console.log('Creating new document...');
//         await currentDatabases.createDocument(databaseId, collectionId, ID.unique(), documentData);
//         alert('Success! PDF Uploaded successfully!');
//       }

//       // Refresh the file existence check
//       await checkIfFileExists();

//     } catch (error) {
//       console.error('Upload error:', error);
//       console.error('Error details:', error.message, error.code, error.type);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         upload: error.message || 'Failed to upload PDF.',
//       }));
//       alert('Error: ' + (error.message || 'Failed to upload PDF.'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     setIsLoading(true);
//     try {
//       if (!pdfMetadata || !pdfMetadata.fileId) {
//         throw new Error('File metadata or ID is missing. Cannot delete the PDF.');
//       }

//       const fileId = pdfMetadata?.fileId;
//       console.log('File ID:', fileId);

//       // Get the appropriate client based on level
//       const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();

//       // Delete file from storage using level-specific client
//       await currentStorage.deleteFile(bucketId, fileId);

//       // Delete metadata from the database using level-specific client
//       await currentDatabases.deleteDocument(databaseId, collectionId, pdfMetadata.$id);

//       resetForm();
//       alert('Success! PDF deleted successfully!');
//     } catch (err) {
//       console.error('Delete error:', err.message);
//       alert('Error: ' + (err.message || 'Failed to delete PDF.'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const checkIfFileExists = async () => {
//     if (!faculty || !department || !level || !semester || !course) {
//       setPdfMetadata(null);
//       setActionButtonText('Upload PDF');
//       return;
//     }

//     try {
//       // Get the appropriate client based on level
//       const { databases: currentDatabases } = getCurrentClient();
      
//       const response = await currentDatabases.listDocuments(databaseId, collectionId, [
//         Query.equal('faculty', faculty),
//         Query.equal('department', department),
//         Query.equal('level', level),
//         Query.equal('semester', semester),
//         Query.equal('course', course),
//       ]);

//       console.log('File existence check:', response.documents);

//       if (response.documents.length > 0) {
//         const existingDoc = response.documents[0];
//         setPdfMetadata(existingDoc);
//         setActionButtonText('Update PDF');
//         console.log('PDF metadata found:', existingDoc);
//       } else {
//         setPdfMetadata(null);
//         setActionButtonText('Upload PDF');
//         console.log('No PDF metadata found');
//       }
//     } catch (err) {
//       console.error('Error during metadata check:', err.message);
//       setPdfMetadata(null);
//       setActionButtonText('Upload PDF');
//     }
//   };

//   const handleAction = (type) => {
//     if (!validateFields()) return;
  
//     if (type === 'delete') {
//       if (!pdfMetadata || !pdfMetadata.fileId) {
//         alert('Error: No PDF found to delete.');
//         return;
//       }
//     }
  
//     if (type === 'upload' && !pdf) {
//       alert('Error: Please select a PDF file to upload.');
//       return;
//     }
  
//     setActionType(type);
//     setSelectedDetails({
//       faculty: pdfMetadata?.faculty || faculty,
//       department: pdfMetadata?.department || department,
//       level: pdfMetadata?.level || level,
//       semester: pdfMetadata?.semester || semester,
//       course: pdfMetadata?.course || course,
//     });
//     setShowModal(true);
//   };

//   const handleConfirmAction = async () => {
//     setShowModal(false);
  
//     if (actionType === 'delete') {
//       try {
//         setIsLoading(true);
//         const fileId = pdfMetadata.fileId;
//         console.log('Deleting File:', fileId);

//         // Get the appropriate client based on level
//         const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();
  
//         await currentStorage.deleteFile(bucketId, fileId);
//         await currentDatabases.deleteDocument(databaseId, collectionId, pdfMetadata.$id);
  
//         alert('Success! PDF deleted successfully!');
//         resetForm();
//       } catch (error) {
//         alert('Error: ' + (error.message || 'Failed to delete PDF.'));
//       } finally {
//         setIsLoading(false);
//       }
//     } else if (actionType === 'upload') {
//       await handleUpload();
//     } 
//   };

//   const handleCancelAction = () => {
//     setShowModal(false);
//   };

//   const logout = async () => {
//     setLoading(true); 

//     try {
//       // Logout from all clients
//       const sessions = await account.listSessions(); 
//       for (const session of sessions.sessions) {
//         await account.deleteSession(session.$id);
//       }
  
//       console.log('Successfully logged out');
      
//       // Navigate to login page
//       navigate('/');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Debug: Log when pdfMetadata changes
//   useEffect(() => {
//     console.log('pdfMetadata updated:', pdfMetadata);
//   }, [pdfMetadata]);

//   return (
//     <div className="upload-container">
//       <h1 className="upload-header">LECTURERS PDF DASHBOARD</h1>
      
//       <div className="icon-container">
//         {loading ? (
//           <div className="loading-spinner-small"></div>
//         ) : (
//           <button className="logout-button" onClick={logout}>
//             Log-out
//           </button>
//         )}
//       </div>

//       {/* Faculty Picker */}
//       <div className="form-group">
//         <label className="form-label">Faculty</label>
//         <div className="picker-container">
//           <select 
//             value={faculty} 
//             onChange={(e) => setFaculty(e.target.value)}
//             className="form-picker"
//           >
//             <option value="">Select Faculty</option>
//             {faculties.map((fac) => (
//               <option key={fac} value={fac}>{fac}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.faculty && <span className="error-text">{errors.faculty}</span>}
//         </div>
//       </div>

//       {/* Department Picker */}
//       <div className="form-group">
//         <label className="form-label">Department</label>
//         <div className="picker-container">
//           <select
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             className="form-picker"
//             disabled={!faculty}
//           >
//             <option value="">Select Department</option>
//             {(departments[faculty] || []).map((dept) => (
//               <option key={dept} value={dept}>{dept}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.department && <span className="error-text">{errors.department}</span>}
//         </div>
//       </div>

//       {/* Level Picker */}
//       <div className="form-group">
//         <label className="form-label">Level</label>
//         <div className="picker-container">
//           <select 
//             value={level} 
//             onChange={(e) => setLevel(e.target.value)} 
//             className="form-picker"
//             disabled={!department}
//           >
//             <option value="">Select Level</option>
//             {levels.map((lvl) => (
//               <option key={lvl} value={lvl}>{lvl}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.level && <span className="error-text">{errors.level}</span>}
//         </div>
//       </div>

//       {/* Semester Picker */}
//       <div className="form-group">
//         <label className="form-label">Semester</label>
//         <div className="picker-container">
//           <select 
//             value={semester} 
//             onChange={(e) => setSemester(e.target.value)} 
//             className="form-picker"
//             disabled={!level}
//           >
//             <option value="">Select Semester</option>
//             {semesters.map((sem) => (
//               <option key={sem} value={sem}>{sem}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.semester && <span className="error-text">{errors.semester}</span>}
//         </div>
//       </div>

//       {/* Course Picker */}
//       <div className="form-group">
//         <label className="form-label">Course</label>
//         <div className="picker-container">
//           <select 
//             value={course} 
//             onChange={(e) => setCourse(e.target.value)} 
//             className="form-picker"
//             disabled={!semester}
//           >
//             <option value="">Select Course</option>
//             {(courses[faculty]?.[department]?.[level]?.[semester] || []).map((crs) => (
//               <option key={crs} value={crs}>{crs}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.course && <span className="error-text">{errors.course}</span>}
//         </div>
//       </div>

//       {/* File Selection */}
//       <button onClick={() => document.getElementById('file-input').click()} className="button1">
//         <span className="button-text">Select PDF File</span>
//       </button>
//       <input
//         id="file-input"
//         type="file"
//         accept=".pdf"
//         onChange={handleFileSelection}
//         style={{ display: 'none' }}
//       />
//       {pdf && <div className="file-selected">Selected: {pdf.name}</div>}

//       {/* Upload Button */}
//       <button
//         onClick={() => handleAction('upload')}
//         className={`button ${!pdf ? 'disabled-button' : ''}`}
//         disabled={!pdf || !isValid}
//       >
//         <span className="button-text">{actionButtonText}</span>
//       </button>

//       {/* DELETE BUTTON - Now properly visible when pdfMetadata exists */}
//      {/* DELETE BUTTON - Now properly visible when pdfMetadata exists */}
// {pdfMetadata && pdfMetadata.fileId && (
//   <button 
//     onClick={() => handleAction('delete')} 
//     style={styles.deleteButton}
//   >
//     <span style={styles.buttonText}>Delete PDF</span>
//   </button>
// )}

//       {/* Debug info - remove in production */}
//       {/* <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
//         Debug: {pdfMetadata ? `PDF exists (${pdfMetadata.fileId})` : 'No PDF found'}
//       </div> */}

//       {isLoading && (
//         <div className="loading-container">
//           <div className="loading-spinner-large"></div>
//           <span className="loading-text">Processing...</span>
//         </div>
//       )}

//       {/* Modal for confirmation */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3 className="modal-text">
//               Are you sure you want to {actionType} this PDF?
//             </h3>
//             <div className="modal-details">
//               <p className="modal-text">Faculty: {selectedDetails.faculty}</p>
//               <p className="modal-text">Department: {selectedDetails.department}</p>
//               <p className="modal-text">Level: {selectedDetails.level}</p>
//               <p className="modal-text">Semester: {selectedDetails.semester}</p>
//               <p className="modal-text">Course: {selectedDetails.course}</p>
//             </div>
//             <div className="modal-button-container">
//               <button onClick={handleConfirmAction} className="modal-button">
//                 <span className="modal-button-text">Yes</span>
//               </button>
//               <button onClick={handleCancelAction} className="modal-button1">
//                 <span className="modal-button-text1">No</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../UploadScreens/styles/Upload.css';
import { 
  databases, account, account1, account2, account3, storage, 
  databases1, storage1,
  databases2, storage2,
  databases3, storage3,
  databaseId, collectionId, Query, ID, bucketId 
} from './config';

const Upload = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Your existing states
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [pdfMetadata, setPdfMetadata] = useState(null);
  const [actionButtonText, setActionButtonText] = useState('Upload PDF');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');
  const [selectedDetails, setSelectedDetails] = useState({});

  const faculties = ['Agriculture','Arts','Basic Medical Sciences','Education','Engineering','Environmental Sciences','Law','Management Sciences','Medicine','Pharmaceutical Sciences','Physical Sciences','Natural Sciences','Social Sciences'];
  const departments = {
    'Physical Sciences': ['Computer Science', 'Geology' ,'Industrial Physics', 'Mathematics', 'Pure and Industrial Chemistry', 'Statistics'],
    'Engineering': ['Mechanical Engineering'],
  };
  const levels = ['100', '200', '300', '400'];
  const semesters = ['1st', '2nd'];
  const courses = {
    'Physical Sciences': {
      'Computer Science': {
        '100': { '1st': ['COS101', 'MTH101', 'PHY101', 'COS115', 'CSC105', 'CSC111', 'GST111', 'STA111', 'PHY107'], '2nd': ['COS102', 'COS192', 'CSC104', 'CSC128', 'GST112', 'MTH102', 'PHY102', 'PHY106', 'PHY108', 'GEY116'] },
        '200': { '1st': ['ENT211', 'MTH201', 'COS201', 'CSC221', 'CSC203', 'CSC267', 'CSC231', 'IFT211', 'COS261', 'SEN201'], '2nd': ['GST212', 'MTH202', 'CSC266', 'COS202', 'CSC208', 'COS262', 'COS264', 'IFT212', 'GEY206', 'CSC299'] },
        '300': { '1st': [ 'CSC301', 'CSC309', 'CSC321','CSC375', 'ICT305', 'CSC323', 'CSC371', 'CYB301'],
           '2nd': ['CSC399','GST312', 'ENT312','CSC308', 'CSC322', 'DTS304', 'CSC310','COOUCSC322'] },
        '400': { '1st': ['CSC400', 'CSC401', 'CSC405', 'CCS409', 'CSC411', 'CSC415', 'CSC435', 'CSC441', 'CSC473', 'CSC471', 'CSC451', 'CSC421',
          'CSC431',], '2nd': ['CSC404', 'CSC412', 'CSC424', 'CSC454', 'CSC464', 'CSC474', 'CYB407', 'CSC472', 'CSC428', 'CSC426'] },
      },
      'Physics': {
        '100': { '1st': ['PH101', 'PH102'], '2nd': ['PH103', 'PH104'] },
        '200': { '1st': ['PH201', 'PH202'], '2nd': ['PH203', 'PH204'] },
      },
    },
    'Engineering': {
      'Mechanical Engineering': {
        '100': { '1st': ['ME101', 'ME102'], '2nd': ['ME103', 'ME104'] },
      },
    },
  };

  const styles = {
    deleteButton: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      marginTop: '5px',
      marginBottom: '5px',
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
    }
  };
// Add this useEffect for tab visibility detection
useEffect(() => {
  if (!isAuthenticated) return;

  let inactivityTimer;
  let tabHiddenTime = null;

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Tab lost focus - record the time
      tabHiddenTime = Date.now();
      console.log('Tab hidden at:', new Date().toLocaleTimeString());
    } else {
      // Tab regained focus - check how long it was hidden
      if (tabHiddenTime) {
        const timeHidden = Date.now() - tabHiddenTime;
        const minutesHidden = timeHidden / (1000 * 60);
        
        console.log(`Tab was hidden for ${minutesHidden.toFixed(1)} minutes`);
        
        // If tab was hidden for more than 10 minutes, logout
        if (minutesHidden >= 10) {
          handleAutoLogout();
        }
        
        tabHiddenTime = null;
      }
    }
  };

  // Listen for tab visibility changes
  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, [isAuthenticated, navigate]);


  // Check authentication on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  
const handleAutoLogout = async () => {
  try {
    console.log('Auto-logging out due to inactivity...');
    const sessions = await account.listSessions();
    for (const session of sessions.sessions) {
      await account.deleteSession(session.$id);
    }
    alert('Session expired due to inactivity');
    navigate('/', { replace: true });
  } catch (error) {
    console.error('Auto-logout error:', error);
    navigate('/login', { replace: true });
  }
};
  // Get the appropriate client based on level
  const getCurrentClient = () => {
    switch (level) {
      case '100':
        return { databases: databases, storage: storage };
      case '200':
        return { databases: databases1, storage: storage1 };
      case '300':
        return { databases: databases2, storage: storage2 };
      case '400':
        return { databases: databases3, storage: storage3 };
      default:
        return { databases: databases, storage: storage };
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkIfFileExists();

      // Real-time updates for current level client
      const currentClient = getCurrentClient();
      // Note: You might need to adjust this based on your actual client structure
      // If you need real-time updates, you'll need to use the appropriate client instance
    }
  }, [faculty, department, level, semester, course, isAuthenticated]);

  const validateFields = () => {
    const newErrors = {};
    if (!faculty) newErrors.faculty = 'Faculty is required.';
    if (!department) newErrors.department = 'Department is required.';
    if (!level) newErrors.level = 'Level is required.';
    if (!semester) newErrors.semester = 'Semester is required.';
    if (!course) newErrors.course = 'Course is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValid = useMemo(() => faculty && department && level && semester && course, [faculty, department, level, semester, course]);

  const resetForm = () => {
    setFaculty('');
    setDepartment('');
    setLevel('');
    setSemester('');
    setCourse('');
    setPdfMetadata(null);
    setPdf(null);
    setActionButtonText('Upload PDF');
  };

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  
  const handleFileSelection = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      if (file.type !== 'application/pdf') {
        alert('Please select a PDF file');
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert('File too large. Maximum file size is 50MB');
        return;
      }

      setPdf(file);
      setErrors((prevErrors) => ({ ...prevErrors, pdf: null }));
      
      // If there's existing metadata, show Update PDF, otherwise Upload PDF
      if (pdfMetadata) {
        setActionButtonText('Update PDF');
      } else {
        setActionButtonText('Upload PDF');
      }
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, pdf: 'Failed to select a file.' }));
    }
  };

  // Auth wrapper for all operations
  // In your Upload component, update the checkAuth function
const checkAuth = async () => {
  try {
    // Check authentication with any client (they should all be authenticated)
    const userData = await account.get(); // Use base client
    setUser(userData);
    setIsAuthenticated(true);
  } catch (error) {
    console.log('Authentication failed, redirecting to login...');
    navigate('/login');
  } finally {
    setAuthLoading(false);
  }
};

// Update the withAuthCheck function to verify all clients
const withAuthCheck = (operation) => {
  return async (...args) => {
    try {
      // Verify user is authenticated with at least the base client
      await account.get();
      return await operation(...args);
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Session expired. Please login again.');
      navigate('/login');
      throw error;
    }
  };
};
  const handleUpload = withAuthCheck(async () => {
    if (!validateFields() || !pdf) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pdf: 'Please select a PDF file.',
      }));
      return;
    }
  
    setIsLoading(true);

    try {
      console.log('Starting upload process...');
      
      // Get the appropriate client based on level
      const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();
      const fileId = ID.unique();

      // Upload the file using the level-specific storage client
      console.log('Uploading file to storage...');
      const uploadResponse = await currentStorage.createFile(bucketId, fileId, pdf);
      console.log('File uploaded:', uploadResponse);

      // Get the public URL using the level-specific storage client
      console.log('Getting file URL...');
      const publicURL = currentStorage.getFilePreview(bucketId, uploadResponse.$id);
      console.log('Public URL:', publicURL);

      // Ensure we have a valid URL string
      const pdfUrl = typeof publicURL === 'string' ? publicURL : publicURL.href;
      
      if (!pdfUrl) {
        throw new Error('Failed to generate PDF URL');
      }

      console.log('Final PDF URL:', pdfUrl);

      // Prepare document data
      const documentData = {
        faculty,
        department,
        level,
        semester,
        course,
        pdf_url: pdfUrl,
        fileId
      };

      console.log('Document data to save:', documentData);

      // Update or create metadata using the level-specific databases client
      if (pdfMetadata && pdfMetadata.$id) {
        console.log('Updating existing document...');
        await currentDatabases.updateDocument(databaseId, collectionId, pdfMetadata.$id, documentData);
        alert('Success! PDF Updated successfully!');
      } else {
        console.log('Creating new document...');
        await currentDatabases.createDocument(databaseId, collectionId, ID.unique(), documentData);
        alert('Success! PDF Uploaded successfully!');
      }

      // Refresh the file existence check
      await checkIfFileExists();

    } catch (error) {
      console.error('Upload error:', error);
      console.error('Error details:', error.message, error.code, error.type);
      setErrors((prevErrors) => ({
        ...prevErrors,
        upload: error.message || 'Failed to upload PDF.',
      }));
      alert('Error: ' + (error.message || 'Failed to upload PDF.'));
    } finally {
      setIsLoading(false);
      resetForm();
    }
  });

  const handleDelete = withAuthCheck(async () => {
    setIsLoading(true);
    try {
      if (!pdfMetadata || !pdfMetadata.fileId) {
        throw new Error('File metadata or ID is missing. Cannot delete the PDF.');
      }

      const fileId = pdfMetadata?.fileId;
      console.log('File ID:', fileId);

      // Get the appropriate client based on level
      const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();

      // Delete file from storage using level-specific client
      await currentStorage.deleteFile(bucketId, fileId);

      // Delete metadata from the database using level-specific client
      await currentDatabases.deleteDocument(databaseId, collectionId, pdfMetadata.$id);

      resetForm();
      alert('Success! PDF deleted successfully!');
    } catch (err) {
      console.error('Delete error:', err.message);
      alert('Error: ' + (err.message || 'Failed to delete PDF.'));
    } finally {
      setIsLoading(false);
    }
  });

  const checkIfFileExists = async () => {
    if (!faculty || !department || !level || !semester || !course) {
      setPdfMetadata(null);
      setActionButtonText('Upload PDF');
      return;
    }

    try {
      // Get the appropriate client based on level
      const { databases: currentDatabases } = getCurrentClient();
      
      const response = await currentDatabases.listDocuments(databaseId, collectionId, [
        Query.equal('faculty', faculty),
        Query.equal('department', department),
        Query.equal('level', level),
        Query.equal('semester', semester),
        Query.equal('course', course),
      ]);

      console.log('File existence check:', response.documents);

      if (response.documents.length > 0) {
        const existingDoc = response.documents[0];
        setPdfMetadata(existingDoc);
        setActionButtonText('Update PDF');
        console.log('PDF metadata found:', existingDoc);
      } else {
        setPdfMetadata(null);
        setActionButtonText('Upload PDF');
        console.log('No PDF metadata found');
      }
    } catch (err) {
      console.error('Error during metadata check:', err.message);
      setPdfMetadata(null);
      setActionButtonText('Upload PDF');
    }
  };

  const handleAction = (type) => {
    if (!validateFields()) return;
  
    if (type === 'delete') {
      if (!pdfMetadata || !pdfMetadata.fileId) {
        alert('Error: No PDF found to delete.');
        return;
      }
    }
  
    if (type === 'upload' && !pdf) {
      alert('Error: Please select a PDF file to upload.');
      return;
    }
  
    setActionType(type);
    setSelectedDetails({
      faculty: pdfMetadata?.faculty || faculty,
      department: pdfMetadata?.department || department,
      level: pdfMetadata?.level || level,
      semester: pdfMetadata?.semester || semester,
      course: pdfMetadata?.course || course,
    });
    setShowModal(true);
  };

  const handleConfirmAction = async () => {
    setShowModal(false);
  
    if (actionType === 'delete') {
      await handleDelete();
    } else if (actionType === 'upload') {
      await handleUpload();
    } 
  };

  const handleCancelAction = () => {
    setShowModal(false);
  };

  const logout = async () => {
  setLoading(true); 

  try {
    // Logout from all clients
    const accounts = [account, account1, account2, account3];
    
    for (const acc of accounts) {
      try {
        const sessions = await acc.listSessions(); 
        for (const session of sessions.sessions) {
          await acc.deleteSession(session.$id);
        }
        console.log(`Logged out from client successfully`);
      } catch (error) {
        console.error(`Error logging out from one client:`, error);
        // Continue with other clients
      }
    }

    // Clear storage
    await storage.removeItem('sessions');
    await storage.removeItem('email');
    
    console.log('Successfully logged out from all clients');
    
    // Navigation logic that works
    console.log('Before navigation - current path:', window.location.pathname);
    navigate('/', { replace: true });
    console.log('After navigation called');
    
    // Force refresh if navigation doesn't work
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        console.log('Navigation failed, forcing refresh');
        window.location.href = '/';
      }
    }, 100);
    
  } catch (error) {
    console.error('Error during logout:', error);
    // Even on error, try to go home
    window.location.href = '/';
  } finally {
    setLoading(false);
  }
};
  // Debug: Log when pdfMetadata changes
  useEffect(() => {
    console.log('pdfMetadata updated:', pdfMetadata);
  }, [pdfMetadata]);

  // Loading state while checking authentication
  if (authLoading) {
    return (
      <div className="upload-container">
        <div className="loading-container">
          <div className="loading-spinner-large"></div>
          <span className="loading-text">Checking authentication...</span>
        </div>
      </div>
    );
  }

  // Show not authenticated message (though they should be redirected)
  if (!isAuthenticated) {
    return (
      <div className="upload-container">
        <div className="error-message">
          <h2>Access Denied</h2>
          <p>Please log in to access this page.</p>
          <button onClick={() => navigate('/login')} className="login-button">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="upload-container">
      {/* User info header */}
      <div className="user-info">
        <p>Welcome, {user?.name || user?.email}</p>
      </div>
      
      <h1 className="upload-header">LECTURERS PDF DASHBOARD</h1>
      
      <div className="icon-container">
        {loading ? (
          <div className="loading-spinner-small"></div>
        ) : (
          <button className="logout-button" onClick={logout}>
            Log-out
          </button>
        )}
      </div>

      {/* Faculty Picker */}
      <div className="form-group">
        <label className="form-label">Faculty</label>
        <div className="picker-container">
          <select 
            value={faculty} 
            onChange={(e) => setFaculty(e.target.value)}
            className="form-picker"
          >
            <option value="">Select Faculty</option>
            {faculties.map((fac) => (
              <option key={fac} value={fac}>{fac}</option>
            ))}
          </select>
          <span className="picker-icon">▼</span>
          {errors.faculty && <span className="error-text">{errors.faculty}</span>}
        </div>
      </div>

      {/* Department Picker */}
      <div className="form-group">
        <label className="form-label">Department</label>
        <div className="picker-container">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-picker"
            disabled={!faculty}
          >
            <option value="">Select Department</option>
            {(departments[faculty] || []).map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <span className="picker-icon">▼</span>
          {errors.department && <span className="error-text">{errors.department}</span>}
        </div>
      </div>

      {/* Level Picker */}
      <div className="form-group">
        <label className="form-label">Level</label>
        <div className="picker-container">
          <select 
            value={level} 
            onChange={(e) => setLevel(e.target.value)} 
            className="form-picker"
            disabled={!department}
          >
            <option value="">Select Level</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
          <span className="picker-icon">▼</span>
          {errors.level && <span className="error-text">{errors.level}</span>}
        </div>
      </div>

      {/* Semester Picker */}
      <div className="form-group">
        <label className="form-label">Semester</label>
        <div className="picker-container">
          <select 
            value={semester} 
            onChange={(e) => setSemester(e.target.value)} 
            className="form-picker"
            disabled={!level}
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
          <span className="picker-icon">▼</span>
          {errors.semester && <span className="error-text">{errors.semester}</span>}
        </div>
      </div>

      {/* Course Picker */}
      <div className="form-group">
        <label className="form-label">Course</label>
        <div className="picker-container">
          <select 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
            className="form-picker"
            disabled={!semester}
          >
            <option value="">Select Course</option>
            {(courses[faculty]?.[department]?.[level]?.[semester] || []).map((crs) => (
              <option key={crs} value={crs}>{crs}</option>
            ))}
          </select>
          <span className="picker-icon">▼</span>
          {errors.course && <span className="error-text">{errors.course}</span>}
        </div>
      </div>

      {/* File Selection */}
      <button onClick={() => document.getElementById('file-input').click()} className="button1">
        <span className="button-text">Select PDF File</span>
      </button>
      <input
        id="file-input"
        type="file"
        accept=".pdf"
        onChange={handleFileSelection}
        style={{ display: 'none' }}
      />
      {pdf && <div className="file-selected">Selected: {pdf.name}</div>}

      {/* Upload Button */}
      <button
        onClick={() => handleAction('upload')}
        className={`button ${!pdf ? 'disabled-button' : ''}`}
        disabled={!pdf || !isValid}
      >
        <span className="button-text">{actionButtonText}</span>
      </button>

      {/* DELETE BUTTON - Now properly visible when pdfMetadata exists */}
      {pdfMetadata && pdfMetadata.fileId && (
        <button 
          onClick={() => handleAction('delete')} 
          style={styles.deleteButton}
        >
          <span style={styles.buttonText}>Delete PDF</span>
        </button>
      )}

      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner-large"></div>
          <span className="loading-text">Processing...</span>
        </div>
      )}

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-text">
              Are you sure you want to {actionType} this PDF?
            </h3>
            <div className="modal-details">
              <p className="modal-text">Faculty: {selectedDetails.faculty}</p>
              <p className="modal-text">Department: {selectedDetails.department}</p>
              <p className="modal-text">Level: {selectedDetails.level}</p>
              <p className="modal-text">Semester: {selectedDetails.semester}</p>
              <p className="modal-text">Course: {selectedDetails.course}</p>
            </div>
            <div className="modal-button-container">
              <button onClick={handleConfirmAction} className="modal-button">
                <span className="modal-button-text">Yes</span>
              </button>
              <button onClick={handleCancelAction} className="modal-button1">
                <span className="modal-button-text1">No</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;

// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../UploadScreens/styles/Upload.css';
// import { 
//   databases, account, storage, 
//   databases1, storage1,
//   databases2, storage2,
//   databases3, storage3,
//   databaseId, collectionId, Query, ID, bucketId 
// } from './config';

// const Upload = () => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);
  
//   // Your existing states
//   const [faculty, setFaculty] = useState('');
//   const [department, setDepartment] = useState('');
//   const [level, setLevel] = useState('');
//   const [semester, setSemester] = useState('');
//   const [course, setCourse] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [pdf, setPdf] = useState(null);
//   const [pdfMetadata, setPdfMetadata] = useState(null);
//   const [actionButtonText, setActionButtonText] = useState('Upload PDF');
//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [actionType, setActionType] = useState('');
//   const [selectedDetails, setSelectedDetails] = useState({});

//   const faculties = ['Agriculture','Arts','Basic Medical Sciences','Education','Engineering','Environmental Sciences','Law','Management Sciences','Medicine','Pharmaceutical Sciences','Physical Sciences','Natural Sciences','Social Sciences'];
//   const departments = {
//     'Physical Sciences': ['Computer Science', 'Geology' ,'Industrial Physics', 'Mathematics', 'Pure and Industrial Chemistry', 'Statistics'],
//     'Engineering': ['Mechanical Engineering'],
//   };
//   const levels = ['100', '200', '300', '400'];
//   const semesters = ['1st', '2nd'];
//   const courses = {
//     'Physical Sciences': {
//       'Computer Science': {
//         '100': { '1st': ['COS101', 'MTH101', 'PHY101', 'COS115', 'CSC105', 'CSC111', 'GST111', 'STA111', 'PHY107'], '2nd': ['COS102', 'COS192', 'CSC104', 'CSC128', 'GST112', 'MTH102', 'PHY102', 'PHY106', 'PHY108', 'GEY116'] },
//         '200': { '1st': ['ENT211', 'MTH201', 'COS201', 'CSC221', 'CSC203', 'CSC267', 'CSC231', 'IFT211', 'COS261', 'SEN201'], '2nd': ['GST212', 'MTH202', 'CSC266', 'COS202', 'CSC208', 'COS262', 'COS264', 'IFT212', 'GEY206', 'CSC299'] },
//         '300': { '1st': [ 'CSC301', 'CSC309', 'CSC321','CSC375', 'ICT305', 'CSC323', 'CSC371', 'CYB301'],
//            '2nd': ['CSC399','GST312', 'ENT312','CSC308', 'CSC322', 'DTS304', 'CSC310','COOUCSC322'] },
//         '400': { '1st': ['CSC400', 'CSC401', 'CSC405', 'CCS409', 'CSC411', 'CSC415', 'CSC435', 'CSC441', 'CSC473', 'CSC471', 'CSC451', 'CSC421',
//           'CSC431',], '2nd': ['CSC404', 'CSC412', 'CSC424', 'CSC454', 'CSC464', 'CSC474', 'CYB407', 'CSC472', 'CSC428', 'CSC426'] },
//       },
//       'Physics': {
//         '100': { '1st': ['PH101', 'PH102'], '2nd': ['PH103', 'PH104'] },
//         '200': { '1st': ['PH201', 'PH202'], '2nd': ['PH203', 'PH204'] },
//       },
//     },
//     'Engineering': {
//       'Mechanical Engineering': {
//         '100': { '1st': ['ME101', 'ME102'], '2nd': ['ME103', 'ME104'] },
//       },
//     },
//   };

//   const styles = {
//     deleteButton: {
//       width: '100%',
//       padding: '10px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//       marginTop: '5px',
//       marginBottom: '5px',
//       backgroundColor: 'red',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     buttonText: {
//       fontSize: '14px',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       color: '#fff'
//     }
//   };
// // Add this useEffect for tab visibility detection
// useEffect(() => {
//   if (!isAuthenticated) return;

//   let inactivityTimer;
//   let tabHiddenTime = null;

//   const handleVisibilityChange = () => {
//     if (document.hidden) {
//       // Tab lost focus - record the time
//       tabHiddenTime = Date.now();
//       console.log('Tab hidden at:', new Date().toLocaleTimeString());
//     } else {
//       // Tab regained focus - check how long it was hidden
//       if (tabHiddenTime) {
//         const timeHidden = Date.now() - tabHiddenTime;
//         const minutesHidden = timeHidden / (1000 * 60);
        
//         console.log(`Tab was hidden for ${minutesHidden.toFixed(1)} minutes`);
        
//         // If tab was hidden for more than 10 minutes, logout
//         if (minutesHidden >= 10) {
//           handleAutoLogout();
//         }
        
//         tabHiddenTime = null;
//       }
//     }
//   };

//   // Listen for tab visibility changes
//   document.addEventListener('visibilitychange', handleVisibilityChange);

//   return () => {
//     if (inactivityTimer) clearTimeout(inactivityTimer);
//     document.removeEventListener('visibilitychange', handleVisibilityChange);
//   };
// }, [isAuthenticated, navigate]);


//   // Check authentication on component mount
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     try {
//       const userData = await account.get();
//       setUser(userData);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.log('Authentication failed, redirecting to login...');
//       navigate('/login');
//     } finally {
//       setAuthLoading(false);
//     }
//   };
// const handleAutoLogout = async () => {
//   try {
//     console.log('Auto-logging out due to inactivity...');
//     const sessions = await account.listSessions();
//     for (const session of sessions.sessions) {
//       await account.deleteSession(session.$id);
//     }
//     alert('Session expired due to inactivity');
//     navigate('/login', { replace: true });
//   } catch (error) {
//     console.error('Auto-logout error:', error);
//     navigate('/login', { replace: true });
//   }
// };
//   // Get the appropriate client based on level
//   const getCurrentClient = () => {
//     switch (level) {
//       case '100':
//         return { databases: databases, storage: storage };
//       case '200':
//         return { databases: databases1, storage: storage1 };
//       case '300':
//         return { databases: databases2, storage: storage2 };
//       case '400':
//         return { databases: databases3, storage: storage3 };
//       default:
//         return { databases: databases, storage: storage };
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       checkIfFileExists();

//       // Real-time updates for current level client
//       const currentClient = getCurrentClient();
//       // Note: You might need to adjust this based on your actual client structure
//       // If you need real-time updates, you'll need to use the appropriate client instance
//     }
//   }, [faculty, department, level, semester, course, isAuthenticated]);

//   const validateFields = () => {
//     const newErrors = {};
//     if (!faculty) newErrors.faculty = 'Faculty is required.';
//     if (!department) newErrors.department = 'Department is required.';
//     if (!level) newErrors.level = 'Level is required.';
//     if (!semester) newErrors.semester = 'Semester is required.';
//     if (!course) newErrors.course = 'Course is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const isValid = useMemo(() => faculty && department && level && semester && course, [faculty, department, level, semester, course]);

//   const resetForm = () => {
//     setFaculty('');
//     setDepartment('');
//     setLevel('');
//     setSemester('');
//     setCourse('');
//     setPdfMetadata(null);
//     setPdf(null);
//     setActionButtonText('Upload PDF');
//   };

//   const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  
//   const handleFileSelection = async (event) => {
//     try {
//       const file = event.target.files[0];
//       if (!file) return;

//       if (file.type !== 'application/pdf') {
//         alert('Please select a PDF file');
//         return;
//       }

//       if (file.size > MAX_FILE_SIZE) {
//         alert('File too large. Maximum file size is 50MB');
//         return;
//       }

//       setPdf(file);
//       setErrors((prevErrors) => ({ ...prevErrors, pdf: null }));
      
//       // If there's existing metadata, show Update PDF, otherwise Upload PDF
//       if (pdfMetadata) {
//         setActionButtonText('Update PDF');
//       } else {
//         setActionButtonText('Upload PDF');
//       }
//     } catch (err) {
//       setErrors((prevErrors) => ({ ...prevErrors, pdf: 'Failed to select a file.' }));
//     }
//   };

//   // Auth wrapper for all operations
//   const withAuthCheck = (operation) => {
//     return async (...args) => {
//       try {
//         // Verify user is still authenticated
//         await account.get();
//         return await operation(...args);
//       } catch (error) {
//         console.error('Authentication failed:', error);
//         alert('Session expired. Please login again.');
//         navigate('/login');
//         throw error;
//       }
//     };
//   };

//   const handleUpload = withAuthCheck(async () => {
//     if (!validateFields() || !pdf) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         pdf: 'Please select a PDF file.',
//       }));
//       return;
//     }
  
//     setIsLoading(true);

//     try {
//       console.log('Starting upload process...');
      
//       // Get the appropriate client based on level
//       const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();
//       const fileId = ID.unique();

//       // Upload the file using the level-specific storage client
//       console.log('Uploading file to storage...');
//       const uploadResponse = await currentStorage.createFile(bucketId, fileId, pdf);
//       console.log('File uploaded:', uploadResponse);

//       // Get the public URL using the level-specific storage client
//       console.log('Getting file URL...');
//       const publicURL = currentStorage.getFilePreview(bucketId, uploadResponse.$id);
//       console.log('Public URL:', publicURL);

//       // Ensure we have a valid URL string
//       const pdfUrl = typeof publicURL === 'string' ? publicURL : publicURL.href;
      
//       if (!pdfUrl) {
//         throw new Error('Failed to generate PDF URL');
//       }

//       console.log('Final PDF URL:', pdfUrl);

//       // Prepare document data
//       const documentData = {
//         faculty,
//         department,
//         level,
//         semester,
//         course,
//         pdf_url: pdfUrl,
//         fileId
//       };

//       console.log('Document data to save:', documentData);

//       // Update or create metadata using the level-specific databases client
//       if (pdfMetadata && pdfMetadata.$id) {
//         console.log('Updating existing document...');
//         await currentDatabases.updateDocument(databaseId, collectionId, pdfMetadata.$id, documentData);
//         alert('Success! PDF Updated successfully!');
//       } else {
//         console.log('Creating new document...');
//         await currentDatabases.createDocument(databaseId, collectionId, ID.unique(), documentData);
//         alert('Success! PDF Uploaded successfully!');
//       }

//       // Refresh the file existence check
//       await checkIfFileExists();

//     } catch (error) {
//       console.error('Upload error:', error);
//       console.error('Error details:', error.message, error.code, error.type);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         upload: error.message || 'Failed to upload PDF.',
//       }));
//       alert('Error: ' + (error.message || 'Failed to upload PDF.'));
//     } finally {
//       setIsLoading(false);
//     }
//   });

//   const handleDelete = withAuthCheck(async () => {
//     setIsLoading(true);
//     try {
//       if (!pdfMetadata || !pdfMetadata.fileId) {
//         throw new Error('File metadata or ID is missing. Cannot delete the PDF.');
//       }

//       const fileId = pdfMetadata?.fileId;
//       console.log('File ID:', fileId);

//       // Get the appropriate client based on level
//       const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();

//       // Delete file from storage using level-specific client
//       await currentStorage.deleteFile(bucketId, fileId);

//       // Delete metadata from the database using level-specific client
//       await currentDatabases.deleteDocument(databaseId, collectionId, pdfMetadata.$id);

//       resetForm();
//       alert('Success! PDF deleted successfully!');
//     } catch (err) {
//       console.error('Delete error:', err.message);
//       alert('Error: ' + (err.message || 'Failed to delete PDF.'));
//     } finally {
//       setIsLoading(false);
//     }
//   });

//   const checkIfFileExists = async () => {
//     if (!faculty || !department || !level || !semester || !course) {
//       setPdfMetadata(null);
//       setActionButtonText('Upload PDF');
//       return;
//     }

//     try {
//       // Get the appropriate client based on level
//       const { databases: currentDatabases } = getCurrentClient();
      
//       const response = await currentDatabases.listDocuments(databaseId, collectionId, [
//         Query.equal('faculty', faculty),
//         Query.equal('department', department),
//         Query.equal('level', level),
//         Query.equal('semester', semester),
//         Query.equal('course', course),
//       ]);

//       console.log('File existence check:', response.documents);

//       if (response.documents.length > 0) {
//         const existingDoc = response.documents[0];
//         setPdfMetadata(existingDoc);
//         setActionButtonText('Update PDF');
//         console.log('PDF metadata found:', existingDoc);
//       } else {
//         setPdfMetadata(null);
//         setActionButtonText('Upload PDF');
//         console.log('No PDF metadata found');
//       }
//     } catch (err) {
//       console.error('Error during metadata check:', err.message);
//       setPdfMetadata(null);
//       setActionButtonText('Upload PDF');
//     }
//   };

//   const handleAction = (type) => {
//     if (!validateFields()) return;
  
//     if (type === 'delete') {
//       if (!pdfMetadata || !pdfMetadata.fileId) {
//         alert('Error: No PDF found to delete.');
//         return;
//       }
//     }
  
//     if (type === 'upload' && !pdf) {
//       alert('Error: Please select a PDF file to upload.');
//       return;
//     }
  
//     setActionType(type);
//     setSelectedDetails({
//       faculty: pdfMetadata?.faculty || faculty,
//       department: pdfMetadata?.department || department,
//       level: pdfMetadata?.level || level,
//       semester: pdfMetadata?.semester || semester,
//       course: pdfMetadata?.course || course,
//     });
//     setShowModal(true);
//   };

//   const handleConfirmAction = async () => {
//     setShowModal(false);
  
//     if (actionType === 'delete') {
//       await handleDelete();
//     } else if (actionType === 'upload') {
//       await handleUpload();
//     } 
//   };

//   const handleCancelAction = () => {
//     setShowModal(false);
//   };

//   const logout = async () => {
//     setLoading(true); 

//     try {
//       // Logout from all clients
//       const sessions = await account.listSessions(); 
//       for (const session of sessions.sessions) {
//         await account.deleteSession(session.$id);
//       }
  
//       console.log('Successfully logged out');
      
//       // Navigate to login page
//       navigate('/');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Debug: Log when pdfMetadata changes
//   useEffect(() => {
//     console.log('pdfMetadata updated:', pdfMetadata);
//   }, [pdfMetadata]);

//   // Loading state while checking authentication
//   if (authLoading) {
//     return (
//       <div className="upload-container">
//         <div className="loading-container">
//           <div className="loading-spinner-large"></div>
//           <span className="loading-text">Checking authentication...</span>
//         </div>
//       </div>
//     );
//   }

//   // Show not authenticated message (though they should be redirected)
//   if (!isAuthenticated) {
//     return (
//       <div className="upload-container">
//         <div className="error-message">
//           <h2>Access Denied</h2>
//           <p>Please log in to access this page.</p>
//           <button onClick={() => navigate('/login')} className="login-button">
//             Go to Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="upload-container">
//       {/* User info header */}
//       <div className="user-info">
//         <p>Welcome, {user?.name || user?.email}</p>
//       </div>
      
//       <h1 className="upload-header">LECTURERS PDF DASHBOARD</h1>
      
//       <div className="icon-container">
//         {loading ? (
//           <div className="loading-spinner-small"></div>
//         ) : (
//           <button className="logout-button" onClick={logout}>
//             Log-out
//           </button>
//         )}
//       </div>

//       {/* Faculty Picker */}
//       <div className="form-group">
//         <label className="form-label">Faculty</label>
//         <div className="picker-container">
//           <select 
//             value={faculty} 
//             onChange={(e) => setFaculty(e.target.value)}
//             className="form-picker"
//           >
//             <option value="">Select Faculty</option>
//             {faculties.map((fac) => (
//               <option key={fac} value={fac}>{fac}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.faculty && <span className="error-text">{errors.faculty}</span>}
//         </div>
//       </div>

//       {/* Department Picker */}
//       <div className="form-group">
//         <label className="form-label">Department</label>
//         <div className="picker-container">
//           <select
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             className="form-picker"
//             disabled={!faculty}
//           >
//             <option value="">Select Department</option>
//             {(departments[faculty] || []).map((dept) => (
//               <option key={dept} value={dept}>{dept}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.department && <span className="error-text">{errors.department}</span>}
//         </div>
//       </div>

//       {/* Level Picker */}
//       <div className="form-group">
//         <label className="form-label">Level</label>
//         <div className="picker-container">
//           <select 
//             value={level} 
//             onChange={(e) => setLevel(e.target.value)} 
//             className="form-picker"
//             disabled={!department}
//           >
//             <option value="">Select Level</option>
//             {levels.map((lvl) => (
//               <option key={lvl} value={lvl}>{lvl}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.level && <span className="error-text">{errors.level}</span>}
//         </div>
//       </div>

//       {/* Semester Picker */}
//       <div className="form-group">
//         <label className="form-label">Semester</label>
//         <div className="picker-container">
//           <select 
//             value={semester} 
//             onChange={(e) => setSemester(e.target.value)} 
//             className="form-picker"
//             disabled={!level}
//           >
//             <option value="">Select Semester</option>
//             {semesters.map((sem) => (
//               <option key={sem} value={sem}>{sem}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.semester && <span className="error-text">{errors.semester}</span>}
//         </div>
//       </div>

//       {/* Course Picker */}
//       <div className="form-group">
//         <label className="form-label">Course</label>
//         <div className="picker-container">
//           <select 
//             value={course} 
//             onChange={(e) => setCourse(e.target.value)} 
//             className="form-picker"
//             disabled={!semester}
//           >
//             <option value="">Select Course</option>
//             {(courses[faculty]?.[department]?.[level]?.[semester] || []).map((crs) => (
//               <option key={crs} value={crs}>{crs}</option>
//             ))}
//           </select>
//           <span className="picker-icon">▼</span>
//           {errors.course && <span className="error-text">{errors.course}</span>}
//         </div>
//       </div>

//       {/* File Selection */}
//       <button onClick={() => document.getElementById('file-input').click()} className="button1">
//         <span className="button-text">Select PDF File</span>
//       </button>
//       <input
//         id="file-input"
//         type="file"
//         accept=".pdf"
//         onChange={handleFileSelection}
//         style={{ display: 'none' }}
//       />
//       {pdf && <div className="file-selected">Selected: {pdf.name}</div>}

//       {/* Upload Button */}
//       <button
//         onClick={() => handleAction('upload')}
//         className={`button ${!pdf ? 'disabled-button' : ''}`}
//         disabled={!pdf || !isValid}
//       >
//         <span className="button-text">{actionButtonText}</span>
//       </button>

//       {/* DELETE BUTTON - Now properly visible when pdfMetadata exists */}
//       {pdfMetadata && pdfMetadata.fileId && (
//         <button 
//           onClick={() => handleAction('delete')} 
//           style={styles.deleteButton}
//         >
//           <span style={styles.buttonText}>Delete PDF</span>
//         </button>
//       )}

//       {isLoading && (
//         <div className="loading-container">
//           <div className="loading-spinner-large"></div>
//           <span className="loading-text">Processing...</span>
//         </div>
//       )}

//       {/* Modal for confirmation */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3 className="modal-text">
//               Are you sure you want to {actionType} this PDF?
//             </h3>
//             <div className="modal-details">
//               <p className="modal-text">Faculty: {selectedDetails.faculty}</p>
//               <p className="modal-text">Department: {selectedDetails.department}</p>
//               <p className="modal-text">Level: {selectedDetails.level}</p>
//               <p className="modal-text">Semester: {selectedDetails.semester}</p>
//               <p className="modal-text">Course: {selectedDetails.course}</p>
//             </div>
//             <div className="modal-button-container">
//               <button onClick={handleConfirmAction} className="modal-button">
//                 <span className="modal-button-text">Yes</span>
//               </button>
//               <button onClick={handleCancelAction} className="modal-button1">
//                 <span className="modal-button-text1">No</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;