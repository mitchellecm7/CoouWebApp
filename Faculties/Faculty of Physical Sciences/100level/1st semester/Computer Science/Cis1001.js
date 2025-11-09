import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cis1001.css';
import { collectionId, databaseId, databases, Query } from '../UploadScreens/config';

const Cis1001 = () => {
  const navigate = useNavigate();
  const [pdfMetadata, setPdfMetadata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPdfMetadata();
  }, []);

  const fetchPdfMetadata = async () => {
    setLoading(true);
    try {
      const response = await databases.listDocuments(
        databaseId, 
        collectionId,
        [
          Query.equal('faculty', 'Physical Sciences'),
          Query.equal('department', 'Computer Science'),
          Query.equal('level', '100'),
          Query.equal('semester', '1st'),
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
      <div className="loader-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="cis-container">
      <h1 className="cis-header">100 Level - 1st Semester Courses</h1>
      <div className="courses-grid">
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
              className="course-button"
            >
              {pdf.course}
            </button>
          ))
        ) : (
          <div className="no-courses">No Courses Uploaded yet</div>
        )}
      </div>
    </div>
  );
};

export default Cis1001;
