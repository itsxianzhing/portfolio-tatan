// =========================================================
//  constants/data.js  —  All static site data lives here
// =========================================================

export const SITE_META = {
  name: 'Fathan Mulyasa H.',
  role: 'Full-Stack Developer',
  tagline: 'Building scalable solutions with a focus on clean code and user experience.',
  email: 'fathanmh26@gmail.com',   // ← replace with real email
  github: 'https://github.com/itsxianzhing',
  instagram: 'https://instagram.com/itsxianzhing',
  linkedin: 'https://www.linkedin.com/in/fathan-mulyasa-h-599470371/',
  x: 'https://x.com/itsxianzhing'
};

// ---------------------------------------------------------
//  Navigation
// ---------------------------------------------------------

export const NAV_LINKS = [
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'projects', label: 'PROJECT', href: '#projects' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

// ---------------------------------------------------------
//  Tech Stack / Arsenal
// ---------------------------------------------------------

export const TECH_STACK = [
  // Frontend
  { id: 'react', label: 'React', category: 'Frontend', icon: '⚛️' },
  { id: 'tailwind', label: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
  { id: 'framer', label: 'Framer Motion', category: 'Frontend', icon: '🎞️' },
  { id: 'flutter', label: 'Flutter', category: 'Mobile', icon: '📱' },
  // Backend
  { id: 'laravel', label: 'Laravel', category: 'Backend', icon: '🔴' },
  { id: 'livewire', label: 'Livewire 3', category: 'Backend', icon: '⚡' },
  { id: 'node', label: 'Node.js', category: 'Backend', icon: '🟢' },
  // Database
  { id: 'mysql', label: 'MySQL', category: 'Database', icon: '🐬' },
  // AI / Tooling
  { id: 'cursor', label: 'Cursor', category: 'AI Tools', icon: '🖱️' },
  { id: 'gemini', label: 'Gemini', category: 'AI Tools', icon: '♊' },
  { id: 'claude', label: 'Claude', category: 'AI Tools', icon: '🤖' },
  { id: 'git', label: 'Git', category: 'DevOps', icon: '🌿' },
];

// ---------------------------------------------------------
//  About / Terminal lines
// ---------------------------------------------------------

export const TERMINAL_LINES = [
  { type: 'prompt', content: 'whoami' },
  { type: 'output', content: 'fathan-mulyasa — Fresh Graduate Full-Stack Developer' },

  { type: 'blank', content: '' },

  { type: 'prompt', content: 'cat journey.txt' },
  { type: 'output', content: 'Started learning web development with PHP and MySQL.' },
  { type: 'output', content: 'Built web applications through internship and personal projects.' },
  { type: 'output', content: 'Currently learning ASP.NET Core while improving my React and Laravel skills.' },
  { type: 'output', content: 'Always curious, always learning.' },

  { type: 'blank', content: '' },

  { type: 'prompt', content: 'cat goals.txt' },
  { type: 'output', content: '→ Grow as a Full-Stack Software Developer' },
  { type: 'output', content: '→ Build reliable and user-friendly applications' },
  { type: 'output', content: '→ Learn from experienced engineers and keep improving' },

  { type: 'blank', content: '' },

  { type: 'prompt', content: 'ls skills/' },
  { type: 'output', content: 'ASP.NET-Core/ Laravel/ React/ Next.js/ PostgreSQL/ Git/ Docker/' },
];
