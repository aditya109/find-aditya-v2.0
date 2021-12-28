export const profile = {
  fullName: "Aditya Kumar",
  shortName: "Aditya",
  navigation: {
    navLinks: ["My work", "My skills", "My experience", "Ping me!"],
    socialHeaders: {
      logos: [
        {
          linkName: "twitter",
          logoLocations: "assets/twitter.svg",
        },
        {
          linkName: "github",
          logoLocations: "assets/github.svg",
        },
        {
          linkName: "linkedin",
          logoLocations: "assets/linkedin.svg",
        },
      ],
    },
  },
  hero: {
    mainContent: "Not Your Average Software Developer",
    downMarker: "👇",
    subtitle: "Meet Aditya Kumar",
    logo: "assets/hero-graphics.svg",
  },
  featured: {
    subtitle: "Featured Project",
    featuredTitle: "LitmusChaosHub",
    featuredDesc:
      "Built and maintained LitmusChaosHub which hosts chaos declarative and tunable experiments for Kubernetes.",
    image: "assets/litmus.png",
    gitlink: "https://github.com/litmuschaos/charthub.litmuschaos.io",
    weblink: "https://hub.litmuschaos.io/",
  },
  skills: [
    {
      skillTitle: "Backend Engineering",
      logo: "assets/backend.svg",
      desc: "Seasoned experience on Java Spring & Hibernate and Django-based Frameworks with PostgreSQL and Neo4J. Currently exploring .NET Core and other types of graph Databases like CosmosDB and ArangoDB.",
    },
    {
      skillTitle: "Frontend Development",
      logo: "assets/frontend.svg",
      desc: "Worked with mainly ReactJS, HTML, CSS/SASS and vanilla Javascript. Currently learning AngularJS.",
    },
    {
      skillTitle: "DevOps",
      logo: "assets/devops.svg",
      desc: "Certified Kubernetes Administrator with ample experience with Docker. Worked with Travis CI, Circle CI and Azure DevOps.",
    },
  ],
  portfolio: [
    {
      id: 1,
      projectTitle: "Upgrade Controller",
      subtitle: "Open Source Project",
      desc: "Python-framework for pushing smooth upgrades for an application being hosted in GitHub as a routine.",
      image: "/assets/upgrade1.png",
      gitlink: "https://github.com/aditya109/upgrade-controller",
      weblink: "",
    },
    {
      id: 2,
      projectTitle: "QR Code Generator",
      subtitle: "Freelancing Project",
      desc: "A simple NodeJS and ReactJS application which reads text and generates QR Code for it.",
      image: "/assets/qrcode.png",
      gitlink: "https://github.com/aditya109/qrcode-generator-app",
      weblink: "https://enigmatic-shore-57208.herokuapp.com/",
    },
    {
      id: 3,
      projectTitle: "Bank Reconcilation System Validator",
      subtitle: "Freelancing Project",
      desc: "Designed and implemented a ReactJS/Flask tool for LIC of India’s CRM Department which solved their business problem for cross-checking payment transactions by the bank of policyholders of filtering the non-redundant transactions and generate reports.",
      image: "/assets/brsv.png",
      gitlink: "https://github.com/aditya109/bank-reconcilation-statement-validator",
      weblink: "",
    },
    {
      id: 4,
      projectTitle: "Goodreads API Project",
      subtitle: "Freelancing Project",
      desc: "Built a high performance, shared memory algorithm to web scrape data for creation of datasets for running sentiment analysis in Python and PostgreSQL.",
      image: "/assets/WebCrawlerImage.jpg",
      gitlink: "https://github.com/aditya109/goodreads-api-project",
      weblink: "",
    },
  ],
  experience: [
    {
      companyName: "Gravity iLabs",
      locationCity: "Canberra",
      locationCountry: "AUS",
      designation: "Associate Software Developer",
      duration: "Oct ’20 – Present",
      jobDesc: [
        {
          desc: "Work on Architecture, Design and Implementation of Microservices and Microfrontends focusing on Event Driven Programming, Polyglot Persistence, Scalability and Multitenancy.",
          result: "",
        },
      ],
    },
    {
      companyName: "HoundIO",
      locationCity: "Remote",
      locationCountry: "IN",
      designation: "Full Stack Developer",
      duration: "March '20 - Sep '20",
      jobDesc: [
        {
          desc: "Developed Python applications and Jock-stack (MERN) web applications.",
          result: "",
        },
        {
          desc: "Designed and implemented a ReactJS/Flask tool for Life Insurance Corporation of India’s CRM Department which solved their business problem for cross-checking payment transactions by the bank of policyholders of filtering the non-redundant transactions and generate reports.",
          result:
            "Implemented hashing and multithreading on backend which reduced drastically reduced time to 90.6 % of prior runtime of legacy system in place.",
        },
        {
          desc: "Built a high performance, shared memory algorithm to web scrape data for creation of datasets for running sentiment analysis in Python and PostgreSQL.",
          result:
            "Used asynchronous framework to solve the problem and helped the client to further reduce the time of processing.",
        },
        {
          desc: "Performed on-site software maintenance for end users.",
          result: "",
        },
        {
          desc: "Communicated with clients to deliver quality software projects and followed up with them to ensure that the customer was happy with the work.",
          result: "",
        },
      ],
    },
    {
      companyName: "MayaData Inc.",
      locationCity: "San Jose",
      locationCountry: "US",
      designation: "Software Engineering Intern",
      duration: "July '19 - Feb '20",
      jobDesc: [
        {
          desc: "Created and maintained the product showcase website for CNCF Sandbox Project ‘Litmus’.",
          result: "",
        },
        {
          desc: "Implemented the frontend in ReactJS and wrote backend APIs in Golang for rendering frontend, running analytics, and feedback control.",
          result: "",
        },
        {
          desc: "Created and maintained the product showcase website for CNCF Sandbox Project ‘Litmus’.",
          result: "",
        },
        {
          desc: "Implemented CI in Travis.",
          result: "Increased the open source contribution by 137% in 8 months.",
        },
      ],
    },
    {
      companyName: "Bharat Sanchar Nigam Limited",
      locationCity: "Bhagalpur",
      locationCountry: "IND",
      designation: "Technical Intern",
      duration: "April ’18 – Jul ‘18",
      jobDesc: [
        {
          desc: "Implemented gRPC on Python for an experimental analytics server.",
          result: "Increased client handling capacity of the server by 10x.",
        },
      ],
    },
  ],
  callToAction: {
    callText: "Like what you see ?",
    actionText: "Connect with me !",
  },
};
