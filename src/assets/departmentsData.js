const departments = [
    {
        id: 1.1,
        name: 'Department of AGRICULTURAL ECONOMICS & EXTENSION',
        category: 'Sciences'
    },
    {
        id: 1.2,
        name: 'Department of Animal Science',
        category: 'Sciences'
    },
    {
        id: 1.3,
        name: 'Department of CROP SCIENCE AND HORTICULTURE',
        category: 'Sciences'
    },
    {
        id: 1.4,
        name: 'Department of Soil Science',
        category: 'Sciences'
    },
    {
        id: 2.1,
        name: 'Department of ENGLISH',
        category: 'Arts'
    },
    {
        id: 2.2,
        name: 'Department of IGBO LANGUAGE & LINGUISTICS',
        category: 'Arts'
    },
    {
        id: 2.3,
        name: 'Department of MUSIC',
        category: 'Arts'
    },
    {
        id: 2.4,
        name: 'Department of PHILOSOPHY',
        category: 'Arts'
    },
    {
        id: 2.5,
        name: 'Department of RELIGION & SOCIETY',
        category: 'Arts'
    },
    {
        id: 2.6,
        name: 'Department of THEATRE ARTS',
        category: 'Arts'
    },
    {
        id: 3.1,
        name: 'Department of ANATOMY',
        category: 'Sciences'
    },
    {
        id: 3.2,
        name: 'Department of PHYSIOLOGY',
        category: 'Sciences'
    },
    {
        id: 4.1,
        name: 'Department of Economics Education',
        category: 'Sciences'
    },
    {
        id: 4.2,
        name: 'Department of English Education',
        category: 'Sciences'
    },
    {
        id: 4.3,
        name: 'Department of Political Science Education',
        category: 'Sciences'
    },
    {
        id: 4.4,
        name: 'Department of BUSINESS EDUCATION',
        category: 'Sciences'
    },
    {
        id: 4.5,
        name: 'Department of Early Childhood Education',
        category: 'Sciences'
    },
    {
        id: 4.6,
        name: 'Department of Education Management',
        category: 'Sciences'
    },
    {
        id: 4.7,
        name: 'Department of Guidance and Counselling',
        category: 'Sciences'
    },
    {
        id: 4.8,
        name: 'Department of Primary / Elementary',
        category: 'Sciences'
    },
    {
        id: 4.9,
        name: 'Department of HUMAN KINETICS',
        category: 'Sciences'
    },
    {
        id: 4.11,
        name: 'Department of LIBRARY AND INFORMATION SCIENCE',
        category: 'Sciences'
    },
    {
        id: 4.12,
        name: 'Department of Biology education',
        category: 'Sciences'
    },
    {
        id: 4.13,
        name: 'Department of Chemistry Education',
        category: 'Sciences'
    },    
    {
        id: 4.14,
        name: 'Department of Computer science education',
        category: 'Sciences'
    },
    {
        id: 4.15,
        name: 'Department of Integrated science education',
        category: 'Sciences'
    },
    {
        id: 4.16,
        name: 'Department of Mathematics education',
        category: 'Sciences'
    },
    {
        id: 4.17,
        name: 'Department of Physics education',
        category: 'Sciences'
    },
    {
        id: 4.18,
        name: 'Department of TECHNOLOGY EDUCATION',
        category: 'Sciences'
    },
    {
        id: 5.1,
        name: 'Department of CHEMICAL ENGINEERING',
        category: 'Sciences'
    },
    {
        id: 5.2,
        name: 'Department of CIVIL ENGINEERING',
        category: 'Sciences'
    },
    {
        id: 5.3,
        name: 'Department of ELECTRICAL/ ELECTRONIC ENGINEERING',
        category: 'Sciences'
    },
    {
        id: 5.4,
        name: 'Department of MECHANICAL ENGINEERING',
        category: 'Sciences'
    },
    {
        id: 6.1,
        name: 'Department of ARCHITECTURE',
        category: 'Sciences'
    },
    {
        id: 6.2,
        name: 'Department of ESTATE MANAGEMENT',
        category: 'Sciences'
    },
    {
        id: 6.3,
        name: 'Department of ENVIRONMENTAL MANAGEMENT',
        category: 'Sciences'
    },
    {
        id: 6.4,
        name: 'Department of URBAN AND REGIONAL PLANNING',
        category: 'Sciences'
    },
    {
        id: 7.1,
        name: 'Department of LAW',
        category: 'Arts'
    },
    {
        id: 8.1,
        name: 'Department of ACCOUNTANCY',
        category: 'Sciences'
    },
    {
        id: 8.2,
        name: 'Department of BANKING & FINANCE',
        category: 'Sciences'
    },
    {
        id: 8.3,
        name: 'Department of BUSINESS ADMINISTRATION',
        category: 'Sciences'
    },
    {
        id: 8.4,
        name: 'Department of ENTREPRENEURSHIP',
        category: 'Sciences'
    },
    {
        id: 8.5,
        name: 'Department of MARKETING',
        category: 'Sciences'
    },
    {
        id: 9.1,
        name: 'Department of MEDICINE & SURGERY',
        category: 'Sciences'
    },
    {
        id: 10.1,
        name: 'Department of PHARMACY',
        category: 'Sciences'
    },
    {
        id: 11.1,
        name: 'Department of COMPUTER SCIENCE',
        category: 'Sciences'
    },
    {
        id: 11.2,
        name: 'Department of GEOLOGY',
        category: 'Sciences'
    },
    {
        id: 11.3,
        name: 'Department of INDUSTRIAL PHYSICS',
        category: 'Sciences'
    },
    {
        id: 11.4,
        name: 'Department of MATHEMATICS',
        category: 'Sciences'
    },
    {
        id: 11.5,
        name: 'Department of PURE & INDUSTRIAL CHEMISTRY',
        category: 'Sciences'
    },
    {
        id: 11.6,
        name: 'Department of STATISTICS',
        category: 'Sciences'
    },
    {
        id: 12.1,
        name: 'Department of BIOCHEMISTRY',
        category: 'Sciences'
    },
    {
        id: 12.2,
        name: 'Department of BIOLOGICAL SCIENCES',
        category: 'Sciences'
    },
    {
        id: 12.3,
        name: 'Department of MICROBIOLOGY',
        category: 'Sciences'
    },
    {
        id: 13.1,
        name: 'Department of CRIMINOLOGY AND SECURITY STUDIES',
        category: 'Sciences'
    },
    {
        id: 13.2,
        name: 'Department of ECONOMICS',
        category: 'Sciences'
    },
    {
        id: 13.3,
        name: 'Department of MASS COMMUNICATION',
        category: 'Sciences'
    },
    {
        id: 13.4,
        name: 'Department of POLITICAL SCIENCE',
        category: 'Sciences'
    },
    {
        id: 13.5,
        name: 'Department of PUBLIC ADMINISTRATION',
        category: 'Sciences'
    },
    {
        id: 13.6,
        name: 'Department of PSYCHOLOGY',
        category: 'Sciences'
    },
    {
        id: 13.7,
        name: 'Department of SOCIOLOGY',
        category: 'Sciences'
    }
]

export default departments;