import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cis1002.css';

// Mock data for web version - replace with actual API calls
const mockPdfMetadata = [
  { course: 'COS102' },
  { course: 'COS192' },
  { course: 'CSC104' },
  { course: 'CSC128' },
  { course: 'GST112' },
  { course: 'MTH102' },
  { course: 'PHY102' },
  { course: 'PHY108' }
];

const Cis1002 = () => {
    const navigate = useNavigate();
    const [pdfMetadata, setPdfMetadata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchPdfMetadata = async () => {
            setLoading(true);
            try {
                // For web version, use mock data or implement actual API call
                setTimeout(() => {
                    setPdfMetadata(mockPdfMetadata);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching metadata:', error);
                setLoading(false);
            }
        };

        fetchPdfMetadata();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="safe-area">
            <div className="container">
                {pdfMetadata.length > 0 ? (
                    pdfMetadata.map((pdf, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(`/${pdf.course.toLowerCase()}`)}
                            className="course-button"
                        >
                            <span className="course-text">{pdf.course}</span>
                        </button>
                    ))
                ) : (
                    <p className="no-courses-text">No Courses Uploaded yet</p>
                )}
            </div>
        </div>
    );
};

export default Cis1002;