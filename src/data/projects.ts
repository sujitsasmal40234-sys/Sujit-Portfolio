export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tools: string;
  image: string;
  live?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Poster Design",
    category: "Marketing & Advertising",
    description: "A powerful message into a single, unforgettable image.",
    fullDescription: "Turning complex ideas into bold, single-frame designs that demand immediate attention.",
    tools: "Adobe Photoshop • Adobe Illustrator • Canva",
    image: "/images/poster design showcase.png",
    live: "https://poster-showcase.vercel.app/",
    github: "https://github.com/sujitsasmal40234-sys/poster-showcase",
    featured: true
  },
  {
    id: 2,
    title: "Logo Design",
    category: "Branding",
    description: "Complete brand redesign for tech startup",
    fullDescription: "Developed comprehensive brand identity including logo, color palette, typography system, and brand guidelines for a growing tech company.",
    tools: "Figma • Adobe Illustrator • Brand Strategy",
    image: "/images/placeholder.svg",
    live: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Brochures Design",
    category: "Marketing & Advertising",
    description: "Short-form animation for social media",
    fullDescription: "Created engaging motion graphics for social media campaigns, including intros, transitions, and promotional content that increased engagement by 40%.",
    tools: "After Effects • Premiere Pro • Cinema 4D",
    image: "/images/placeholder.webp",
    live: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Flyers Design",
    category: "Marketing & Advertising",
    description: "Analytics dashboard for marketing team",
    fullDescription: "Designed and developed a comprehensive analytics dashboard showing real-time campaign performance, user metrics, and ROI tracking.",
    tools: "React • TypeScript • D3.js • Node.js",
    image: "/images/react.webp",
    live: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Ads Design",
    category: "Marketing & Advertising",
    description: "Template system for consistent branding",
    fullDescription: "Created 50+ customizable templates for social media posts ensuring brand consistency across all platforms while reducing design time by 70%.",
    tools: "Canva • Photoshop • Design Systems",
    image: "/images/placeholder.svg",
    live: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "Banners Design",
    category: "Marketing & Advertising",
    description: "3D product visualization and animation",
    fullDescription: "Produced high-quality 3D animations for product launch campaign, showcasing features and benefits through dynamic visual storytelling.",
    tools: "Blender • After Effects • Cinema 4D",
    image: "/images/placeholder.webp",
    live: "#",
    github: "#",
    featured: true
  },
  {
    id: 7,
    title: "Profile Visuals Design",
    category: "Marketing & Advertising",
    description: "3D product visualization and animation",
    fullDescription: "Produced high-quality 3D animations for product launch campaign, showcasing features and benefits through dynamic visual storytelling.",
    tools: "Blender • After Effects • Cinema 4D",
    image: "/images/placeholder.webp",
    live: "#",
    github: "#",
    featured: true
  },
  {
    id: 8,
    title: "Business Card, Visiting Card, ID Card and Letterhead Design",
    category: "Branding",
    description: "3D product visualization and animation",
    fullDescription: "Produced high-quality 3D animations for product launch campaign, showcasing features and benefits through dynamic visual storytelling.",
    tools: "Blender • After Effects • Cinema 4D",
    image: "/images/placeholder.webp",
    live: "#",
    github: "#",
    featured: true
  },
  {
    id: 9,
    title: "Web Page Design",
    category: "UI/UX Design",
    description: "3D product visualization and animation",
    fullDescription: "Produced high-quality 3D animations for product launch campaign, showcasing features and benefits through dynamic visual storytelling.",
    tools: "Blender • After Effects • Cinema 4D",
    image: "/images/placeholder.webp",
    live: "#",
    github: "#",
    featured: true
  }
];
