import { NavLinksType } from "./types";

export enum MacButton {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
}

export const MAC_BUTTON_ORDER = [
  MacButton.RED,
  MacButton.YELLOW,
  MacButton.GREEN,
] as const;

export const terminalConsts = {
    developer: 'developer:~$',
    skills: 'skills.map((skill) => skill.level)',
    profile: 'developer.profile',
    projects: 'git checkout projects'
}

export const techStack = {
    react:'React',
    node:'Node.js',
    javascript:'Javascript',
    html:'HTML5',
    css:'CSS3',
    aws:'AWS',
    github: 'Github'
}

export const UserProfileInfo = [
    "I'm a Full Stack Developer with 3+ years of experience building web applications. I specialize in React, Next.js, Node.js, AWS.",
    "My journey in web development started when I built my first website during college. Since then, I've worked with startups and established companies to create scalable, user-friendly applications.",
    "I'm passionate about clean code, performance optimization, and creating intuitive user experiences. When I'm not coding, you can find me exploring new technologies and expanding my skill set."
]

export const UserDescription = 'The story behind the code - personal journey, professional experience, and what drives me as a developer.';

export const SkillsDescription = "I've worked with a wide range of technologies across the full stack, with expertise in modern JavaScript frameworks, backend systems, and cloud infrastructure.";

export const ProjectsDescription = "A collection of my recent projects and applications. Each project represents a unique challenge and opportunity to explore different technologies and solutions.";

export enum SectionId {
  HERO = "hero",
  SKILLS = "skills",
  PROJECTS = "projects",
  ABOUT = "about",
  BLOG = "blog",
  CONTACT = "contact",
}

export const links: NavLinksType[] = [
  { id: SectionId.HERO, label: "_home", hasIcon: true, iconName: "hero" },
  { id: SectionId.SKILLS, label: "_skills", hasIcon: true, iconName: "skills" },
  { id: SectionId.PROJECTS, label: "_projects", hasIcon: false, iconName: "default" },
  { id: SectionId.ABOUT, label: "_about", hasIcon: false, iconName: "default" },
  { id: SectionId.BLOG, label: "_blog", hasIcon: false, iconName: "default" },
  { id: SectionId.CONTACT, label: "_contact", hasIcon: false, iconName: "default" },
];


