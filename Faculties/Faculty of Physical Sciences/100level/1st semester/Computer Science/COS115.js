// // import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
// // import React from 'react'
// // import { SafeAreaView } from 'react-native-safe-area-context'

// // const Cos115 = () => {
// //   return (
// //     <SafeAreaView>
// //       <ScrollView>
// //       <Text style={styles.courseHeader}>COURSE OUTLINE FOR COOU-COS 115</Text>
// //       <Text style={styles.courseTitle}>1. Defining information systems</Text>
// //       <Text style={styles.courseTitle}> 2. Hardware</Text>
// //       <Text style={styles.courseTitle}>3. Software</Text>
// //       <Text style={styles.courseTitle}>4. Database systems</Text>
// //       <Text style={styles.courseTitle}>5. Risk management</Text>
// //       <Text style={styles.courseTitle}>6. Project management</Text>
// //       <Text style={styles.courseTitle}>7. Network and Internet</Text>
// //       <Text style={styles.courseTitle}>8. Operational amplifiers: Analog to digital and Digital to analog</Text>
// //       <Text style={styles.courseTitle}>9. Developing information system, system development methodology</Text>
// //       <Text style={styles.courseTitleTopic}>10. Information system security</Text>      
// //       <Text style={styles.courseHeader}>1. Defining information systems</Text>
// //       <Text style={styles.courseText}>Information system just like software is created via programming. Programming is the
// // process of creating a set of logical instructions for a digital device to follow using a
// // programming language. The process of programming is sometimes called "coding" because the
// // developer takes the design and encodes it into a programming language which then runs on
// // the computer.
// // The process of developing a good information system is usually not as simple as sitting down
// // and writing some code. Sometimes a programmer can quickly write a short program to solve
// // a need, but in most instances, the creation of an information system is a resource-intensive
// // process that involves several different groups of people in an organization. To do this
// // effectively, the groups agree to follow a specific software development methodology. Let us
// // now review several different methodologies for software or information system
// // development, as summarized in the table below and more fully described in the coming notes.</Text>
// // {/* <Image src={require('../courseOutlineImages/logo.png') } style={styles.image}/> */}

// //       <Text style={styles.courseHeader}>Systems Development Life Cycle</Text>
// //       <Text style={styles.courseText}>The Systems Development Life Cycle (SDLC) was first developed in the 1960s to manage the
// // large software projects associated with corporate systems running on mainframes. This
// // approach to software development is very structured and risk averse, designed to manage
// // large projects that include multiple programmers and systems that have a large impact on
// // the organization. It requires a clear, upfront understanding of what the software is
// // supposed to do and is not amenable to design changes. This approach is roughly similar to an
// // assembly line process, where it is clear to all stakeholders what the end product should do
// // and that major changes are difficult and costly to implement. Various definitions of the SDLC
// // methodology exist, but most contain the following phases.</Text>

// //       <Text style={styles.courseSubHeader}>1. Preliminary Analysis: </Text>
// //       <Text style={styles.courseText}>A request for a replacement or new system is first reviewed. The
// // review includes questions such as: What is the problem-to-be-solved? Is creating a solution
// // possible? What alternatives exist? What is currently being done about it? Is this project a
// // good fit for our organization? After addressing these questions, a feasibility study is
// // launched. The feasibility study includes an analysis of the technical feasibility, the economic
// // feasibility or affordability, and the legal feasibility. This step is important in determining if the
// // project should be initiated and may be done by someone with a title of Requirements Analyst
// // or Business Analyst
// // </Text>
// //       <Text style={styles.courseSubHeader}>2. System Analysis:</Text>
// //       <Text style={styles.courseText}>In this phase one or more system analysts work with different
// // stakeholder groups to determine the specific requirements for the new system. No
// // programming is done in this step. Instead, procedures are documented, key players/users
// // are interviewed, and data requirements are developed in order to get an overall impression
// // of exactly what the system is supposed to do. The result of this phase is a system
// // requirements document and may be done by someone with a title of Systems Analyst.</Text>
// //       <Text style={styles.courseSubHeader}>3. System Design: </Text>
// //       <Text style={styles.courseText}>In this phase, a designer takes the system requirements document created
// // in the previous phase and develops the specific technical details required for the system. It is
// // in this phase that the business requirements are translated into specific technical
// // requirements. The design for the user interface, database, data inputs and outputs, and
// // reporting are developed here. The result of this phase is a system design document. This
// // document will have everything a programmer needs to actually create the system and may be
// // done by someone with a title of Systems Analyst, Developer, or Systems Architect, based on
// // the scale of the project.</Text>
// //       <Text style={styles.courseSubHeader}>4. Programming:</Text>
// //       <Text style={styles.courseText}>The code finally gets written in the programming phase. Using the system
// // design document as a guide, programmers develop the software. The result of this phase is an
// // initial working program that meets the requirements specified in the system analysis phase
// // and the design developed in the system design phase. These tasks are done by persons with
// // titles such as Developer, Software Engineer, Programmer, or Coder.</Text>
// //       <Text style={styles.courseSubHeader}>5. Testing;</Text>
// //       <Text style={styles.courseText}>In the testing phase the software program developed in the programming phase is
// // put through a series of structured tests. The first is a unit test, which evaluates individual
// // parts of the code for errors or bugs. This is followed by a system test in which the different
// // components of the system are tested to ensure that they work together properly. Finally,
// // the user acceptance test allows those that will be using the software to test the system to
// // ensure that it meets their standards. Any bugs, errors, or problems found during testing are
// // resolved and then the software is tested again. These tasks are done by persons with titles
// // such as Tester, Testing Analyst, or Quality Assurance.</Text>
// //       <Text style={styles.courseSubHeader}>6. Implementation: </Text>
// //       <Text style={styles.courseText}>Once the new system is developed and tested, it has to be implemented in
// // the organization. This phase includes training the users, providing documentation, and data
// // conversion from the previous system to the new system. Implementation can take many
// // forms, depending on the type of system, the number and type of users, and how urgent it is
// // that the system become operational. These different forms of implementation are covered
// // later in this course</Text>
// //       <Text style={styles.courseSubHeader}>7. Maintenance:</Text>
// //       <Text style={styles.courseText}>This final phase takes place once the implementation phase is complete. In the
// // maintenance phase the system has a structured support process in place. Reported bugs are
// // fixed and requests for new features are evaluated and implemented. Also, system updates and
// // backups of the software are made for each new version of the program. Since maintenance
// // is normally an Operating Expense (OPEX) while much of development is a Capital Expense
// // (CAPEX), funds normally come out of different budgets or cost centers.</Text>
// // {/* <Image /> */}

// //       <Text style={styles.courseSubHeader}>No. 2 Methodology follows</Text>
// // {/* <Image /> */}
// //       <Text style={styles.courseText}>As you can see, the RAD methodology is much more compressed than SDLC. Many of the SDLC
// // steps are combined and the focus is on user participation and iteration. This methodology is
// // much better suited for smaller projects than SDLC and has the added advantage of giving
// // users the ability to provide feedback throughout the process. SDLC requires more
// // documentation and attention to detail and is well suited to large, resource-intensive projects.
// // RAD makes more sense for smaller projects that are less.</Text>
// //       <Text style={styles.courseSubHeader}>No. 3 Methodology follows</Text>
// // {/* <Image /> */}
// //       <Text style={styles.courseSubHeader}>No. 4 Methodology follows</Text>
// // {/* <Image /> */}
// //       <Text style={styles.courseSubHeader}>The Quality triangle</Text>
// // {/* <Image /> */}
// //       <Text style={styles.courseText}>4. Programming:</Text>
// //       <Text style={styles.courseSubHeader}>The Quality triangle</Text>
// // {/* <Image /> */}
// //       <Text style={styles.courseText}>When developing software or any sort of product or service, there exists a tension between
// // the developers and the different stakeholder groups such as management, users, and
// // investors. This tension relates to how quickly the software can be developed (time), how much
// // money will be spent (cost), and how well it will be built (quality). The quality triangle is a simple
// // concept. It states that for any product or service being developed, you can only address two
// // of the following: time, cost, and quality.
// // So why can only two of the three factors in the triangle be considered? Because each of
// // these three components are in competition with each other! If you are willing and able to
// // spend a lot of money, then a project can be completed quickly with high quality results
// // because you can provide more resources towards its development. If a projects completion
// // date is not a priority, then it can be completed at a lower cost with higher quality results
// // using a smaller team with fewer resources. Of course, these are just generalizations, and
// // different projects may not fit this model perfectly. But overall, this model is designed to help
// // you understand the trade-offs that must be made when you are developing new products and
// // services.
// // There are other, fundamental reasons why low-cost, high-quality projects done quickly are so
// // difficult to achieve.
// // 1. The human mind is analog and the machines the software run on are digital. These are
// // completely different natures that depend upon context and nuance versus being a 1 or a 0.
// // Things that seem obvious to the human mind are not so obvious when forced into a 1 or 0
// // binary choice.
// // 2. Human beings leave their imprints on the applications or systems they design. This is best
// // summed up by Conway's Law (1968) - "Organizations that design information systems are
// // constrained to do so in a way that mirrors their internal communication processes."
// // Organizations with poor communication processes will find it very difficult to communicate
// // requirements and priorities, especially for projects at the enterprise level (i.e., that affect
// // the whole organization.)
// // NB: There is no way I will ask you to memorize and write all of these for exam. I won't do
// // that. Just read and understand them and know where each phase belongs</Text>
// //       <Text style={styles.courseHeader}>DATABASE MANAGEMENT</Text>
// //       <Text style={styles.courseText}>Database management is the process of storing, organizing, and managing data efficiently and securely. Databases are central to most modern
// //        applications, providing a structured way to store and retrieve information.</Text>
// //       <Text style={styles.courseSubHeader}>Key Components of Database Management</Text>
// //       <Text style={styles.courseText}>Key Components of Project Management</Text>
// //       <Text style={styles.courseSubHeader}>INFORMATION SECURITY</Text>
// //       {/* <Image /> */}
// //       <Text style={styles.courseSubHeader}>The Information Security Triad: Confidentiality, Integrity, Availability (CIA)</Text>
// //       {/* <Image /> */}
// //       <Text style={styles.courseSubHeader}>Tools for Information Security</Text>
// //       <Text style={styles.courseText}>To ensure the confidentiality, integrity, and availability of information, organizations can
// // choose from a variety of tools. Each of these tools can be utilized as part of an overall
// // information-security policy.</Text>
// //       <Text style={styles.courseSubHeader}>1. Authentication</Text>
// //       <Text style={styles.courseText}>The most common way to identify someone is through their physical appearance, but how do we
// // identify someone sitting behind a computer screen or at the ATM? Tools for authentication are
// // used to ensure that the person accessing the information is, indeed, who they present
// // themselves to be. Authentication can be accomplished by identifying someone through one or
// // more of three factors:
// // 1. Something they know
// // 2. Something they have, or
// // 3. Something they are.
// // For example, the most common form of authentication today is the user ID and password. In
// // this case, the authentication is done by confirming something that the user knows (their ID and
// // password). But this form of authentication is easy to compromise (see sidebar) and stronger
// // forms of authentication are sometimes needed. Identifying someone only by something they
// // have, such as a key or a card, can also be problematic. When that identifying token is lost or
// // stolen, the identity can be easily stolen. The final factor, something you are, is much harder to
// // compromise. This factor identifies a user through the use of a physical characteristic, such as
// // a retinal scan, fingerprint, or facial geometry. Identifying someone through their physical
// // characteristics is called biometrics.</Text>
// // <Text style={styles.courseSubHeader}>2. Access Control</Text>
// // <Text style={styles.courseText}>Once a user has been authenticated, the next step is to ensure that they can only access the
// // information resources that are appropriate. This is done through the use of access control.
// // Access control determines which users are authorized to read, modify, add, and/ or delete
// // information. Several different access control models exist. Two of the more common are: The
// // Access Control List (ACL) and Role-Based Access Control (RBAC). An information security
// // employee can produce an ACL which identifies a list of users who have the capability to take
// // specific actions with an information resource such as data files. Specific permissions are
// // assigned to each user such as read, write, delete, or add. Only users with those permissions are
// // allowed to perform those functions.
// // ACLs are simple to understand and maintain, but there are several drawbacks. The primary
// // drawback is that each information resource is managed separately, so if a security
// // administrator wanted to add or remove a user to a large set of information resources, it
// // would be quite difficult. And as the number of users and resources increase, ACLs become
// // harder to maintain. This has led to an improved method of access control, called role-based
// // access control, or RBAC. With RBAC, instead of giving specific users access rights to an
// // information resource, users are assigned to roles and then those roles are assigned the access.
// // This allows the administrators to manage users and roles separately, simplifying administration
// // and, by extension, improving security. The following image shows an ACL with permissions granted to individual users. RBAC allows
// // permissions to be assigned to roles, as shown in the middle grid, and then in the third grid each
// // user is assigned a role. Although not modelled in the image, each user can have multiple roles
// // such as Reader and Editor.</Text>
// // {/* <Image /> */}
// // <Text style={styles.courseSubHeader}>3. Encryption</Text>
// // <Text style={styles.courseText}>Many times, an organization needs to transmit information over the Internet or transfer it on
// // external media such as a flash drive. In these cases, even with proper authentication and access
// // control, an unauthorized person can gain access to the data. Encryption is a process of
// // encoding data upon its transmission or storage so that only authorized individuals can read it.
// // This encoding is accomplished by software that encodes the plain text that needs to be
// // transmitted (encryption). Then the recipient receives the cipher text and decodes it
// // (decryption). For this to work, the sender and receiver need to agree on the method of
// // encoding so that both parties have the same message. Known as symmetric key encryption,
// // both parties share the encryption key, enabling them to encode and decode each other's
// // messages.
// // An alternative to symmetric key encryption is public key encryption. In public key encryption,
// // two keys are used: a public key and a private key. To send an encrypted message, you obtain the
// // public key, encode the message, and send it. The recipient then uses their private key to decode
// // it. The public key can be given to anyone who wishes to send the recipient a message. Each user
// // simply needs one private key and one public key in order to secure messages. The private key is
// // necessary in order to decrypt a message sent with the public key.
// // Notice in the image how the sender on the left creates a plaintext message which is then
// // encrypted with a public key. The ciphered text is transmitted through the communication
// // channel and the recipient uses their private key to decrypt the message and then read the plain
// // text.
// // These things are bulky. I can never ask you to define or copy back all these notes in the exam. I
// // just need you to understand that we are saying
// // Especially this number 4 tool. I can never ask you to memorize all these. Read and understand
// // the idea. It is something you need to know in this department</Text>
// // <Text style={styles.courseSubHeader}>4. Backups</Text>
// // <Text style={styles.courseText}>Another essential tool for information security is a comprehensive backup plan for the entire
// // organization. Not only should the data on the corporate servers be backed up, but individual
// // computers used throughout the organization should also be backed up. A good backup plan
// // should consist of several components.
// // Full understanding of the organization's information resources. What information does the
// // organization actually have? Where is it stored? Some data may be stored on the organization's
// // servers, other data on users' hard drives, some in the cloud, and some on third-party sites. An
// // organization should make a full inventory of all of the information that needs to be backed up
// // and determine the best way to back it up.
// // Regular backups of all data. The frequency of backups should be based on how important the
// // data is to the company, combined with the ability of the company to replace any data that is
// // lost. Critical data should be backed up daily, while less critical data could be backed up weekly.
// // Most large organizations today use data redundancy so their records are always backed up.
// // Offsite storage of backup data sets. If all backup data is being stored in the same facility as the
// // original copies of the data, then a single event such as an earthquake, fire, or tornado would
// // destroy both the original data and the backup. It is essential the backup plan includes storing
// // the data in an offsite location.
// // Test of data restoration. Backups should be tested on a regular basis by having test data
// // deleted then restored from backup. This will ensure that the process is working and will give the
// // organization confidence in the backup plan.
// // Besides these considerations, organizations should also examine their operations to determine
// // what effect downtime would have on their business. If their information technology were to be
// // unavailable for any sustained period of time, how would it impact the business?
// // Additional concepts related to backup include the following:
// // Uninterruptible Power Supply (UPS). A UPS provides battery backup to critical components of
// // the system, allowing them to stay online longer and/or allowing the IT staff to shut them down
// // using proper procedures in order to prevent data loss that might occur from a power failure.
// // Alternate, or "hot" sites. Some organizations choose to have an alternate site where an exact
// // replica of their critical data is always kept up to date. When the primary site goes down, the
// // alternate site is immediately brought online so that little or no downtime is experienced.
// // As information has become a strategic asset, a whole industry has sprung up around the
// // technologies necessary for implementing a proper backup strategy. A company can contract
// // with a service provider to back up all of their data or they can purchase large amounts of online
// // storage space and do it themselves. Technologies such as Storage Area Networks (SAN) and
// // archival systems are now used by most large businesses for data backup.</Text>
// // <Text style={styles.courseSubHeader}>5. Firewall</Text>
// // {/* <Image /> */}
// // <Text style={styles.courseSubHeader}>6. Intrusion detection systems</Text>
// // {/* <Image /> */}
// // <Text style={styles.courseSubHeader}>7. Physical security</Text>
// // {/* <Image /> */}

// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // export default Cos115


// // const styles = StyleSheet.create({
// //   courseHeader: {
// //     fontSize: 22,
// //     color: 'black',
// //     fontWeight: '800',
// //     marginVertical: 10,
// //     marginLeft: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,

// //   },
// //   courseSubHeader: {
// //     fontSize: 20,
// //     color: 'black',
// //     fontWeight: '700',
// //     marginVertical: 10,
// //     marginLeft: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,

// //   },
// //   courseTitle: {
// //     fontSize: 19,
// //     color: 'black',
// //     fontWeight: '700',
// //     marginVertical: 10,
// //     marginLeft: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 30,

// // },
// //   courseTitleTopic: {
// //     fontSize: 19,
// //     color: 'black',
// //     fontWeight: '700',
// //     marginVertical: 10,
// //     marginBottom: 50,
// //     marginLeft: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// // },
// //   courseText: {
// //     fontSize: 15,
// //     color: 'black',
// //     fontWeight: '600',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginHorizontal: 10,
// //     marginBottom: 20,
// //   },

// // image: {
// //       width: '92%',
// //       height: '2rem'
// // }
// // });

// // import React from 'react';
// // import { View, Dimensions, StyleSheet, SafeAreaView, StatusBar, Text, ScrollView } from 'react-native';
// // import Pdf from 'react-native-pdf';

// // const Cos115 = () => {

// //     const source = {
// //         uri: 'bundle-assets://MR. CHIMAOBIS NOTE 2.pdf',
// //       };
   
    
// //       return (
// //         <SafeAreaView style={styles.container}>
// //           <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
// //           <ScrollView style={styles.container}>
// //           <Text style={styles.courseHeader}>COURSE OUTLINE FOR COOU-COS 115</Text>
// //           <Text style={styles.courseTitle}>1. Defining information systems</Text>
// //           <Text style={styles.courseTitle}>2. Hardware</Text>
// //           <Text style={styles.courseTitle}>3. Software</Text>
// //           <Text style={styles.courseTitle}>4. Database systems</Text>
// //           <Text style={styles.courseTitle}>5. Risk management</Text>
// //           <Text style={styles.courseTitle}>6. Project management</Text>
// //           <Text style={styles.courseTitle}>7. Network and Internet</Text>
// //           <Text style={styles.courseTitle}>8. Operational amplifiers: Analog to digital and Digital to analog</Text>
// //           <Text style={styles.courseTitle}>9. Developing information system, system development methodology</Text>
// //           <Text style={styles.courseTitle}>10. Information system security</Text>   
// //           <View style={styles.pdfContainer}>
// //           <Pdf
// //             source={source}
// //             onLoadComplete={(numberOfPages, filePath) => {
// //               console.log(`Number of pages: ${numberOfPages}`);
// //             }}
// //             onPageChanged={(page, numberOfPages) => {
// //               console.log(`Current page: ${page}`);
// //             }}
// //             onError={(error) => {
// //               console.log(error);
// //             }}
// //             onPressLink={(uri) => {
// //               console.log(`Link pressed: ${uri}`);
// //             }}
// //             style={styles.pdf}
// //           />
// //           </View>
          
    
// //         </ScrollView>

// //          </SafeAreaView>
// //       );
// //     };
// //     const styles = StyleSheet.create({
// //       container: {
// //         flex: 1,
// //         // justifyContent: 'flex-start',
// //         // alignItems: 'center',
// //         // marginTop: 25,
// //       },
// //       container1: {
// //         width: Dimensions.get('window').width,
// //         height: Dimensions.get('window').height * 0.4,
// //         marginVertical: 10,
// //         paddingHorizontal: 15
// //       },
// //       pdfContainer: {
// //         width: Dimensions.get('window').width,
// //         flex: 1,
// //         // marginVertical: 10,
// //         paddingHorizontal: 15
// //       },
// //       container2: {
// //         width: Dimensions.get('window').width,
// //         height: Dimensions.get('window').height * 0.4,
// //         marginVertical: 10,
// //         paddingHorizontal: 15
// //       },
// //       pdf: {
// //         // width: Dimensions.get('window').width,
// //         // height: Dimensions.get('window').height,
// //         flex: 1,
// //         width: '100%',
// //         // height: '100%',
// //       },
// //         courseHeader: {
// //               fontSize: 16,
// //               color: 'black',
// //               fontWeight: '800',
// //               marginLeft: 5,
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               marginVertical: 20,
          
// //             },
            
// //             courseTitle: {
// //               fontSize: 14,
// //               color: 'black',
// //               fontWeight: '700',
// //               marginVertical: 10,
// //               marginLeft: 5,
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               marginBottom: 10,
          
// //           },
            
// //             courseText: {
// //               fontSize: 14,
// //               color: 'black',
// //               fontWeight: '600',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               marginHorizontal: 10,
// //               marginBottom: 20,
// //             },
          
// //           image: {
// //                 width: '92%',
// //                 height: '2rem'
// //           }
// //       });
      
// // export default Cos115; 
// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Dimensions } from 'react-native';
// import Pdf from 'react-native-pdf';

// const Cos115 = () => {
//     const source = { uri: 'bundle-assets://MR. CHIMAOBIS NOTE 2.pdf' };
//     const outlineData = [
//         { key: '1', title: 'Defining information systems' },
//         { key: '2', title: 'Hardware' },
//         { key: '3', title: 'Software' },
//         { key: '4', title: 'Database systems' },
//         { key: '5', title: 'Risk management' },
//         { key: '6', title: 'Project management' },
//         { key: '7', title: 'Network and Internet' },
//         { key: '8', title: 'Operational amplifiers: Analog to digital and Digital to analog' },
//         { key: '9', title: 'Developing information system, system development methodology' },
//         { key: '10', title: 'Information system security' },
//     ];

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />

//             <FlatList
//                 data={[...outlineData, { key: 'pdf' }]}
//                 renderItem={({ item }) =>
//                     item.key === 'pdf' ? (
//                         <View style={styles.pdfContainer}>
//                             <Pdf
//                                 source={source}
//                                 onLoadComplete={(numberOfPages, filePath) => {
//                                     console.log(`Number of pages: ${numberOfPages}`);
//                                 }}
//                                 onPageChanged={(page, numberOfPages) => {
//                                     console.log(`Current page: ${page}`);
//                                 }}
//                                 onError={(error) => {
//                                     console.log(error);
//                                 }}
//                                 onPressLink={(uri) => {
//                                     console.log(`Link pressed: ${uri}`);
//                                 }}
//                                 style={styles.pdf}
//                             />
//                         </View>
//                     ) : (
//                         <View style={styles.textContainer}>
//                             <Text style={styles.courseTitle}>{item.title}</Text>
//                         </View>
//                     )
//                 }
//                 keyExtractor={(item) => item.key}
//                 ListHeaderComponent={
//                     <View style={styles.headerContainer}>
//                         <Text style={styles.courseHeader}>COURSE OUTLINE FOR COOU-COS 115</Text>
//                     </View>
//                 }
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     headerContainer: {
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//     },
//     textContainer: {
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//     },
//     courseHeader: {
//         fontSize: 16,
//         color: 'black',
//         fontWeight: '800',
//         marginBottom: 10,
//     },
//     courseTitle: {
//         fontSize: 14,
//         color: 'black',
//         fontWeight: '700',
//     },
//     pdfContainer: {
//         height: Dimensions.get('window').height, // Ensures the PDF fills the screen height
//         width: '100%',
//     },
//     pdf: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//     },
// });
// export default Cos115;





// import React from 'react';
// import { View, Dimensions, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import Pdf from 'react-native-pdf';

// const Cos115 = () => {

//     const source = { uri: 'bundle-assets://MR. CHIMAOBIS NOTE 2.pdf' };

    
//       return (
//         <SafeAreaView style={styles.container}>
//           <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//           <View style={styles.container}>
//           <Pdf
//             source={source}
//             onLoadComplete={(numberOfPages, filePath) => {
//               console.log(`Number of pages: ${numberOfPages}`);
//             }}
//             onPageChanged={(page, numberOfPages) => {
//               console.log(`Current page: ${page}`);
//             }}
//             onError={(error) => {
//               console.log(error);
//             }}
//             onPressLink={(uri) => {
//               console.log(`Link pressed: ${uri}`);
//             }}
//             style={styles.pdf}
//           />
//         </View>
    
//          </SafeAreaView>
//       );
//     };
//     const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           marginTop: 25,
//         },
//         pdf: {
//           flex: 1,
//           width: Dimensions.get('window').width,
//           height: Dimensions.get('window').height,
//         },
//       });
      
// export default Cos115;


// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// // Appwrite Configuration


// const COS115 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS115';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', 'Physical Sciences'),
//           Query.equal('department', 'Computer Science'),
//           Query.equal('level', '100'),
//           Query.equal('semester', '1st'),
//           Query.equal('course', 'COS115'),
//         ]);
        
             

//         if (response.documents.length > 0) {
//           setPdfUrl(response.documents[0].pdf_url);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         Alert.alert('Error', err.message || 'Failed to fetch PDF URL.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle='light-content' animated={true} />
//       {pdfUrl ? (
//         <ReactNativePDF
//           source={{ uri: pdfUrl, cache: true }}
//           style={{ flex: 1, width: '100%', height: '100%' }}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 16, fontWeight: '300', color: '#1d1615' }
// });

// export default COS115;


// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import RNFetchBlob from 'react-native-blob-util';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS115 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS115';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [localFilePath, setLocalFilePath] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         // Fetch the PDF URL from Appwrite
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         if (response.documents.length > 0) {
//           const remotePdfUrl = response.documents[0].pdf_url;
//           setPdfUrl(remotePdfUrl);

//           // Download the PDF file
//           const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
//           const download = await RNFetchBlob.config({
//             fileCache: true,
//             path: localPath,
//           }).fetch('GET', remotePdfUrl);

//           // Set the local file path
//           setLocalFilePath(`file://${download.path()}`);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {localFilePath ? (
//         <ReactNativePDF
//           source={{ uri: localFilePath, cache: true }}
//           style={styles.pdf}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
// });

// // export default COS115;
// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import RNFetchBlob from 'react-native-blob-util';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS115 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS115';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [localFilePath, setLocalFilePath] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         // Fetch the PDF URL from Appwrite
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         console.log('Appwrite Response:', response);

//         if (response.documents.length > 0) {
//           const remotePdfUrl = response.documents[0].pdf_url;
//           console.log('Remote PDF URL:', remotePdfUrl);
//           setPdfUrl(remotePdfUrl);

//           // Download the PDF file
//           const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
//           const download = await RNFetchBlob.config({
//             fileCache: true,
//             path: localPath,
//           }).fetch('GET', remotePdfUrl);

//           console.log('Downloaded file path:', download.path());

//           // Check if the file exists
//           const fileExists = await RNFetchBlob.fs.exists(localPath);
//           console.log('File exists:', fileExists);
          
//           // Set the local file path
//           setLocalFilePath(`file://${download.path()}`);
//           console.log('localFilePath', localFilePath);
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//         Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {localFilePath ? (
//         <ReactNativePDF
//           source={{ uri: localFilePath, cache: true }}
//           style={styles.pdf}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
// });

// export default COS115;

// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import RNFetchBlob from 'react-native-blob-util';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS115 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS115';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [localFilePath, setLocalFilePath] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         // Fetch the PDF URL from Appwrite
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         console.log('Appwrite Response:', response);

//         if (response.documents.length > 0) {
//           const remotePdfUrl = response.documents[0].pdf_url;
//           console.log('Remote PDF URL:', remotePdfUrl);
//           setPdfUrl(remotePdfUrl);

//           // Download the PDF file
//           const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
//           console.log('Local path:', localPath);

//           try {
//             const download = await RNFetchBlob.config({
//               fileCache: true,
//               path: localPath,
//             }).fetch('GET', remotePdfUrl);

//             console.log('Download response:', download);
//             console.log('Download path:', download.path());

//             const filePath = `file://${download.path()}`;
//             console.log('Local file path:', filePath);
//             setLocalFilePath(filePath);
//           } catch (err) {
//             console.error('Download error:', err);
//             Alert.alert('Error', 'Failed to download the PDF.');
//           }
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//         Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {localFilePath ? (
//         <ReactNativePDF
//           source={{ uri: localFilePath, cache: true }}
//           style={styles.pdf}
//           onError={(error) => {
//             console.error('PDF Error:', error);
//           }}
//           onLoadComplete={(numberOfPages, filePath) => {
//             console.log(`PDF loaded successfully. Pages: ${numberOfPages}, Path: ${filePath}`);
//           }}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
// });

// export default COS115;

// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import ReactNativePDF from 'react-native-pdf';
// import RNFetchBlob from 'react-native-blob-util';
// import { databases, databaseId, collectionId, Query } from '../../../../../src/screens/UploadScreens/config';

// const COS115 = () => {
//   const faculty = 'Physical Sciences';
//   const department = 'Computer Science';
//   const level = '100';
//   const semester = '1st';
//   const course = 'COS115';

//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [localFilePath, setLocalFilePath] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPdfUri = async () => {
//       try {
//         // Fetch the PDF URL from Appwrite
//         const response = await databases.listDocuments(databaseId, collectionId, [
//           Query.equal('faculty', faculty),
//           Query.equal('department', department),
//           Query.equal('level', level),
//           Query.equal('semester', semester),
//           Query.equal('course', course),
//         ]);

//         console.log('Appwrite Response:', response);

//         if (response.documents.length > 0) {
//           let remotePdfUrl = response.documents[0].pdf_url;

//           // Remove the /preview parameter if it exists
//           remotePdfUrl = remotePdfUrl.replace('/preview', '');
//           console.log('Updated Remote PDF URL:', remotePdfUrl);

//           setPdfUrl(remotePdfUrl);

//           // Download the PDF file
//           const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
//           console.log('Local path:', localPath);

//           try {
//             const download = await RNFetchBlob.config({
//               fileCache: true,
//               path: localPath,
//             }).fetch('GET', remotePdfUrl);

//             console.log('Download response:', download);
//             console.log('Download path:', download.path());

//             // Verify the content type
//             const contentType = download.respInfo.headers['content-type'];
//             console.log('Content-Type:', contentType);

//             if (contentType !== 'application/pdf') {
//               throw new Error('Downloaded file is not a PDF.');
//             }

//             const filePath = `file://${download.path()}`;
//             console.log('Local file path:', filePath);
//             setLocalFilePath(filePath);
//           } catch (err) {
//             console.error('Download error:', err);
//             Alert.alert('Error', 'Failed to download the PDF.');
//           }
//         } else {
//           Alert.alert('No PDF Available', 'No PDF is available for this course.');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//         Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfUri();
//   }, [faculty, department, level, semester, course]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#007BFF" />;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
//       {localFilePath ? (
//         <ReactNativePDF
//           source={{ uri: localFilePath, cache: true }}
//           style={styles.pdf}
//           onError={(error) => {
//             console.error('PDF Error:', error);
//           }}
//           onLoadComplete={(numberOfPages, filePath) => {
//             console.log(`PDF loaded successfully. Pages: ${numberOfPages}, Path: ${filePath}`);
//           }}
//         />
//       ) : (
//         <Text style={styles.text}>No PDF available for this course.</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '300',
//     color: '#1d1615',
//   },
// });

// export default COS115;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import ReactNativePDF from 'react-native-pdf';
import RNFetchBlob from 'react-native-blob-util';
import { databases, databaseId, collectionId, Query, bucketId, projectId } from '../../../../../src/screens/UploadScreens/config';
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";


const COS115 = () => {
  const faculty = 'Physical Sciences';
  const department = 'Computer Science';
  const level = '100';
  const semester = '1st';
  const course = 'COS115';

  const [pdfUrl, setPdfUrl] = useState(null);
  const [localFilePath, setLocalFilePath] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfUri = async () => {
      try {
        // Fetch the PDF URL from Appwrite
        const response = await databases.listDocuments(databaseId, collectionId, [
          Query.equal('faculty', faculty),
          Query.equal('department', department),
          Query.equal('level', level),
          Query.equal('semester', semester),
          Query.equal('course', course),
        ]);

        console.log('Appwrite Response:', response);

        if (response.documents.length > 0) {
          const fileId = response.documents[0].fileId; // Get the file ID

          // Construct the download URL
          const remotePdfUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}`;
          console.log('Download URL:', remotePdfUrl);

          setPdfUrl(remotePdfUrl);

          // Download the PDF file
          const localPath = `${RNFetchBlob.fs.dirs.CacheDir}/${course}.pdf`;
          console.log('Local path:', localPath);

          try {
            const download = await RNFetchBlob.config({
              fileCache: true,
              path: localPath,
            }).fetch('GET', remotePdfUrl);

            console.log('Download response:', download);
            console.log('Download path:', download.path());

            // Verify the content type
            const contentType = download.respInfo.headers['content-type'];
            console.log('Content-Type:', contentType);

            if (contentType !== 'application/pdf') {
              throw new Error('Downloaded file is not a PDF.');
            }

            const filePath = `file://${download.path()}`;
            console.log('Local file path:', filePath);
            setLocalFilePath(filePath);
          } catch (err) {
            console.error('Download error:', err);
            Alert.alert('Error', 'Failed to download the PDF.');
          }
        } else {
          Alert.alert('No PDF Available', 'No PDF is available for this course.');
        }
      } catch (err) {
        console.error('Error:', err);
        Alert.alert('Error', err.message || 'Failed to fetch or download PDF.');
      } finally {
        setLoading(false);
      }
    };

    fetchPdfUri();
  }, [faculty, department, level, semester, course]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007BFF" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" animated={true} />
      {localFilePath && (
              <View style={styles.verifiedBadge}>
                <Text style={{fontSize: 15, fontWeight: 900, position: 'relative',
                       flexDirection: 'column', alignSelf: 'flex-end', color: '#1d1615'}}> CM7 
                       <MaterialIcons name='verified' size={12} color='#0000ff' /></Text>
              </View>
            )}
      {localFilePath ? (
        <ReactNativePDF
          source={{ uri: localFilePath, cache: true }}
          style={styles.pdf}
          onError={(error) => {
            console.error('PDF Error:', error);
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`PDF loaded successfully. Pages: ${numberOfPages}, Path: ${filePath}`);
          }}
        />
      ) : (
        <Text style={styles.text}>No PDF available for this course.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    color: '#1d1615',
  },
});

export default COS115;