import emoji from "react-easy-emoji";

export const greetings = {
  name: "Pablo Parra",
  title: "Hi all, I'm Pablo",
  description:
    "I'm a passionate Front End web developer with experience in JavaScript, React.js, Next.js, Vue.js & TypeScript",
  resumeLink:
    "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
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
        "https://assets6.lottiefiles.com/packages/lf20_eiubpejs.json", // Path of Lottie Animation JSON File
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
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
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
        // ? Check README To get icon details
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
        // {
        //   skillName: "Nginx",
        //   fontAwesomeClassname: "logos:nginx",
        // },
        // {
        //   skillName: "Sentry",
        //   fontAwesomeClassname: "logos:sentry-icon",
        // },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};
// export const SkillBars = [
//   {
//     Stack: "Frontend/Design", //Insert stack or technology you have experience in
//     progressPercentage: "90", //Insert relative proficiency in percentage
//   },
//   {
//     Stack: "Backend",
//     progressPercentage: "70",
//   },
//   {
//     Stack: "Programming",
//     progressPercentage: "60",
//   },
// ];

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
];

export const experience = [
  {
    role: "Frontend Developer intership",
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
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
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
    desc: "E-commerce site that I built with React 18, Redux, NextJs, TypeScript, Firebase & Stripe.",
    github: "https://github.com/Pabl0Parra/En_Ascuas_Forja",
    link: "https://papaya-griffin-a2aefa.netlify.app/",
  },
  {
    name: "working here",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

// export const feedbacks = [
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
// ];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Pablo Parra",
  description: "A passionate Frontend Web Developer and Blockchain Developer.",
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
