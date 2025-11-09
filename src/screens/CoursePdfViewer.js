import React, { useState, useEffect } from 'react';
import '../screens/UploadScreens/styles/CoursePdfViewer.css';
import { databases, databaseId, collectionId, Query, bucketId, projectId } from '../UploadScreens/config';

const CoursePdfViewer = ({ courseCode }) => {
  const faculty = 'Physical Sciences';
  const department = 'Computer Science';
  const level = '100';
  const semester = '1st';
  const course = courseCode;

  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId, [
          Query.equal('faculty', faculty),
          Query.equal('department', department),
          Query.equal('level', level),
          Query.equal('semester', semester),
          Query.equal('course', course),
        ]);

        console.log('Appwrite Response:', response);

        if (response.documents.length > 0) {
          const fileId = response.documents[0].fileId;
          const remotePdfUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}`;
          console.log('Download URL:', remotePdfUrl);
          setPdfUrl(remotePdfUrl);
        } else {
          setError('No PDF available for this course.');
        }
      } catch (err) {
        console.error('Error:', err);
        setError(err.message || 'Failed to fetch PDF.');
      } finally {
        setLoading(false);
      }
    };

    fetchPdfUrl();
  }, [faculty, department, level, semester, course]);

  if (loading) {
    return (
      <div className="pdf-loader">
        <div className="loading-spinner">Loading PDF...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pdf-error">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-header">
        <h2>{courseCode} - Course Material</h2>
        <div className="verified-badge">
          CM7 <span className="verified-icon">✓</span>
        </div>
      </div>
      
      {pdfUrl ? (
        <div className="pdf-embed-container">
          <iframe
            src={pdfUrl}
            title={`${courseCode} PDF`}
            className="pdf-iframe"
          />
          <div className="pdf-actions">
            <a href={pdfUrl} download className="download-button">
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <div className="no-pdf-message">
          No PDF available for this course.
        </div>
      )}
    </div>
  );
};

export default CoursePdfViewer;