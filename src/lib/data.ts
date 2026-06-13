export const profile = {
  name: "Priyanshu Chaurasia",
  handle: "priyanshu-sde",
  role: "Backend & Full-Stack Software Engineer",
  tagline: "I build systems that scale — APIs, search engines, and the infra under them.",
  location: "Jaunpur, Uttar Pradesh, India",
  email: "priyanshu.sde@gmail.com",
  phone: "+91-7068451653",
  website: "https://priyanshusde.me",
  socials: {
    github: "https://github.com/Priyanshu-sde",
    linkedin: "https://linkedin.com/in/priyanshu-chaurasia/",
  },
  formspree: "https://formspree.io/f/mgvzekwd",
};

export const about = [
  "Information Technology undergrad who lives in the terminal and thinks in systems.",
  "I like the unglamorous parts of software — recommendation engines, hybrid search, media pipelines, zero-downtime migrations — the stuff that has to actually work at scale.",
  "Competitive programmer, open-source tinkerer, and a perpetual computerphile chasing how things work under the hood.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  points: { text: string; tags: string[] }[];
};

export const experience: Experience[] = [
  {
    company: "Inseconds",
    role: "Software Engineering Intern",
    period: "Jan 2026 — Present",
    location: "Remote",
    current: true,
    points: [
      {
        text: "Engineered a personalized reel recommendation engine using a weighted scoring model (interest match, quality, recency), delivering 20+ tailored reels per request with interaction tracking and interest profiling.",
        tags: ["PostgreSQL", "Redis", "Recommender"],
      },
      {
        text: "Built a hybrid candidate search engine — pgvector (HNSW) + tsvector at a 70/30 semantic/full-text blend — with Voyage AI embeddings and Claude Haiku NL query parsing, giving recruiters sub-second natural-language search over 1024-dim resume embeddings.",
        tags: ["pgvector", "Voyage AI", "Claude Haiku", "Search"],
      },
      {
        text: "Reduced cloud storage costs by 40%–95% with S3-based media compression pipelines on FFmpeg; offloaded processing to AWS Lambda, removing EC2 CPU overhead.",
        tags: ["FFmpeg", "AWS Lambda", "S3"],
      },
      {
        text: "Scaled email infra from Gmail SMTP to AWS SES — 500 → 50K daily emails — with Handlebars templates, OTP workflows, and HMAC-based unsubscribe.",
        tags: ["AWS SES", "Handlebars"],
      },
      {
        text: "Orchestrated RBAC-based PostgreSQL migrations to unify HR systems: data backfill, session consolidation, zero-downtime rollout, no service disruption.",
        tags: ["PostgreSQL", "RBAC", "Migrations"],
      },
      {
        text: "Migrated a legacy Node.js backend to TypeScript with zero downtime — typed models, Zod validation, structured error handling, standardized APIs.",
        tags: ["TypeScript", "Zod", "Node.js"],
      },
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  period: string;
  live?: string;
  repo?: string;
  extra?: { label: string; href: string };
  stack: string[];
  points: string[];
  accent: "accent" | "cyan" | "magenta";
  fallbackCmd?: string[];
};

export const projects: Project[] = [
  {
    name: "Effulgence",
    blurb: "Production college-fest platform serving 3000+ users.",
    period: "Dec 2025",
    live: "https://effulgence26.in",
    accent: "accent",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS S3", "Firebase FCM", "Google OAuth"],
    points: [
      "Led a production REST API with 50+ endpoints: event registration, team workflows, QR-based attendance, and 5-role RBAC.",
      "JWT + Google OAuth with Redis-backed sessions, OTP email verification, 5-tier rate limiting, and HMAC-signed QR codes.",
      "Deployed on a VM via PM2 cluster mode — Redis caching, S3 presigned URLs, FCM push, Helmet/Zod hardening.",
    ],
  },
  {
    name: "SkyDeploy",
    blurb: "Cloud-native deployment platform with CI/CD for GitHub projects.",
    period: "Jul 2025",
    live: "https://skydeploy.priyanshu.online/",
    repo: "https://github.com/Priyanshu-sde/SkyDeploy",
    accent: "cyan",
    stack: ["TypeScript", "React", "Tailwind", "AWS S3", "Redis", "Vite", "Node.js"],
    points: [
      "Microservices architecture (upload, build, handler) enabling CI/CD for 20+ GitHub-hosted projects, serving 5+ active users.",
      "Cut deployment time 40% with Redis queues, S3 storage, and chunked file streaming — deploys under two minutes.",
    ],
  },
  {
    name: "GitDrip",
    blurb: "Published CLI that automates 90% of GitHub commit workflows with AI.",
    period: "Jun 2025",
    repo: "https://github.com/Priyanshu-sde/GitDrip",
    extra: { label: "npm", href: "https://www.npmjs.com/package/gitdrip" },
    accent: "magenta",
    fallbackCmd: [
      "$ npm install -g gitdrip",
      "added 1 package in 2s",
      "$ gitdrip --auto",
      "✓ staged 4 files",
      "✓ AI commit: \"feat: add rate limiter to API\"",
      "✓ pushed to origin/main",
      "$ gitdrip daemon --cron '0 * * * *'",
      "⟳ daemon running — 25+ repos watched",
    ],
    stack: ["Node.js", "Commander.js", "OpenAI", "GitHub API", "Cron", "npm"],
    points: [
      "Cross-platform CLI automating 90% of commit workflows — AI commit messages, auto-staging, and push.",
      "Secure SSH key management, OpenRouter API, and a background daemon for scheduled commits across 25+ repos.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  cmd: string;
  skills: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    cmd: "ls ~/languages",
    skills: [
      { name: "C++", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "C", level: 80 },
    ],
  },
  {
    category: "Backend",
    cmd: "ls ~/backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT / Auth", level: 85 },
    ],
  },
  {
    category: "Frontend",
    cmd: "ls ~/frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Databases",
    cmd: "ls ~/databases",
    skills: [
      { name: "PostgreSQL / Prisma", level: 88 },
      { name: "MongoDB", level: 84 },
      { name: "Redis", level: 86 },
      { name: "pgvector", level: 78 },
    ],
  },
  {
    category: "DevOps & Cloud",
    cmd: "ls ~/devops",
    skills: [
      { name: "AWS (EC2, S3, SES, Lambda)", level: 82 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 82 },
      { name: "NGINX / DNS / Certbot", level: 78 },
      { name: "Cloudflare R2", level: 75 },
    ],
  },
  {
    category: "Tools & CS Core",
    cmd: "ls ~/toolbox",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Linux CLI / SSH", level: 88 },
      { name: "System Design", level: 80 },
      { name: "DSA / Algorithms", level: 90 },
    ],
  },
];

export const stats = [
  { label: "CodeChef", value: "1695", sub: "rating", href: "https://www.codechef.com/users/" },
  { label: "Codeforces", value: "1388", sub: "rating", href: "https://codeforces.com/" },
  { label: "LeetCode", value: "1656", sub: "rating", href: "https://leetcode.com/" },
  { label: "DSA Solved", value: "500+", sub: "problems", href: undefined },
];

export const awards = [
  {
    title: "Winner — Hack the Web (Round 1)",
    detail: "Open Source Hackathon, KNIT · 2025",
  },
  {
    title: "Competitive Programmer",
    detail: "CodeChef 1695 · Codeforces 1388 · LeetCode 1656",
  },
  {
    title: "500+ DSA Problems Solved",
    detail: "Dynamic Programming, Trees, Graphs, and more across platforms",
  },
];

export const education = {
  school: "Kamla Nehru Institute of Technology, Sultanpur",
  degree: "B.Tech — Information Technology",
  period: "2023 — 2027",
  location: "Sultanpur, Uttar Pradesh",
};
