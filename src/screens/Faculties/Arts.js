// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import facaultiesData from '../Faculties/facultiesData';

// const Arts = () => {
//     const navigate = useNavigate();

//     // Convert React Native styles to React JS inline styles
//     const styles = {
//         container: {
//             minHeight: '100vh',
//             backgroundColor: '#fff',
//             position: 'relative',
//         },
//         headerContainer: {
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: '25px',
//             padding: '0 10px',
//             backgroundColor: '#000',
//             paddingTop: '25px', // For status bar area
//         },
//         logo: {
//             width: '68px',
//             height: '68px',
//             objectFit: 'cover',
//             borderRadius: '34px',
//             backgroundColor: 'white',
//             border: '3px solid green',
//         },
//         headerText: {
//             fontSize: '16px',
//             fontWeight: '800',
//             color: 'white',
//             flex: '1',
//             flexWrap: 'wrap',
//             marginLeft: '10px',
//             lineHeight: '1.3',
//         },
//         scrollView: {
//             display: 'flex',
//             flexDirection: 'row',
//             overflowX: 'auto',
//             margin: '0',
//             marginLeft: '5px',
//             WebkitOverflowScrolling: 'touch',
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//         },
//         scrollViewInner: {
//             display: 'flex',
//             flexDirection: 'row',
//             padding: '10px 0',
//         },
//         contentView: {
//             position: 'relative',
//             top: '-150px',
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         departmentButton: {
//             height: '120px',
//             width: '140px',
//             backgroundColor: 'yellow',
//             margin: '10px 0 10px 35px',
//             borderRadius: '30px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             border: '1px solid black',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease',
//         },
//         departmentButtonHover: {
//             transform: 'scale(1.05)',
//             backgroundColor: '#ffeb3b',
//         },
//         departmentText: {
//             fontSize: '14px',
//             color: 'black',
//             fontWeight: '800',
//             textAlign: 'center',
//             padding: '10px',
//             wordWrap: 'break-word',
//         },
//         backgroundContainer: {
//             flex: '1',
//             backgroundColor: 'rgba(0, 0, 0, 0.3)',
//             marginTop: '-300px',
//             height: '100vh',
//             position: 'relative',
//         },
//         backgroundImage: {
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             opacity: '0.1',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//         },
//         statusBar: {
//             backgroundColor: '#000',
//             color: '#fff',
//             height: '0px', // Simulated status bar
//         }
//     };

//     // Hide scrollbar for web
//     const scrollViewStyle = {
//         ...styles.scrollView,
//         '&::-webkit-scrollbar': {
//             display: 'none'
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* Simulated Status Bar */}
//             <div style={styles.statusBar}></div>
            
//             <div style={styles.headerContainer}>
//                 <img 
//                     src={require('../Faculties/Images/logo.png')} 
//                     alt="Logo" 
//                     style={styles.logo} 
//                 />
//                 <div style={styles.headerText}>
//                     CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY{'\n'}Study App
//                 </div>
//             </div>
            
//             <div style={scrollViewStyle}>
//                 <div style={styles.scrollViewInner}>
//                     {facaultiesData.filter(item => item.category === 'Arts').map((item) => (
//                         <div key={item.id} style={styles.contentView}>
//                             <div 
//                                 onClick={() => {
//                                     switch (item.id) {
//                                         case 2:
//                                             navigate('/departments1b');
//                                             break;
//                                         case 7:
//                                             navigate('/departments1g');
//                                             break;
//                                         default:
//                                             console.log('No navigation defined for item:', item.id);
//                                             break;
//                                     }
//                                 }} 
//                                 style={styles.departmentButton}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.transform = 'scale(1.05)';
//                                     e.target.style.backgroundColor = '#ffeb3b';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.transform = 'scale(1)';
//                                     e.target.style.backgroundColor = 'yellow';
//                                 }}
//                             >
//                                 <div style={styles.departmentText}>{item.name}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//             <div style={styles.backgroundContainer}>
//                 <img 
//                     src={require('../Faculties/Images/logo.png')} 
//                     alt="Background" 
//                     style={styles.backgroundImage}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Arts;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../Faculties/Images/logo.png';
import facaultiesData from '../Faculties/facultiesData';


const Arts = () => {
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
            margin: '0 0 0 5px',
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            padding: '150px 0 20px 0',
            minHeight: '150px',
            backgroundColor: '#fff'
        },
        contentView: {
            position: 'relative',
            top: '-150px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        departmentButton: {
            height: '120px',
            width: '140px',
            backgroundColor: 'yellow',
            margin: '10px 0 10px 35px',
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
            backgroundColor: '#fff',
            minHeight: '500px' // Enough height to cover departments with the -150px offset
        },
        // Background that only appears below the content
        backgroundSection: {
            position: 'relative',
            height: 'calc(100vh - 500px)',
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
            {/* Status Bar Simulation */}
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
                    {facaultiesData.filter(item => item.category === 'Arts').map((item) => (
                        <div key={item.id} style={styles.contentView}>
                            <div 
                                onClick={() => {
                                    switch (item.id) {
                                        case 2:
                                            navigate('/departments1b');
                                            break;
                                        case 7:
                                            navigate('/departments1g');
                                            break;
                                        default:
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
}

export default Arts;