import React from 'react';
import { motion } from 'motion/react';
import { DATA, ICONS } from './constants';

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

interface ProjectCardProps {
  project: typeof DATA.projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="glass-card overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 group">
    <div className="p-8 flex-1">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <ICONS.BarChart3 size={24} />
        </div>
        <div className="flex gap-3">
          <a href={project.github} className="text-slate-400 hover:text-slate-900 transition-colors">
            <ICONS.Github size={20} />
          </a>
          <a href={project.demo} className="text-slate-400 hover:text-slate-900 transition-colors">
            <ICONS.ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="heading-md mb-4">{project.title}</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">The Problem</p>
          <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
        </div>
        
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Impact & Results</p>
          <ul className="space-y-2">
            {project.results.map((res, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <ICONS.CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
    <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2">
      {project.tech.map(t => (
        <span key={t} className="badge bg-white">{t}</span>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">{DATA.name}</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
            Resume <ICONS.Download size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Hire
          </div>
          <h1 className="heading-lg mb-6">
            {DATA.headline}
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {DATA.valueProp}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-200">
              View Case Studies <ICONS.ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-slate-100/50">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Professional Summary</h2>
            <p className="text-2xl text-slate-800 leading-relaxed mb-8">
              {DATA.about.summary}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {DATA.about.strengths.map((strength, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ICONS.CheckCircle2 size={14} className="text-emerald-600" />
                  </div>
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card p-8">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ICONS.Cpu size={20} className="text-slate-400" /> Technical Arsenal
              </h3>
              <div className="space-y-6">
                {DATA.about.techStack.map((stack, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{stack.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map(item => (
                        <span key={item} className="badge bg-slate-50">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Featured Work</h2>
            <h3 className="heading-md">Proof of Impact</h3>
          </div>
          <p className="text-slate-500 max-w-md">
            Case studies focused on solving real business problems using data engineering, statistical modeling, and visualization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {DATA.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-8 my-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 text-center">Career Trajectory</h2>
          <h3 className="text-3xl font-bold mb-16 text-center">Experience & Ownership</h3>
          
          <div className="space-y-16">
            {DATA.experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500">{exp.period}</span>
                </div>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-slate-400 leading-relaxed flex items-start gap-3">
                      <span className="text-emerald-500 mt-1.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Validation</h2>
          <h3 className="heading-md">Certifications & Credentials</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {DATA.certifications.map((cert, i) => (
            <div key={i} className="glass-card p-6 flex items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400">
                <ICONS.Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{cert.name}</h4>
                <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-emerald-600 text-white rounded-[3rem] mx-4 md:mx-8 mb-12 text-center py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to drive growth with data?</h2>
          <p className="text-xl text-emerald-100 mb-12">
            I'm currently seeking Business Analyst opportunities where I can contribute to high-impact strategic initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:hello@alexchen.com" className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center gap-3">
              <ICONS.Mail size={24} /> Email Me
            </a>
            <a href="#" className="bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all flex items-center gap-3">
              <ICONS.Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Strategy / Suggestions Section (For the User) */}
      <Section className="border-t border-slate-200">
        <div className="bg-slate-900 text-slate-300 p-12 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <ICONS.Layout className="text-emerald-500" /> 10x Strategy: How to Win the BA Role
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-bold mb-4">Missing Proof Signals (Add These)</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><ICONS.CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <strong>Stakeholder Testimonials:</strong> Quotes from professors or internship managers about your "business sense."</li>
                <li className="flex gap-2"><ICONS.CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <strong>Process Maps:</strong> Visual flowcharts (LucidChart/Visio) showing "Before vs. After" of a project.</li>
                <li className="flex gap-2"><ICONS.CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <strong>Interactive Dashboards:</strong> Embed a public Tableau/Power BI link directly.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">What to Remove</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><ICONS.ArrowRight size={16} className="text-red-500 shrink-0" /> <strong>Generic Soft Skills:</strong> Don't list "Team Player." Instead, show it in the experience bullets.</li>
                <li className="flex gap-2"><ICONS.ArrowRight size={16} className="text-red-500 shrink-0" /> <strong>High School Achievements:</strong> Unless they are world-class, they distract from your professional profile.</li>
                <li className="flex gap-2"><ICONS.ArrowRight size={16} className="text-red-500 shrink-0" /> <strong>Passive Language:</strong> Replace "Responsible for" with "Owned," "Engineered," or "Optimized."</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-800">
            <h3 className="text-white font-bold mb-4">SEO Bio (Optimized for LinkedIn/Google)</h3>
            <p className="text-sm italic text-slate-400 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              {DATA.seo.bio}
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} {DATA.name}. Built for impact.</p>
      </footer>
    </div>
  );
}
