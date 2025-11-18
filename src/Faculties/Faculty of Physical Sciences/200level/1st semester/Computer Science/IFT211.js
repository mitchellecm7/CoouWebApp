import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { collectionId, databaseId, databases1, Query, bucketId, projectId1 } from '../../../../../screens/UploadScreens/config';

const IFT211 = ({ title = "IFT211 - Introduction to Computer Science"}) => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setLoading(true);
        
        const response = await databases1.listDocuments(
          databaseId, 
          collectionId,
          [
            Query.equal('faculty', 'Physical Sciences'),
            Query.equal('department', 'Computer Science'),
            Query.equal('level', '200'),
            Query.equal('semester', '1st'),
            Query.equal('course', 'IFT211'),
          ]
        );

        if (response.documents.length > 0) {
          const fileId = response.documents[0].fileId;
          const downloadUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId1}`;
          setPdfUrl(downloadUrl);
        } else {
          setError('No PDF found for IFT211 course');
        }
      } catch (err) {
        console.error('Error fetching PDF:', err);
        setError(`Failed to load PDF: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPdf();
  }, []);

  // Use Google Docs Viewer to display PDF
  const getGoogleViewerUrl = () => {
    if (!pdfUrl) return '';
    return `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  };

  // Internal CSS styles
  const styles = {
    cos101Container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    pdfHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '15px',
      borderBottom: '1px solid #e0e0e0',
      flexShrink: 0,
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#333',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px',
      padding: '8px 0',
    },
    backIcon: {
      fontSize: '18px',
    },
    headerTitle: {
      margin: 0,
      fontSize: '20px',
      color: '#333',
      fontWeight: 'bold',
    },
    verifiedBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '16px',
      fontWeight: '900',
      color: '#1d1615',
    },
    verifiedIcon: {
      color: '#0000ff',
      fontSize: '16px',
    },
    pdfViewerContainer: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0, // Important for flexbox scrolling
    },
    iframeContainer: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
    },
    pdfFrame: {
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      flex: 1,
      minHeight: 0,
    },
    loaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
    },
    loadingSpinner: {
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #007bff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 2s linear infinite',
    },
    errorContainer: {
      textAlign: 'center',
      padding: '40px',
    },
    errorText: {
      color: '#dc3545',
      fontSize: '18px',
      marginBottom: '20px',
    },
  };

  if (loading) {
    return (
      <div style={styles.cos101Container}>
        <div style={styles.loaderContainer}>
          <div style={styles.loadingSpinner}></div>
          <p>Loading IFT211 PDF...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.cos101Container}>
        <div style={styles.errorContainer}>
          <h2>Error Loading PDF</h2>
          <p style={styles.errorText}>{error}</p>
          <button 
            onClick={() => navigate(-1)} 
            style={styles.backButton}
          >
            <FaArrowLeft style={styles.backIcon} /> Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.cos101Container}>
      <div style={styles.pdfHeader}>
        <div style={styles.headerLeft}>
          <button 
            onClick={() => navigate(-1)} 
            style={styles.backButton}
          >
            <FaArrowLeft style={styles.backIcon} />
          </button>
          <h1 style={styles.headerTitle}>{title}</h1>
        </div>
        <div style={styles.verifiedBadge}>
          CM7 <FaCheckCircle style={styles.verifiedIcon} />
        </div>
      </div>
      
      <div style={styles.pdfViewerContainer}>
        {pdfUrl && (
          <div style={styles.iframeContainer}>
            <iframe
              src={getGoogleViewerUrl()}
              title="IFT211 PDF Viewer"
              style={styles.pdfFrame}
              loading="lazy"
            >
              <p>Your browser does not support iframes. 
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Click here to view the PDF
                </a>
              </p>
            </iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default IFT211;