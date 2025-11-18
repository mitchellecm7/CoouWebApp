import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { collectionId, databaseId, databases1, Query } from '../../../../../screens/UploadScreens/config';

const Cis2002 = () => {
  const navigate = useNavigate();
  const [pdfMetadata, setPdfMetadata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPdfMetadata();
  }, []);

  const fetchPdfMetadata = async () => {
    setLoading(true);
    try {
      const response = await databases1.listDocuments(
        databaseId, 
        collectionId,
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
    } finally {
      setLoading(false);
    }
  };

  // Internal CSS styles
  const styles = {
    cisContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      minHeight: '100vh',
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '30px',
      position: 'relative',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#333',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      position: 'absolute',
      left: '0',
    },
    backIcon: {
      fontSize: '20px',
    },
    cisHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1d1615',
      margin: 0,
    },
    coursesGrid: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    courseButton: {
      width: '200px',
      height: '60px',
      borderRadius: '10px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    },
    courseButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'darkgreen',
    },
    noCourses: {
      fontSize: '16px',
      marginTop: '15px',
      fontWeight: '400',
      textAlign: 'center',
      color: '#1d1615',
    },
    loaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
    },
    loadingSpinner: {
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #007bff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 2s linear infinite',
      marginBottom: '15px',
    },
    loadingText: {
      fontSize: '16px',
      color: '#333',
    },
  };

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>Loading courses...</p>
      </div>
    );
  }

  return (
    <div style={styles.cisContainer}>
      <div style={styles.headerContainer}>
        <button 
          onClick={() => navigate(-1)} 
          style={styles.backButton}
        >
          <FaArrowLeft style={styles.backIcon} />
        </button>
        <h1 style={styles.cisHeader}>200 Level <br/> 2nd Semester Courses</h1>
      </div>
      <div style={styles.coursesGrid}>
        {pdfMetadata.length > 0 ? (
          pdfMetadata.map((pdf, index) => (
            <button
              key={index}
              onClick={() => {
                if (pdf.course) {
                  console.log(`Navigating to: ${pdf.course}`);
                  navigate(`/${pdf.course}`);
                } else {
                  alert('Screen for this course is not available');
                }
              }}
              style={styles.courseButton}
              onMouseOver={(e) => {
                Object.assign(e.target.style, styles.courseButtonHover);
              }}
              onMouseOut={(e) => {
                Object.assign(e.target.style, styles.courseButton);
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                e.target.style.backgroundColor = 'green';
              }}
            >
              {pdf.course}
            </button>
          ))
        ) : (
          <div style={styles.noCourses}>No Courses Uploaded yet</div>
        )}
      </div>
    </div>
  );
};

export default Cis2002;