import React, { useState, useEffect } from 'react';
import '../screens/UploadScreens/styles/PdfViewer.css';

const PdfViewer = ({ courseCode }) => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPdf = async () => {
            setLoading(true);
            try {
                // For web version, you can:
                // 1. Use an iframe to display PDF from a URL
                // 2. Use PDF.js library for more control
                // 3. Use browser's built-in PDF viewer
                
                // Mock implementation - replace with actual PDF URL
                const mockPdfUrl = `/pdfs/${courseCode}.pdf`;
                setPdfUrl(mockPdfUrl);
                
            } catch (err) {
                console.error('Error fetching PDF:', err);
                setError('Failed to load PDF');
            } finally {
                setLoading(false);
            }
        };

        fetchPdf();
    }, [courseCode]);

    if (loading) {
        return (
            <div className="pdf-loader">
                <div className="spinner"></div>
                <p>Loading PDF...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pdf-error">
                <p>{error}</p>
                <p>No PDF available for {courseCode}.</p>
            </div>
        );
    }

    return (
        <div className="pdf-container">
            <div className="pdf-header">
                <h2>{courseCode} - Course Material</h2>
                <div className="verified-badge">
                    <span className="developer-tag">CM7</span>
                    <span className="verified-icon">✓</span>
                </div>
            </div>
            
            {pdfUrl ? (
                <div className="pdf-viewer">
                    <iframe 
                        src={pdfUrl} 
                        title={`${courseCode} PDF`}
                        className="pdf-frame"
                    >
                        <p>Your browser does not support PDF viewing. 
                           <a href={pdfUrl} download>Download the PDF</a> instead.
                        </p>
                    </iframe>
                    <div className="pdf-actions">
                        <a href={pdfUrl} download className="download-button">
                            Download PDF
                        </a>
                    </div>
                </div>
            ) : (
                <div className="no-pdf">
                    <p>No PDF available for this course.</p>
                </div>
            )}
        </div>
    );
};

export default PdfViewer;