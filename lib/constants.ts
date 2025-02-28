import { User, Briefcase, Wrench, LineChart, Mail } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  url?: string;
  github?: string;
  color: string;
  active?: boolean;
  // Adding technology categories for consistent badge styling
  technologyCategories?: {
    [key: string]: string; // Maps technology name to its category
  };
}

// Navigation links for sidebar with Lucide icons
export const navLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Wrench },
  { href: "#experience", label: "Experience", icon: LineChart },
  { href: "#contact", label: "Contact", icon: Mail },
];

// Define layout patterns for the bento grid
export const projectLayoutPatterns = [
  "md:col-span-3 lg:col-span-6", // index 0
  "md:col-span-3 lg:col-span-6", // index 1
  "md:col-span-6 lg:col-span-8", // index 2
  "md:col-span-6 lg:col-span-4", // index 3
  "md:col-span-3 lg:col-span-4", // index 4
  "md:col-span-3 lg:col-span-8", // index 5
];

// Badge styling based on technology category
export const getBadgeClassByCategory = (category: string): string => {
  const baseClass = "px-2 py-1 text-xs rounded-md";

  switch (category) {
    case "frontend":
      return `${baseClass} bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200`;
    case "backend":
      return `${baseClass} bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200`;
    case "design":
      return `${baseClass} bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200`;
    case "professional":
      return `${baseClass} bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200`;
    default:
      return `${baseClass} bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200`;
  }
};

export const projects: Project[] = [
  {
    id: "apolloz",
    title: "Apolloz",
    description:
      "A full-service digital agency offering web development and digital marketing solutions for businesses.",
    longDescription:
      "A full-service digital agency offering web development and digital marketing solutions for businesses.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "API Development",
    ],
    url: "https://www.apolloz.se/",
    color: "blue",
    active: true,
    technologyCategories: {
      "Next.js": "frontend",
      React: "frontend",
      TypeScript: "frontend",
      "Tailwind CSS": "frontend",
      "Node.js": "backend",
      "API Development": "backend",
    },
  },
  {
    id: "pizzeria-angela",
    title: "Pizzeria Angela",
    description:
      "A restaurant website for an authentic Italian pizzeria, featuring their menu and information.",
    longDescription:
      "Welcome to Pizzeria Angela – Your ultimate destination for authentic pizza goodness!...",
    technologies: ["Astro", "HTML", "CSS", "JavaScript"],
    url: "https://www.pizzeriaangela.se/",
    color: "blue",
    active: true,
    technologyCategories: {
      Astro: "frontend",
      HTML: "frontend",
      CSS: "frontend",
      JavaScript: "frontend",
    },
  },
  {
    id: "fordonsteamet",
    title: "Fordonsteamet",
    description:
      "An automotive service website providing comprehensive vehicle care and maintenance solutions.",
    longDescription:
      "Welcome to Fordonsteamet – Where your vehicle meets its match in care and expertise! Their website is your digital gateway to comprehensive automotive services tailored for your utmost satisfaction.",
    technologies: ["WordPress", "Elementor", "UI Design"],
    url: "https://fordonsteamet.se/",
    color: "green",
    technologyCategories: {
      WordPress: "design",
      Elementor: "design",
      "UI Design": "design",
    },
  },
  {
    id: "genesis-project",
    title: "Genesis Project",
    description:
      "A showcase of web development skills using HTML and CSS/SASS, demonstrating aesthetic design principles.",
    longDescription:
      "Just launched: Genesis Project! A showcase of what can be achieved with the elegance of HTML and the power of CSS (SASS).",
    technologies: ["HTML", "CSS", "SASS", "GitHub"],
    url: "https://genesis-proj.netlify.app/",
    color: "purple",
    technologyCategories: {
      HTML: "frontend",
      CSS: "frontend",
      SASS: "frontend",
      GitHub: "backend",
    },
  },
  {
    id: "sundsgarden-bar",
    title: "Sundsgården Bar",
    description:
      "A digital portal to nightlife culture, created as a school project showcasing web design skills.",
    longDescription:
      "Welcome to 'Sundsgården Bar' - An innovative project that marries the timeless allure of social gatherings with the cutting-edge possibilities of the digital world.",
    technologies: ["HTML", "CSS", "GitHub"],
    url: "https://main--sundsgardenbar.netlify.app/",
    color: "amber",
    technologyCategories: {
      HTML: "frontend",
      CSS: "frontend",
      GitHub: "backend",
    },
  },
  {
    id: "react-quiz-game",
    title: "React Quiz Game",
    description:
      "An interactive quiz application built with React and Firebase, offering engaging trivia challenges.",
    longDescription:
      "Welcome to React Quiz Game – Your ultimate destination for the most engaging and fun quiz games!",
    technologies: [
      "React.js",
      "React Router",
      "Firebase",
      "Tailwind CSS",
      "Vite",
      "NoSQL",
    ],
    url: "https://react-quiz-game-weld.vercel.app/",
    color: "red",
    technologyCategories: {
      "React.js": "frontend",
      "React Router": "frontend",
      Firebase: "backend",
      "Tailwind CSS": "frontend",
      Vite: "frontend",
      NoSQL: "backend",
    },
  },
  {
    id: "hornet-ebbepark",
    title: "Kafé Hörnet Ebbepark",
    description:
      "A modern café website built with Next.js and React, showcasing their sandwich menu and services.",
    longDescription:
      "Söker du en god och prisvärd smörgåsrestaurang i Linköping?...",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://www.hornetebbepark.se/",
    color: "yellow",
    active: true,
    technologyCategories: {
      "Next.js": "frontend",
      React: "frontend",
      TypeScript: "frontend",
      "Tailwind CSS": "frontend",
    },
  },
  {
    id: "aromatic-sweden",
    title: "Aromatic Sweden",
    description:
      "A business website for a perfume machine leasing company, showcasing their innovative scent dispensers.",
    longDescription:
      "Introducing Aromatic Sweden – A revolutionary approach to ambient scenting for businesses!...",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
    ],
    url: "https://www.aromaticswe.se/",
    color: "indigo",
    active: true,
    technologyCategories: {
      "Next.js": "frontend",
      React: "frontend",
      JavaScript: "frontend",
      "Responsive Design": "frontend",
      "UI/UX": "design",
    },
  },
  {
    id: "torvinge-bil",
    title: "Torvinge Bil",
    description:
      "A comprehensive automotive marketplace and service center website for a Swedish car dealership.",
    longDescription:
      "Welcome to Torvinge Bil - one of Linköping's premier marketplaces for vehicles and automotive services...",
    technologies: ["WordPress", "Elementor", "UI Design"],
    url: "https://www.torvingebil.se/",
    color: "cyan",
    active: true,
    technologyCategories: {
      WordPress: "design",
      Elementor: "design",
      "UI Design": "design",
    },
  },
];

export const frontendSkills = [
  "HTML",
  "CSS",
  "SASS/SCSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Router",
  "Next.js",
  "Astro",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "Web Performance",
  "SEO",
];

export const backendSkills = [
  "Node.js",
  "Express.js",
  "EJS",
  "API Development",
  "SQL",
  "NoSQL",
  "Authentication",
  "Firebase",
  "Supabase",
  "Git",
  "GitHub",
  "SSH",
  "Docker",
  "Linux Operating System",
];

export const designSkills = [
  "Figma",
  "WordPress",
  "Elementor",
  "Adobe Photoshop",
  "Adobe Lightroom",
];

export const professionalSkills = [
  "Agile Methodology",
  "System Administration",
  "Google Ads",
];
