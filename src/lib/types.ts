export type Locale = "fr" | "en";

export type ProjectLinks = {
  repo?: string;
  demo?: string;
  doc?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  summary: string;
  tags: string[];
  problem: string;
  solution: string;
  architecture: string;
  diagram?: string;
  stack: string[];
  highlights: string[];
  results: string[];
  learnings: string[];
  image?: {
    src: string;
    alt?: string;
  };
  security?: string[];
  impact?: string;
  status?: string;
  links?: ProjectLinks;
};

export type SkillCategory = {
  name: string;
  level: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
  security: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  details: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  topics: string[];
  status?: string;
};

export type OpenDataIdea = {
  title: string;
  description: string;
  status: string;
  tags: string[];
};

export type PortfolioContent = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    headline: string;
  };
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
    ctaProjects: string;
    ctaContact: string;
    badges: string[];
  };
  navigation: {
    home: string;
    projects: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
    blog: string;
  };
  about: {
    title: string;
    pitch: string;
    contribution: string[];
    securityByDesign: string[];
    values: string[];
  };
  featuredProjects: string[];
  projects: Project[];
  openData: {
    title: string;
    items: OpenDataIdea[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  experience: {
    title: string;
    roles: Experience[];
  };
  academic: {
    title: string;
    subtitle: string;
    education: Education[];
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    copyEmail: string;
    emailCta: string;
    linkedinCta: string;
    githubCta: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      hint: string;
      providerNote: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
};
