import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Muhammad Helmi",
  lastName: "Jamil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Blockchain Developer",
  avatar: "/images/avatar.jpg",
  email: "scalablesolution7@gmail.com",
  location: "Asia/Kuala_Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Melayu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about blockchain, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/0xschizokidz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/m-helmi/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing the Future, One Block at a Time</>,
  featured: {
    display: true,
    title: <>Featured: <strong>DApp Planner</strong> - AI-Powered DApp Planning Tool</>,
    href: "/work/DApp-planner",
  },
  subline: (
    <>
      Blockchain developer and design engineer, building seamless user experiences and secure decentralized solutions.<br />
      After hours, I turn ideas into reality through code and creativity.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey, I&apos;m Muhammad Helmi, a blockchain developer and design enthusiast from Kuala Lumpur. I love solving tough problems and turning them into smooth, secure digital experiences. I&apos;m especially excited about where decentralized tech is heading.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance / Self-Employed",
        timeframe: "2022 - Present",
        role: "Blockchain Developer / AI Annotator",
        achievements: [
          <>
            Developed and deployed smart contracts for various blockchain projects, including DeFi protocols and NFT marketplaces.
          </>,
          <>
            Annotated and labeled large datasets for AI training, improving accuracy and efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Ferco Seating System",
        timeframe: "2012 - 2022",
        role: "Designer / Engineer",
        achievements: [
          <>
            Managed the Project Repository System (PRS) and oversaw technical documentation.
          </>,
          <>
           Prepared fabrication drawings and led product testing coordination.
          </>,
        ],
        images: [],
      },
      {
        company: "Artmatrix Manufacturing",
        timeframe: "2010 - 2012",
        role: "Senior Material Executive",
        achievements: [
          <>
            Handled procurement operations for critical materials and components.
          </>,
          <>
            Coordinated with vendors and technical teams to meet production timelines.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universiti Teknikal Malaysia Melaka",
        description: <>Studied Bachelor of Manufacturing Engineering
                      (Robotics and Automation).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Solidity",
        description: <>Expert in writing secure and efficient smart contracts for Ethereum and EVM-compatible blockchains.</>,
        images: [],
      },
      {
        title: "Smart Contracts",
        description: <>Developing and deploying decentralized applications with robust smart contract architecture.</>,
        images: [],
      },
      {
        title: "Foundry",
        description: <>Advanced testing and deployment framework for Ethereum development with comprehensive tooling.</>,
        images: [],
      },
      {
        title: "Blockchain Architecture",
        description: <>Designing scalable blockchain solutions and understanding consensus mechanisms.</>,
        images: [],
      },
      {
        title: "Ganache",
        description: <>Local blockchain development and testing environment for rapid prototyping.</>,
        images: [],
      },
      {
        title: "Consensus Algorithm",
        description: <>Deep understanding of various consensus mechanisms including PoW, PoS, and DPoS.</>,
        images: [],
      },
      {
        title: "Figma",
        description: <>Creating intuitive user interfaces and prototypes for decentralized applications.</>,
        images: [],
      },
      {
        title: "n8n",
        description: <>Workflow automation and integration platform for connecting blockchain services.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Backend development for blockchain applications and API integrations.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building modern web applications and DApp frontends with React framework.</>,
        images: [],
      },
      {
        title: "Web3",
        description: <>Integrating blockchain functionality into web applications with Web3 libraries.</>,
        images: [],
      },
      {
        title: "Github",
        description: <>Version control and collaborative development for blockchain projects.</>,
        images: [],
      },
      {
        title: "Decentralized Application (DApp)",
        description: <>Full-stack development of decentralized applications from smart contracts to user interfaces.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
