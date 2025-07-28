"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";

export default function SinglePagePortfolio() {
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Projects data
  const projects = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "Advanced conversational AI with natural language processing",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
    {
      id: 2,
      title: "Computer Vision System",
      description: "Real-time object detection and image analysis platform",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
    {
      id: 3,
      title: "ML Data Pipeline",
      description: "Scalable data processing infrastructure for machine learning",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
    {
      id: 4,
      title: "NLP Analysis Tool",
      description: "Text analysis and sentiment detection application",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Time series forecasting and trend analysis system",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
    {
      id: 6,
      title: "AI Code Assistant",
      description: "Intelligent code completion and review system",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
    },
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: "🧠",
      bgColor: "bg-purple-50",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP", "TensorFlow", "PyTorch", "OpenAI API"],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      bgColor: "bg-green-50",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust", "SQL"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      bgColor: "bg-orange-50",
      skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "GraphQL", "REST APIs", "Tailwind CSS"],
    },
    {
      title: "Data & Databases",
      icon: "📊",
      bgColor: "bg-purple-50",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      bgColor: "bg-blue-50",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Nginx", "Monitoring"],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      bgColor: "bg-pink-50",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Mobile UI/UX"],
    },
    {
      title: "AI Infrastructure",
      icon: "🤖",
      bgColor: "bg-indigo-50",
      skills: ["MLOps", "Model Deployment", "A/B Testing", "Data Pipelines", "Model Monitoring", "GPU Computing"],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      bgColor: "bg-yellow-50",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Postman", "Figma", "Slack", "Notion"],
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "Gauntlet AI Challenger",
      company: "Gauntlet AI",
      period: "2024 - Present",
      description: "Building cutting-edge AI solutions and competing in advanced challenges",
      highlights: [
        "Developing autonomous AI agents for complex problem-solving",
        "Implementing state-of-the-art language models in production",
        "Collaborating with top AI researchers and engineers",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Corp",
      period: "2020 - 2024",
      description: "Led development of AI-powered applications and scalable systems",
      highlights: [
        "Architected microservices handling 10M+ requests daily",
        "Reduced ML model inference time by 60% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2018 - 2020",
      description: "Built modern web applications with focus on user experience",
      highlights: [
        "Developed React-based dashboards for data visualization",
        "Implemented real-time features using WebSocket connections",
        "Improved page load times by 40% through optimization",
      ],
    },
  ];

  // Contact form handlers
  const validateForm = (): boolean => {
    const newErrors: typeof formErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsContactSubmitting(true);
    setContactStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setContactStatus({ type: 'success', message: 'Thank you for your message! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
        setFormErrors({});
      } else {
        setContactStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setContactStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/headshot-placeholder.svg"
                  alt="Sadaqat Ali"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
                Sadaqat Ali
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-2">
                AI-First Developer & Problem Solver
              </p>
              <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl">
                Building innovative solutions at the intersection of AI and software engineering. 
                Passionate about creating elegant, scalable applications that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#projects" 
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-block px-8 py-3 bg-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-300 hover:scale-105 transition-all duration-200 shadow-md"
                >
                  Download Résumé
                </a>
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about leveraging AI to solve complex problems
            </p>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                I'm an AI-first developer with a passion for creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications. 
                With expertise in machine learning, full-stack development, and cloud infrastructure, I specialize in building scalable, intelligent systems that deliver tangible value.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Currently participating in the Gauntlet AI challenge, I'm pushing the boundaries of what's possible with artificial intelligence, 
                developing autonomous agents and advanced language model applications that solve complex problems across various domains.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                My approach combines technical excellence with creative problem-solving, always focusing on creating elegant solutions that are both powerful and user-friendly. 
                I believe in the transformative potential of AI and am committed to building technology that makes a positive impact.
              </p>
            </div>
          </div>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Journey</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                <h4 className="text-xl font-semibold text-gray-900">Gauntlet AI Challenger</h4>
                <p className="text-gray-600">2024 - Present</p>
                <p className="text-gray-700 mt-2">Competing at the forefront of AI innovation, developing cutting-edge solutions and autonomous systems.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full -translate-x-1/2"></div>
                <h4 className="text-xl font-semibold text-gray-900">Tech Innovation Journey</h4>
                <p className="text-gray-600">2018 - 2024</p>
                <p className="text-gray-700 mt-2">Built and scaled AI-powered applications, led engineering teams, and architected systems handling millions of requests.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full -translate-x-1/2"></div>
                <h4 className="text-xl font-semibold text-gray-900">Education & Foundation</h4>
                <p className="text-gray-600">Computer Science Background</p>
                <p className="text-gray-700 mt-2">Strong foundation in algorithms, data structures, and software engineering principles.</p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="/resume.pdf" 
              download
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work in AI, machine learning, and full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Skills & Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional journey
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Technical Expertise
            </h3>
            <p className="text-gray-600 text-center mb-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A comprehensive toolkit for building intelligent, scalable, and innovative solutions across
              the full spectrum of modern technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className={`${category.bgColor} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="font-semibold text-gray-900">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              Professional Experience
            </h3>
            
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-lg text-blue-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2 border ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Your name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2 border ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2 border ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
                  placeholder="Your message..."
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                )}
              </div>

              {contactStatus.type && (
                <div className={`p-4 rounded-lg ${
                  contactStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {contactStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isContactSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  isContactSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02]'
                }`}
              >
                {isContactSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Or reach out directly at:{' '}
                <a href="mailto:contact@sadaqat.ai" className="text-blue-600 hover:text-blue-700">
                  contact@sadaqat.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}