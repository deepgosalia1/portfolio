
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  username: "Deep Gosalia",
  title: "Hey there! Welcome to my Portfolio!",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React Native and an ( AWS Cloud && CyberSec && Machine Learning ) enthusiast, with a forked passion in Python Development and Operating Systems. \n" ),
  resumeLink: "https://drive.google.com/file/d/19c390u2mVL1Evo5Um246H68-A3yVy_W6/view?usp=sharing"
};

const socialMediaLinks = {

  github: "https://github.com/deepgosalia1",
  linkedin: "https://www.linkedin.com/in/deepgosalia/",
  gmail: "deepgosalia1@gmail.com",
  facebook: "https://www.facebook.com/deepdgosalia/",
  instagram: "https://www.instagram.com/deep.gosalia/",
  twitter: "https://twitter.com/deepgosalia1"
};

const skillsSection = {
  title: "What do I do - ? -",
  subTitle: "Frenzied CS:GO GAMER WHO ALSO WANTS TO EXPLORE EVERY TECH STACK AVAILABLE OUT THERE. Yeah, lots of ground to cover!",
  skills: [
    emoji("⚡ Develop highly interactive User Interfaces for your web and mobile applications"),
    emoji("⚡ Love to develop and work with Python and Javascript!"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML - CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Blockchain - Solidity",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Android Development",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL - MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Application Development (React-Native)",  
      progressPercentage: "90%"  
    },
    {
      Stack: "Blockchain",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "AWS",
      progressPercentage: "70%"
    },
  ]
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "React Native Developer Intern",  
      company: "Speridian Technologies",
      companylogo: require("./assets/images/speridian.png"),
      date: "June 2018 – July 2018",
      desc: "Develop and deploy mobile application for iOS and Android using the React-native Framework.",
      descBullets: [
        "Highlights - Among the many, developed a custom Camera module for a project, assisted in developing a Geolocation indicators for the clients subscribed to a User.",
        "Highlights - Also developed a dedicated UI-based Image Gallery for shots taken from the camera."
      ]
    },
    {
      role: "React Native Developer Intern",   
      company: "Codeaxes Digital Solutions",
      companylogo: require("./assets/images/codeaxesLogo.png"),
      date: "May 2020 – Present",
      desc: "Design and Develop mobile application for iOS and Android using the React-native Framework.",
      descBullets: [
        "Highlights - Developed a Music Streaming application with provision for user to upload their own content." ,
        "Highlights - Designed a Payment Gateway application for users to pay using UPI. (Notable Technologies used - UPI API, RazorPay)"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "deepgosalia1", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "MY TODO LIST - ",
  subtitle: "SOME OF THE THINGS THAT I AM CURRENTLY WORKING ON / LEARNING, OR PLAN TO WORK ON NEXT ",
  projects: [
    {
      name: "AWS (Amazon Web Services)",
      desc: "I have recently taken a deep dive course into the ever-growing arena of Cloud and its services. With the current suite of services offered by AWS it has piqued my interest and I have already started my journey for AWS cloud practitioner!"
    },
    {
      name: "Cyber Security (Penetration Testing)",
      desc: "I have always been a fan of the Security wing. Infact security was the very primal reasons why I got myself into the field of Computer Engineering. Previously, I have worked on a research project for developing a key-exchange algorithm that can be implemented in electric substations."
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Publications with projects"),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Validity and Integrity check in Supply Chain Management using Blockchain",
      subtitle: "Published a technical Paper on a Blockchain powered Solution to Blood-Supply-Chain management to IJERT. Our project provides solution for many current scenario disadvantages ie. immense wastage of collected Blood Bags every year due to improper management. Secondly it also provides a safe and secure way for donor to trust the entities unerlying the system with a total transparency. A secure payment method is established for blood distribution using Smart Contracts. ",
      image: require("./assets/images/IJERTLOGO.png"),
      technologies: "Blockchain - Solidity, Ganache, Truffle; Javascript - React.js",
      footerLink: [
        { name: "Publication", url: "http://dx.doi.org/10.17577/IJERTV9IS020421" },
        { name: "Project Source Code", url: "https://github.com/pranavgor/Ethereum_Blockchain_BloodSupplyChain" },
      ]
    },
    {
      title: "Normalizing Text using Language Modelling based on Phonetics and String Similarity",
      subtitle: "Developed a language model that would normalize an SMS based text to its valid English text format. We used Google's BERT for masking the words to be predicted and further applied Phonetics and String Similarity to predict accurately. To know more, view the technical Paper at arXiv.org here.",
      image: require("./assets/images/nlp.png"),
      technologies: "Python",
      footerLink: [{ name: "Technical Paper on the subject", url: "https://arxiv.org/abs/2006.14116" }]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "More Projects",
  subtitle: "",

  blogs: [
    {
      url: "https://github.com/deepgosalia1/Sign-Language-Recognition-using-Sensors",
      title: "Sign Language Recognition using Sensors",
      description: "In this project, various techniques are explored for the classification of various signs from sensor data obtained using non-intrusive methods such as gloves or armbands. Various methods applied are LSTM, SVM, Logistic Regression, Artificial Neural Networks. To know the results visit the project repo.",
      technologies: "Python"
    },
    {
      url: "https://github.com/deepgosalia1/Stud-Buddy",
      title: "Student-Buddy",
      description: "An android app developed during the 24-hr College hackathon, aims to makes the life of a student easier. It features connectivity to firebase, students can engage in chatroom with teachers and other students, upload their assingments, set reminders and most importantly give their attendance online to the university platform. ",
      technologies: "Java (Android), Firebase"
    },
    {
      url: "https://github.com/deepgosalia1/Crime-Managment-System",
      title: "Crime-Management-System",
      description: "LOL. Sounds like an app that assists criminals, right? Actually, it is an extensive Java-SQL configured system, that helps keep track of criminals for police authorities. It also features a section where a whistleblower can report a crime (anonymously too!), happening at an instant and report immediately. ",
      technologies: "Java (NetBeans), MySQL"
    
    },
    {
      url: "https://github.com/deepgosalia1/StockTrain",
      title: "Stock-Trainer",
      description: "This Django-based group project, as the name suggests, helps the user to get training and an overview of the real world stock market. The Project features real world stocks along with live stock rates, and graphical display of stock price chart and history. A user can trade in the system using dummy currency provided.",
      technologies: "Python, Django, Javascript - HTML, CSS, BootStrap, Charts.js"
    },
    {
      url: "https://github.com/deepgosalia1/ExaminationCentreApp",
      title: "Examination Center App",
      description: "This Android app is designed to provide a dynamic seating arrangment for the students who are registered for a particular examination where number of availble rooms and facility constraints are already known. The registered student will directly be notified to reach the allotted room number/hall number for his examination",
      technologies: "Java (Android), Firebase"
    },
    {
      url: "https://github.com/deepgosalia1/Atlas",
      title: "Atlas Game Application",
      description: "This android game is an exact representation of the game 'Geography'! Player 1 inputs a location, and the computer will search for a location starting with the last letter of Player 1's word. It has multiple modes like 1-player, Multiplayer, Easy/Medium/Difficult too! Also you can always view the location each player enters on the special map feature provided in the Game.",
      technologies: "Java (Android), Google Maps Integration"
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "MORE ABOUT ME: ",
  // subtitle: "I HAVE RECENTLY STARTED COMPETITIVE CODING AND I AM ALREADY IN LOVE WITH IT. ALTHOUGH, I AM ALWAYS FLEXIBLE AND CAN EASILY ADJUST WITH ANY LAGUAGE I PREFER CODING IN PYTHON OVER OTHER LAGUAGES, I BELIEVE IT PROVIDES A SIMPLISTIC YET WHOLESOME APPROACH TO THE ENTIRE PROGRAMMING PARADIGM."),

  talks: [
    {
      title: "LeetCode - Competitive Coding(CC)",
      subtitle: "In my free time, I like to solve CC problems and try to devise, unique solution. The more I solve, the more I fail; and more I learn awesome yet never-ending stuff Python can do. Apparently, it never ceases to amaze me. Although I am flexible in working with any language, I prefer Python for coding, as it provides a simplistic yet wholesome approach to the entire programming paradigm.",
      event_url: "https://leetcode.com/deepgosalia1/"
    },
    {
      title: "CS:GO / CS 1.6",
      subtitle: "Who doesn't like the classic '1.6' !? Ofcourse, the more upgraded one - CS:GO is even more fun!. Add me up on steam -> deepgosalia1 "
    },
    {
      title: "Cricket Fan",
      subtitle: "Doesn't matter if i'm watching it on TV or playing myself, huge fan of the game Cricket!"
    }
  ]
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

// Po
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Please do connect! If my profile matches with you requirements or if you are a peer wanting to discuss some project/ideas to collaborate, My inbox is always open!",
  number: "+91-8767346704",
  email_address: "deepgosalia1@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "deepgosalia1"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
