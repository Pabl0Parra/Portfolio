import emoji from "react-easy-emoji";

export const greetings = {
  name: "Pablo Parra",
  title: "Hi all, I'm Pablo",
  description:
    "I'm a passionate Front End web developer with experience in JavaScript, React.js, Next.js, Vue.js & TypeScript",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "PablOParra",
};

export const contact = {};

export const socialLinks = {
  url: "https://PablOParra.github.io/",
  linkedin: "https://www.linkedin.com/in/pablo-parra-14488b239/",
  github: "https://github.com/Pabl0Parra",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND DEVELOPER WITH REACT & VUE FRAMEWORKS",
  data: [
    {
      title: "Front End Development",
      lottieAnimationFile:
        "https://assets6.lottiefiles.com/packages/lf20_eiubpejs.json",
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA's) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA's) & PWA in Vue.js"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "Nuxtjs",
          fontAwesomeClassname: "logos:nuxt",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Pinia",
          fontAwesomeClassname: "logos:pinia",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm",
        },
      ],
    },
    {
      title: "Backend",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("⚡ Experience working on cloud databases"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "logos:supabase",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
      ],
    },
  ],
};
export const SkillBars = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "100",
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Language: "Spanish",
    progressPercentage: "100",
  },
  {
    Language: "English",
    progressPercentage: "100",
  },
];

export const educationInfo = [
  {
    schoolName: "Georgia Piedmont Technical College, Atlanta (USA)",
    subHeader: "Associate Degree in Computer Programming",
    duration: "September 2001 - April 2003",
    desc: "Developed programming & analytical skills.",
    grade: "Grade A",
    descBullets: [
      "Spent considerable time testing applications and programs and correcting coding errors.",
      "Install, troubleshoot, and maintain information and computer systems",
    ],
  },
  {
    schoolName: "IT Academy - Barcelona Activa",
    subHeader: "Frontend React Developer",
    duration: "January 2022 - August 2022",
    desc: "Condensed, immersive education program in which I've learned React framework.",
    grade: "Grade A",
    descBullets: [
      "Learnt correct use of ES6, CSS, React, React Hooks, Redux & Firebase",
      "Mantain clean & organized projects",
      "Correct deployment on Netlify, Heroku & Vercel ",
    ],
  },
  {
    schoolName: "Ironhack",
    subHeader: "Frontend Vue Developer",
    duration: "August 2022 - October 2022",
    desc: "A very condensed, immersive education program in which I've learned Vue framework.",
    grade: "Grade A",
    descBullets: [
      "Learnt correct use of Vue, Pinia and Supabase",
      "Build apps with Vue",
      "Deploy those apps",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer internship",
    company: "IT Academy - Barcelona Activa",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665988301/ItAcademy_oxyylj.jpg",
    date: "Oct 2022 – Present",
    desc: "I worked as a frontend web developer for the IT Academy projects department, we are giving some issues daily & we have to find solutions for them.",
  },
  {
    role: "Maitre'D",
    company: "Hotel Oliva Balmes",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665995215/olivia_tfqxuj.png",
    date: "Jan 2018 – Nov 2021",
    desc: "I worked as F&B Manager at a 4*S in downtown Barcelona. My duties included managing the department staff, organizing every event & the different outlets, such as the restaurant, the pool bar & room service.",
  },
  {
    role: "Maitre'D",
    company: "Gran Hotel La Florida 5*S",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665995879/floridaHotel_xbyldx.png",
    date: "Jan 2017 - Jan 2018",
    desc: "Worked as F&B manager at a 5*S hotel in Barcelona. Duties included organizing the different outlets, managing the staff & resolve any issue arose during the service.",
  },
  {
    role: "Conference Banqueting Supervisor",
    company: "Hilton Hotels & Resorts",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665996103/hilton_vrljfk.png",
    date: "Jan 2013 - Nov 2016",
    desc: "Worked as a banqueting supervisor, my duties included organizing every event & meeting at one of the busiest conference hotels in Barcelona.",
  },
  {
    role: "Bar Manager",
    company: "Seabourn Cruise Line",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665996549/seabourn_avr6wx.jpg",
    date: "Jan 2013 - Nov 2016",
    desc: "Worked as bar manager for one of the best cruise ships in the world. My duties included managing all the bar outlets as well as the staff and dealing with any issue during the service",
  },
  {
    role: "Bar Manager",
    company: "Haven Lounge",
    companylogo:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1665996734/haven_wpo1qf.jpg",
    date: "May 2008 - Dec 2010",
    desc: "Worked as bar manager at a exclusive bar lounge in Miami Beach, my duties included ordering and receiving of stock, managing the staff & schedules, as well as overseeing the normal functioning of the business",
  },
];

export const projects = [
  {
    name: "Taifa Clothing Line",
    image:
      "https://res.cloudinary.com/dcwx2biey/image/upload/v1666030458/TODO_v00fet.png",
    desc: "E-commerce site that I built with React 18, Redux, NextJs, TypeScript, Firebase & payment with Stripe.",
    github: "https://github.com/Pabl0Parra/En_Ascuas_Forja",
    link: "https://papaya-griffin-a2aefa.netlify.app/",
  },
  {
    name: "Budget App",

    desc: "With Budget App, it's easy to find the cost of building a website, made with React",
    github: "https://github.com/Pabl0Parra/Budget_App_React_v3",
  },
  {
    name: "Star Wars Website Clone",
    desc: "A clone of the Star Wars site made with React",
    github: "https://github.com/Pabl0Parra/STAR-WARS-REACT-API",
  },
  {
    name: "Whale Done App",
    desc: "Keep all your task under one place, a ToDo app with Vue, Pinia, Supabase & Tailwind",
    github: "https://github.com/Pabl0Parra/ToDo-App-Vue3-Pinia-Supabase",
    link: "https://2-do.vercel.app/",
  },

  {
    name: "Circle Agency Static Website",
    desc: "A clone of a static website with pure CSS & HTML5",
    github:
      "https://github.com/https://github.com/Pabl0Parra/Circle-Marketing-Site/Django-ecommerce",
    link: "https://mycircle-agency.netlify.app/",
  },
  {
    name: "Shopping Cart",
    desc: "A simple shopping cart app made with pure",
    github: "https://github.com/Pabl0Parra/ToDo-App-Vue3-Pinia-Supabase",
  },
];

export const seoData = {
  title: "Pablo Parra",
  description: "A passionate Frontend Web Developer.",
  author: "Pablo Parra",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Pablo",
    "Pablo Parra",
    "Pabl0Parra",
    "Portfolio",
    "Pablo Portfolio ",
    "Pablo Parra Portfolio",
  ],
};
