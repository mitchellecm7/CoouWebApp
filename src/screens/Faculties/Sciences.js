import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../Faculties/Images/logo.png';
import facaultiesData from '../Faculties/facultiesData';



const Sciences = () => {
    const navigate = useNavigate();

    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#fff',
            position: 'relative'
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25px',
            padding: '0 10px'
        },
        logo: {
            width: '68px',
            height: '68px',
            objectFit: 'cover',
            borderRadius: '34px',
            backgroundColor: 'white',
            border: '3px solid green'
        },
        headerText: {
            fontSize: '20px',
            fontWeight: '800',
            color: 'black',
            flex: '1',
            flexWrap: 'wrap',
            marginLeft: '10px',
            whiteSpace: 'pre-wrap'
        },
        scrollView: {
            margin: '70px 0 0 5px',
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            padding: '10px 0',
            minHeight: '150px',
            backgroundColor: '#fff' // Ensure white background for content area
        },
        departmentButton: {
            height: '120px',
            width: '140px',
            backgroundColor: 'yellow',
            margin: '10px 0 10px 5px',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            cursor: 'pointer',
            flexShrink: 0
        },
        departmentText: {
            fontSize: '14px',
            color: 'black',
            fontWeight: '800',
            textAlign: 'center',
            padding: '10px',
            width: '100%'
        },
        // Main content wrapper that contains everything above the background
        contentWrapper: {
            position: 'relative',
            zIndex: 2,
            backgroundColor: '#fff', // White background for the entire content area
            minHeight: '400px' // Enough height to cover departments
        },
        // Background that only appears below the content
        backgroundSection: {
            position: 'relative',
            height: 'calc(100vh - 400px)', // Remaining screen space
            minHeight: '300px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundImage: `url(${logoImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1
        }
    };

    return (
        <div style={styles.container}>
            {/* Status Bar */}
            <div style={{
                backgroundColor: '#000',
                height: '25px',
                width: '100%'
            }}></div>
            
            {/* Content Area - Everything above the background */}
            <div style={styles.contentWrapper}>
                {/* Header */}
                <div style={styles.headerContainer}>
                    <img 
                        src={logoImage} 
                        style={styles.logo}
                        alt="University Logo"
                    />
                    <div style={styles.headerText}>
                        CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY{'\n'}Study App
                    </div>
                </div>
                
                {/* Scrollable Content */}
                <div style={styles.scrollView}>
                    {facaultiesData.filter(item => item.category === 'Sciences').map((item) => (
                        <div key={item.id}>
                            <div 
                                onClick={() => {
                                    switch (item.id) {
                                        case 1:
                                            navigate('/departments1a');
                                            break;
                                        case 3:
                                            navigate('/departments1c');
                                            break;
                                        case 4:
                                            navigate('/departments1d');
                                            break;
                                        case 5:
                                            navigate('/departments1e');
                                            break;
                                        case 6:
                                            navigate('/departments1f');
                                            break;
                                        case 8:
                                            navigate('/departments1h');
                                            break;
                                        case 9:
                                            navigate('/departments1i');
                                            break;
                                        case 10:
                                            navigate('/departments1j');
                                            break;
                                        case 11:
                                            navigate('/departments1k');
                                            break;
                                        case 12:
                                            navigate('/departments1l');
                                            break;
                                        default:
                                            navigate('/departments1m');
                                            break;
                                    }
                                }} 
                                style={styles.departmentButton}
                            >
                                <div style={styles.departmentText}>{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background Section - Only this part has the background image */}
            <div style={styles.backgroundSection}></div>
        </div>
    );
};

export default Sciences;