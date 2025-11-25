import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { collectionId, databaseId, databases, Query, bucketId, projectId } from '../../../../../screens/UploadScreens/config';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const CSC111 = ({ title = "CSC111 - Computer Hardware"}) => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);
   const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setLoading(true);
        
        const response = await databases.listDocuments(
          databaseId, 
          collectionId,
          [
            Query.equal('faculty', 'Physical Sciences'),
            Query.equal('department', 'Computer Science'),
            Query.equal('level', '100'),
            Query.equal('semester', '1st'),
            Query.equal('course', 'CSC111'),
          ]
        );

        if (response.documents.length > 0) {
          const fileId = response.documents[0].fileId;
          const downloadUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}`;
          setPdfUrl(downloadUrl);
        } else {
          setError('No PDF found for CSC111 course');
        }
      } catch (err) {
        console.error('Error fetching PDF:', err);
        setError(`Failed to load PDF: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPdf()
    
        // Set container height on mount
        const updateHeight = () => {
          setContainerHeight(window.innerHeight - 200); // Adjust based on your header height
        };
    
        updateHeight();
        window.addEventListener('resize', updateHeight);
    
        return () => window.removeEventListener('resize', updateHeight);
      }, []);
    
      const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      };
    
      const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setError('Failed to load PDF document');
        setLoading(false);
      };
    
      // Internal CSS styles
      const styles = {
        cos101Container: {
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '100vh',
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
          minHeight: 0,
          overflow: 'hidden',
        },
        pdfDocumentWrapper: {
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        pdfDocument: {
          width: '100%',
          height: '100%',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        },
        pdfContent: {
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        pdfPage: {
          marginBottom: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
          width: '100%',
        },
        pageCounter: {
          position: 'sticky',
          top: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          zIndex: 100,
          marginBottom: '10px',
        },
        noDownloadNotice: {
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '4px',
          marginBottom: '20px',
          color: '#856404',
          fontSize: '14px',
          width: '100%',
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
    
      // Add CSS for spinner animation
      const spinnerStyle = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
    
      if (loading) {
        return (
          <div style={styles.cos101Container}>
            <style>{spinnerStyle}</style>
            <div style={styles.loaderContainer}>
              <div style={styles.loadingSpinner}></div>
              <p>Loading PDF...</p>
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
          <style>{spinnerStyle}</style>
          <div style={styles.pdfHeader}>
            {/* ✅ FIXED: Added the header content back */}
            <div style={styles.headerLeft}>
              <button 
                onClick={() => navigate(-1)} 
                style={styles.backButton}
              >
                <FaArrowLeft style={styles.backIcon} />
              </button>
              <h1 style={styles.headerTitle}>{title}</h1>
            </div>
            
            {/* ✅ FIXED: Added the verified badge back */}
            <div style={styles.verifiedBadge}>
              CM7 <FaCheckCircle style={styles.verifiedIcon} />
            </div>
          </div>
          
          <div style={styles.pdfViewerContainer}>
            {/* ✅ FIXED: Added the download notice back */}
           
            {pdfUrl && (
              <div style={{
                width: '100%',
                height: '80vh',
                overflow: 'auto',
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
              }}>
                <div style={styles.pageCounter}>
                  {numPages ? `Total Pages: ${numPages}` : 'Loading pages...'}
                </div>
                
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div style={styles.loaderContainer}>
                      <div style={styles.loadingSpinner}></div>
                      <p>Loading PDF document...</p>
                    </div>
                  }
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <div key={`page_${index + 1}`} style={{ marginBottom: '20px' }}>
                      <Page
                        pageNumber={index + 1}
                        width={Math.min(800, window.innerWidth - 100)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  ))}
                </Document>
              </div>
            )}
          </div>
        </div>
      );
    };
    
export default CSC111;