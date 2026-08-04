import React from 'react';

// --- Types ---
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface JobExperience {
  id: string;
  role: string;
  company: string;
  logo: string;
  period: string;
  duration: string;
  timelinePeriod: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

// --- Mock Data ---
const statsData: StatCardProps[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: "2+",
    label: "Companies Worked",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    value: "40+",
    label: "Projects Completed",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "Team",
    label: "Collaboration",
  },
];

const experiencesData: JobExperience[] = [

{
    id: "softvence",
    role: "Frontend Developer",
    company: "Softvence Agency", 
    logo: "S",
    period: "Mar 2026 - July 2026",
    duration: "4 Months",
    timelinePeriod: "Mar 2026\n-\nJuly 2026",
    isCurrent: false,
    description: "Built responsive, cross-browser interfaces and custom interactive features using modern frontend technologies like React and Next.js, while collaborating with teams to deliver scalable solutions.", // নতুন টেক্সট অনুযায়ী সামারি
    responsibilities: [
      "Built responsive, cross-browser interfaces using JavaScript, React and Next.js with modern frontend best practices.",
      "Integrated REST APIs to power real-time, data-driven user experiences.",
      "Designed reusable, modular UI components, improving consistency and cutting development time.",
      "Collaborated with designers and developers to deliver scalable, production-ready frontend solutions.",
      "Developed custom interactive features using Wix Velo (Velo Code), extending functionality beyond standard templates."
    ],
    technologies: ["JavaScript", "React", "Next.js", "REST APIs", "Wix Velo"] 
  },
{
    id: "doict",
    role: "MERN Stack Developer",
    company: "Doict",
    logo: "D",
    period: "Sep 2025 - Feb 2026",
    duration: "6 Months",
    timelinePeriod: "Sep 2025\n-\nFeb 2026",
    isCurrent: false,
    description: "Worked as a MERN Stack Developer to build and maintain full-stack web applications. Developed scalable REST APIs using Node.js and Express, designed MongoDB databases, and created responsive frontend interfaces using React.js and Tailwind CSS.",
    responsibilities: [
      "Built and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Developed responsive and interactive user interfaces using React.js and Tailwind CSS.",
      "Designed and implemented RESTful APIs to manage smooth data flow between frontend and backend.",
      "Managed database schemas and optimized database queries using MongoDB.",
      "Optimized overall application performance and improved user experience.",
      "Collaborated with the team to maintain code quality and follow best practices."
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "REST API"]
  }
];

// Premium Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="group relative overflow-hidden bg-linear-to-br from-[#0a0f1a] to-[#0c1322] border border-slate-800/50 rounded-2xl p-6 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)]">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-linear-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="p-3 rounded-xl bg-linear-to-br from-orange-500/10 to-orange-600/5 mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-orange-500">{icon}</div>
      </div>
      <span className="text-3xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">{value}</span>
      <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">{label}</span>
    </div>
  </div>
);

// Technology Badge Component
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  const techColors: Record<string, string> = {
    React: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400",
    "Tailwind CSS": "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400",
    JavaScript: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400",
    Firebase: "from-orange-500/20 to-red-500/10 border-orange-500/30 text-orange-400",
    "REST API": "from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400",
    MongoDB: "from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400",
    "Express.js": "from-gray-500/20 to-slate-500/10 border-gray-500/30 text-gray-400",
    "Node.js": "from-lime-500/20 to-green-500/10 border-lime-500/30 text-lime-400",
    "Next.js": "from-white/20 to-slate-400/10 border-white/30 text-white",
  };

  const colors = techColors[tech] || "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400";

  return (
    <span className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r ${colors} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block`}>
      {tech}
    </span>
  );
};

export const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03050b] via-[#050a14] to-[#030712] text-slate-300 py-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Premium Header Section */}
        <div className="text-center mb-16">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-orange-400 tracking-wide uppercase">Professional Journey</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            My professional journey working with modern web technologies and real-world development teams.
          </p>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {statsData.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Timeline & Experience Container */}
        <div className="relative pl-0 md:pl-32">
          
          {/* Gradient Vertical Timeline Line */}
          <div className="hidden md:block absolute left-24 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />

          {/* Cards Stack */}
          <div className="space-y-12">
            {experiencesData.map((job, index) => (
              <div 
                key={job.id} 
                className="relative flex flex-col md:flex-row gap-4 md:gap-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                
                {/* Desktop Left Timeline Indicators */}
                <div className="hidden md:flex absolute -left-32 top-6 w-24 flex-col items-end text-right pr-4">
                  <span className="text-sm font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent whitespace-pre-line leading-tight">
                    {job.timelinePeriod}
                  </span>
                  <span className="mt-2 inline-block text-[10px] px-2 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-md font-medium backdrop-blur-sm">
                    {job.duration}
                  </span>
                </div>

                {/* Premium Timeline Node */}
                <div className="hidden md:block absolute left-[92px] top-7">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-[#030712] ring-4 ring-orange-500/20 z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500/20 animate-ping" />
                  </div>
                </div>

                {/* Mobile/Tablet Inline Date Badges */}
                <div className="flex md:hidden items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-orange-500">{job.period}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-md">
                    {job.duration}
                  </span>
                </div>

                {/* Premium Main Card */}
                <div className="flex-1 group">
                  <div className="relative bg-gradient-to-br from-[#0a0f1a] to-[#0c1322] border border-slate-800/50 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_40px_-15px_rgba(249,115,22,0.2)] overflow-hidden">
                    
                    {/* Card Gradient Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
                    
                    {/* Card Header */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6 relative z-10">
                      <div className="flex items-center gap-4">
                        {/* Premium Logo Container */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                          <div className="relative w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center text-2xl font-bold text-orange-500 border border-slate-700 shadow-lg">
                            {job.logo}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">{job.role}</h3>
                          <p className="text-sm font-semibold text-orange-500 mt-0.5">{job.company}</p>
                          
                          {/* Period Details */}
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Premium Status Badge */}
                      <span className={`text-[10px] tracking-wider font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
                        job.isCurrent 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-slate-500/10 text-slate-400 border border-slate-500/30'
                      }`}>
                        {job.isCurrent ? '● Currently Working' : '○ Past Position'}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 relative z-10">
                      {job.description}
                    </p>

                    <hr className="border-slate-800/50 my-6 relative z-10" />

                    {/* Key Responsibilities */}
                    <div className="mb-6 relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-lg bg-orange-500/10">
                          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-white tracking-wide">Key Responsibilities</h4>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-xs text-slate-400 leading-relaxed group/li">
                            <span className="text-orange-500 mr-2 select-none mt-0.5">▹</span>
                            <span className="group-hover/li:text-slate-300 transition-colors">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 rounded-lg bg-orange-500/10">
                          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-white tracking-wide">Tech Stack</h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};