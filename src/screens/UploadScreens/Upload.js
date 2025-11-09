import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../UploadScreens/styles/Upload.css';
import { 
  databases, account, client, storage, 
  databases1, account1, client1, storage1,
  databases2, account2, client2, storage2,
  databases3, account3, client3, storage3,
  databaseId, collectionId, Query, ID, bucketId 
} from './config';

const Upload = () => {
  const navigate = useNavigate();

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
        '300': { '1st': ['GST312', 'ENT312', 'CSC301', 'CSC308', 'CSC309', 'CSC322', 'ICT305', 'CSC323', 'CSC371', 'CYB201', 'DTS304'], '2nd': ['CSC399'] },
        '400': { '1st': ['CSC400', 'CSC401', 'CSC405', 'CCS409', 'CSC411', 'CSC415', 'CSC435', 'CSC441', 'CSC473', 'CSC471', 'CSC451', 'CSC421','CSC431',], '2nd': ['CSC404', 'CSC412', 'CSC424', 'CSC454', 'CSC464', 'CSC474', 'CYB407', 'CSC472', 'CSC428', 'CSC426'] },
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

  // Get the appropriate client based on level
  const getClientByLevel = (level) => {
    switch (level) {
      case '100':
        return { databases: databases, storage: storage, client: client };
      case '200':
        return { databases: databases1, storage: storage1, client: client1 };
      case '300':
        return { databases: databases2, storage: storage2, client: client2 };
      case '400':
        return { databases: databases3, storage: storage3, client: client3 };
      default:
        return { databases: databases, storage: storage, client: client };
    }
  };

  // Get current client based on selected level
  const getCurrentClient = () => {
    return getClientByLevel(level);
  };

  useEffect(() => {
    checkIfFileExists();

    // Real-time updates for current level client
    const currentClient = getCurrentClient().client;
    const unsubscribe = currentClient.subscribe(
      [`databases.${databaseId}.collections.${collectionId}.documents`],
      (response) => {
        console.log('Realtime Event:', response);
        if (
          response.events.includes('databases.*.collections.*.documents.*.create') ||
          response.events.includes('databases.*.collections.*.documents.*.update') ||
          response.events.includes('databases.*.collections.*.documents.*.delete')
        ) 
        {
          checkIfFileExists();
        }
      }
    );

    return () => unsubscribe();
  }, [faculty, department, level, semester, course]);

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
      setActionButtonText(file && pdfMetadata ? 'Update PDF' : 'Upload PDF');
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, pdf: 'Failed to select a file.' }));
    }
  };

  const handleUpload = async () => {
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
      const uploadResponse = await currentStorage.createFile(bucketId, fileId, pdf);
      console.log('File uploaded:', uploadResponse);

      // Get the public URL using the level-specific storage client
      const publicURL = currentStorage.getFilePreview(bucketId, uploadResponse.$id);
      console.log('Public URL:', publicURL.href);

      // Update or create metadata using the level-specific databases client
      if (pdfMetadata) {
        await currentDatabases.updateDocument(databaseId, collectionId, pdfMetadata.$id, {
          faculty,
          department,
          level,
          semester,
          course,
          pdf_url: publicURL.href,
          fileId
        });
        alert('Success! PDF Updated successfully!');
      } else {
        await currentDatabases.createDocument(databaseId, collectionId, ID.unique(), {
          faculty,
          department,
          level,
          semester,
          course,
          pdf_url: publicURL.href,
          fileId
        });
        alert('Success! PDF Uploaded successfully!');
      }

      // Reset state
      setPdfMetadata({});
      setPdf(null);
      setActionButtonText('Update PDF');

    } catch (error) {
      console.error('Upload error:', error.message);
      setErrors((prevErrors) => ({
        ...prevErrors,
        upload: error.message || 'Failed to upload PDF.',
      }));
      alert('Error: ' + (error.message || 'Failed to upload PDF.'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
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
  };

  const checkIfFileExists = async () => {
    if (!faculty || !department || !level || !semester || !course) return;

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

      if (response.documents.length > 0) {
        setPdfMetadata(response.documents[0]);
        setActionButtonText('Update PDF');
      } else {
        setPdfMetadata(null);
        setActionButtonText('Upload PDF');
      }
    } catch (err) {
      console.error('Error during metadata check:', err.message);
    }
  };

  const handleAction = (type) => {
    if (!validateFields()) return;
  
    if (type === 'delete' && (!pdfMetadata || !pdfMetadata.fileId)) {
      alert('Error: No PDF metadata available for deletion.');
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
      try {
        setIsLoading(true);
        const fileId = pdfMetadata.fileId;
        console.log('Deleting File:', fileId);

        // Get the appropriate client based on level
        const { databases: currentDatabases, storage: currentStorage } = getCurrentClient();
  
        await currentStorage.deleteFile(bucketId, fileId);
        await currentDatabases.deleteDocument(databaseId, collectionId, pdfMetadata.$id);
  
        alert('Success! PDF deleted successfully!');
        resetForm();
      } catch (error) {
        alert('Error: ' + (error.message || 'Failed to delete PDF.'));
      } finally {
        setIsLoading(false);
      }
    } else {
      actionType === 'upload' && handleUpload();
    } 
  };

  const handleCancelAction = () => {
    setShowModal(false);
  };

  const logout = async () => {
    setLoading(true); 

    try {
      // Logout from all clients
      const sessions = await account.listSessions(); 
      for (const session of sessions.sessions) {
        await account.deleteSession(session.$id);
      }
  
      console.log('Successfully logged out');
      
      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1 className="upload-header">LECTURERS PDF DASHBOARD</h1>
      
      <div className="logout-container">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <button className="logout-button" onClick={logout}>
            Log-out
          </button>
        )}
      </div>

      {/* Faculty Select */}
      <label className="form-label">Faculty</label>
      <div className="select-container">
        <select 
          value={faculty} 
          onChange={(e) => setFaculty(e.target.value)}
          className="form-select"
        >
          <option value="">Select Faculty</option>
          {faculties.map((fac) => (
            <option key={fac} value={fac}>{fac}</option>
          ))}
        </select>
        {errors.faculty && <div className="error-text">{errors.faculty}</div>}
      </div>

      {/* Department Select */}
      <label className="form-label">Department</label>
      <div className="select-container">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="form-select"
          disabled={!faculty}
        >
          <option value="">Select Department</option>
          {(departments[faculty] || []).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
        {errors.department && <div className="error-text">{errors.department}</div>}
      </div>

      {/* Level Select */}
      <label className="form-label">Level</label>
      <div className="select-container">
        <select 
          value={level} 
          onChange={(e) => setLevel(e.target.value)} 
          className="form-select"
          disabled={!department}
        >
          <option value="">Select Level</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
        {errors.level && <div className="error-text">{errors.level}</div>}
      </div>

      {/* Semester Select */}
      <label className="form-label">Semester</label>
      <div className="select-container">
        <select 
          value={semester} 
          onChange={(e) => setSemester(e.target.value)} 
          className="form-select"
          disabled={!level}
        >
          <option value="">Select Semester</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
        {errors.semester && <div className="error-text">{errors.semester}</div>}
      </div>

      {/* Course Select */}
      <label className="form-label">Course</label>
      <div className="select-container">
        <select 
          value={course} 
          onChange={(e) => setCourse(e.target.value)} 
          className="form-select"
          disabled={!semester}
        >
          <option value="">Select Course</option>
          {(courses[faculty]?.[department]?.[level]?.[semester] || []).map((crs) => (
            <option key={crs} value={crs}>{crs}</option>
          ))}
        </select>
        {errors.course && <div className="error-text">{errors.course}</div>}
      </div>

      {/* File Selection */}
      <div className="file-input-container">
        <label className="file-input-label">
          Select PDF File
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelection}
            className="file-input"
          />
        </label>
        {pdf && <div className="file-name">{pdf.name}</div>}
      </div>

      {/* Upload Button */}
      <button
        onClick={() => handleAction('upload')}
        className={`upload-button ${!pdf ? 'disabled-button' : ''}`}
        disabled={!pdf || !isValid}
      >
        {actionButtonText}
      </button>

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner-large">Processing...</div>
        </div>
      )}

      {/* Delete Button */}
      {pdfMetadata && (
        <button 
          onClick={() => handleAction('delete')} 
          className="delete-button"
        >
          Delete PDF
        </button>
      )}

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              Are you sure you want to {actionType} this PDF?
            </h3>
            <div className="modal-details">
              <p>Faculty: {selectedDetails.faculty}</p>
              <p>Department: {selectedDetails.department}</p>
              <p>Level: {selectedDetails.level}</p>
              <p>Semester: {selectedDetails.semester}</p>
              <p>Course: {selectedDetails.course}</p>
            </div>
            <div className="modal-buttons">
              <button onClick={handleConfirmAction} className="modal-button confirm">
                Yes
              </button>
              <button onClick={handleCancelAction} className="modal-button cancel">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;