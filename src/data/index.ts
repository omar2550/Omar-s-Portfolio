import { StaticImageData } from "next/image";
import {
  css,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
  bootstrap,
  framermotion,
  sass,
  threejs,
  nextjs,
  portfolio,
  weather,
  vilaAgency,
  specialDesign,
  dashboard,
} from '@/assets'

export interface Technology {
  name: string;
  icon: StaticImageData;
}


export const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
  { name: "Bootstrap", icon: bootstrap },
  { name: "framer-motion", icon: framermotion },
  { name: "Sass", icon: sass },
  { name: "three.js", icon: threejs },
  { name: "Next.js", icon: nextjs },
]; 

import { FaHtml5, FaBootstrap, FaSass, FaJs, FaReact, FaGithub } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandThreejs, TbBrandFramerMotion, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { SiPostman, SiMui } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";

export const projects = [
  {
    title: "3D-Portfolio",
    description:
      "An interactive 3D portfolio website with smooth animations and optimized performance. Built using Three.js and Framer Motion, which helped me strengthen my skills in React, Next.js, TypeScript, and Tailwind CSS.",
    link: "https://github.com/omar2550/3D-Portfolio",
    liveLink: "https://3d-portfolio-2550.netlify.app/",
    image: portfolio,
    tech: [TbBrandNextjs, RiTailwindCssFill, BiLogoTypescript]
  },
  {
    title: "Portfolio",
    description:
      "My first portfolio template, where I explored how a portfolio should be structured and designed. I also integrated modern UI components from Aceternity UI and practiced building reusable layouts with Next.js, TypeScript, and Tailwind CSS.",
    link: "https://github.com/omar2550/Portfolio",
    liveLink: "https://portofolio-react-2550.netlify.app/",
    image: portfolio,
    tech: [TbBrandNextjs, RiTailwindCssFill, BiLogoTypescript, TbBrandThreejs, TbBrandFramerMotion]
  },
  {
    title: "Weather",
    description:
      "A weather application built with React.js, featuring real-time data from external APIs. I used React Hooks, Redux Toolkit, and Material UI for a clean and responsive design.",
    link: "https://github.com/omar2550/React-Weather",
    liveLink: "https://omar2550.github.io/React-Weather/",
    image: weather,
    tech: [FaReact, TbBrandRedux, SiPostman, SiMui]
  },
  {
    title: "Vila Agency",
    description:
      "A responsive agency website focused on improving my skills in Bootstrap, Sass, and JavaScript. This project helped me practice both design aesthetics and interactivity.",
    link: "https://github.com/omar2550/Villa-agency",
    liveLink: "https://omar2550.github.io/Villa-agency/",
    image: vilaAgency,
    tech: [FaBootstrap, FaSass, FaJs]
  },
  {
    title: "Special Design",
    description:
      "A customizable design template using HTML5, CSS3, and JavaScript. Users can change settings according to their preferences, with data saved in localStorage. This project enhanced my understanding of client-side storage.",
    link: "https://github.com/omar2550/Special-Design",
    liveLink: "https://omar2550.github.io/Special-Design/",
    image: specialDesign,
    tech: [FaHtml5, IoLogoCss3, FaJs]
  },
  {
    title: "Dashboard",
    description:
      "A static dashboard layout created with HTML5 and CSS3 to showcase my front-end design skills. This project allowed me to focus on layout design and clean UI development.",
    link: "https://github.com/omar2550/Tempalet_4",
    liveLink: "https://omar2550.github.io/Tempalet_4/",
    image: dashboard,
    tech: [FaHtml5, IoLogoCss3]
  },
];


export const features = [
  {
    feat: "Websites that work perfectly on all devices, from mobile to desktop.",
    Icon: MdDevices,
  },
  {
    feat: "I write clean, reusable, and well-structured code for better maintainability.",
    Icon: VscCode,
  },
  {
    feat: "I use modern frameworks and libraries like React, Next.js, and Tailwind CSS.",
    Icon: TbBrandNextjs,
  },
  {
    feat: "Strong problem-solving skills and ability to find creative solutions.",
    Icon: GiBrain,
  },
  {
    feat: "Experienced in version control with Git/GitHub and teamwork-friendly.",
    Icon: FaGithub,
  },
]

export const navItems = [
  {name: "About",link: "#about"},
  {name: "Skills",link: "#skills"},
  {name: "Projects",link: "#projects"},
  {name: "Features",link: "#features"},
  {name: "Contact",link: "#contact"},
]