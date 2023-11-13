export interface IJobExperience {
  Title: string;
  Period: string;
  Company: string;
  Subtitle: string;
  Items: IJobItem[];
}

export interface IJobItem {
  Title: string;
  Notes: string[];
}

export const MyHistory: IJobExperience[] = [
  {
    Title: "Lead Software Engineer",
    Period: "10.2019 to Current - Full Time",
    Company: "Corbel Technologies",
    Subtitle:
      "Led a team of three developers in the design and development of bespoke software applications for diverse industries, including legal, healthcare, building maintenance, and car rental sectors.",
    Items: [
      {
        Title: "Rental Management PWA (SIXT Australia)",
        Notes: [
          "Architected and developed a Progressive Web App (PWA) using React, TypeScript, and .Net (C#) for SIXT Car Rentals Australia, enhancing their rental process.",
          "Integrated features such as digital signatures, vehicle photos and car condition reporting.",
          "Successfully managed the application's performance, currently facilitating 10,000 monthly rentals and serving 30 locations across Australia.",
          "Deployed and maintained the app on Azure with CosmosDB (Mongo API) and Azure Blob Storage, handling over 10TB of images and attachments annually.",
        ],
      },
      {
        Title: "Hybrid Mobile Application for Facilities Management",
        Notes: [
          "Architected and developed a multi-tenant hybrid mobile application for iOS, Android, and Web platforms, using React, React Native, TypeScript, and C#. This application was designed for a facilities management and maintenance provider to streamline their workflow-enabled work orders and purchase orders.",
          "The application efficiently processed approximately 600-1000 orders per month, significantly improving the management of complex operational workflows.",
          "Implemented in-browser messaging protocols to enable the Progressive Web App (PWA) to detect its operation within a native mobile app. This feature allowed for seamless integration of push notifications and utilization of native app functionalities through the web app interface.",
          "Ensured a flexible user experience by enabling the web app to revert to native web functions when operated in a standard desktop browser.",
        ],
      },
    ],
  },
  {
    Title: "Software Engineer",
    Period: "08.2016 to 10.2019 - Full Time",
    Company: "Corbel Technologies",
    Subtitle:
      "Engaged in collaborative software development for multiple Australian law firms, focusing on enhancing matter management systems. Specialized in building custom APIs on Azure, key in integrating on-premises services with cloud platforms, and facilitating the technological advancement of legal services.",
    Items: [
      {
        Title: "Internal Case Management Portal for Legal Firms",
        Notes: [
          "Co-Developed a user-friendly internal case management portal, which integrated with existing case management software. It was tailored for legal firms to monitor staff workloads and progress.",
          "Utilized React with Redux for the initial build, later upgrading the application to TypeScript in 2019 for improved team collaboration.",
          "The portal mirrored similar functionalities to Jira but was specifically adapted for the unique operational needs of law firms, significantly improving internal case management processes.",
          "Implemented a feature for managing attachments, utilizing Azure Blob Storage, and incorporated MongoDB for additional data and comments related to internal records.",
        ],
      },
    ],
  },
];
