// Select the database to use.
use('Backend');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
          
            image: 'https://copyassignment.com/wp-content/uploads/2022/09/Library-Management-System-Project-in-Java.jpg',
            title: 'Library Management System',
            github: 'https://github.com/JIM440/LIBRARY-MANAGEMENT-SYSTEM',
            demo: 'https://dribbble.com/shots/19582832-Library-Management-Dashboard',
        },
        {
       
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*AMa43vvUwPFtGg4uIpl3jw.png',
            title: 'React-App',
            github: 'https://github.com/JIM440/REACTPORTFOLIO-FET',
            demo: 'https://dribbble.com/shots/18845600-Michal-Chudziak-Portfolio',
        },
        {
            image: 'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
            title: 'Recipe app design',
            github: 'https://github.com/njiddasalifu/File-Management-System',
            demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
        },
        {
        
            image: 'https://cdn.educba.com/academy/wp-content/uploads/2020/02/File-Handling-in-Java.jpg',
            title: 'File System In Java',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21154209-Incloud-Cloud-Storage-Dashboard',
        },
        {
     
            image: 'https://cdn.dribbble.com/users/5147614/screenshots/17480773/media/77bbee6dafd811f65d14bd38f4c426ab.png?compress=1&resize=1200x900&vertical=top',
            title: 'Mobile App Exploration',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/17480773-NWS-Mobile-App-Exploration',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21636337-Recipe-app',
        }

    ]
);

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'John Brown',
//           review: "I highly recommend Jim as a skilled and reliable front-end developer. He has exceptional attention to detail and can translate design ideas into beautiful and functional websites. Jim is a valuable asset to any web development team"
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//           name: 'Kevin Roussel',
//           review: "I highly recommend Jim as a skilled and reliable front-end developer. He has exceptional attention to detail and can translate design ideas into beautiful and functional websites. Jim is a valuable asset to any web development team"
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: 'Louis McBrown',
//           review: "I highly recommend Jim as a skilled and reliable front-end developer. He has exceptional attention to detail and can translate design ideas into beautiful and functional websites. Jim is a valuable asset to any web development team"
//         },
      
      
//       ]
// );
