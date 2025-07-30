"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";

export default function Home() {
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Wordwise",
      description: "AI writing assistant for sales teams with personalization and email optimization",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/363ee9d6b7784dbdb11d0b47709175f9?sid=d2c5a7ac-5db3-4ec9-9fb1-7f1656494846",
    },
    {
      id: 2,
      title: "SnapConnect",
      description: "AI-powered social travel app with ephemeral sharing and intelligent travel assistance",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/0da6d95097ab4392b9f619a5faa16b46?sid=5bc3b84c-edce-4f35-aad5-06e1204912e9",
    },
    {
      id: 3,
      title: "Service Call Manager",
      description: "Desktop app for managing appliance repairs with AI-powered workflow automation",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/cba9b665b5ca49979a89bfda5fbcd362?sid=37466228-6f68-4daa-95d5-0379531b2a2c",
    },
    {
      id: 4,
      title: "PoliseeAI",
      description: "AI-powered platform that transforms complex legislation into personalized impact reports",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/00f16966df254e9ba1ec6d5f6a30818c?sid=c24fa744-019f-45e4-bcbc-459e28569406",
    },
    {
      id: 5,
      title: "Cricket 3D",
      description: "Realistic 3D cricket game with batting, bowling, fielding mechanics and AI-powered gameplay",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/4dafa3b7cdc845909b4f32a6b516c362?sid=5ba015dd-230c-4717-92ed-7aa809c239aa",
    },
    {
      id: 6,
      title: "ADempiere Modernization",
      description: "Modern REST API and AI Agent for open-source Enterprise Resource Planning system",
      thumbnail: "/project-thumbnails/placeholder.svg",
      videoUrl: "/project-videos/placeholder.mp4",
      embedUrl: "https://www.loom.com/embed/fb77758267da4fafbfc143833fdf3436?sid=50b50db4-d8ab-4589-8e0b-bff6decba401",
    },
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: "🧠",
      bgColor: "bg-purple-50",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "LLMs", "Prompt Engineering"],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      bgColor: "bg-green-50",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      bgColor: "bg-orange-50",
      skills: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS"],
    },
    {
      title: "Data & Databases",
      icon: "📊",
      bgColor: "bg-purple-50",
      skills: ["PostgreSQL", "Supabase", "Firebase","Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      bgColor: "bg-blue-50",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Monitoring"],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      bgColor: "bg-pink-50",
      skills: ["React Native", "iOS", "Expo", "Mobile UI/UX"],
    },
    {
      title: "AI Infrastructure",
      icon: "🤖",
      bgColor: "bg-indigo-50",
      skills: ["LangChain", "N8N", "Model Monitoring"],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      bgColor: "bg-yellow-50",
      skills: ["Claude Code", "Cursor", "Task-Master","Git", "GitHub", "VS Code", "Postman", "Slack"],
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "AI-First Engineer | Challenger",
      company: "Gauntlet AI",
      period: "Jun 2025 - Present",
      description: "Completing an intensive 10-week AI engineering sprint (80-100 hrs/week), combining 3 weeks of remote workshops with 7 weeks on-site in Austin, TX",
      highlights: [
        "Designing and deploying end-to-end AI applications, delivering weekly 'gauntlet' challenges",
        "Collaborating with a hand-picked cohort of top-tier engineers and mentors",
        "Mastering prompt engineering, API orchestration, and AI-first software best practices",
      ],
    },
    {
      title: "Chief Operating Officer",
      company: "Bargain House Appliances LLC",
      period: "Jan 2021 - Present",
      description: "Spearheaded the successful operation of the family appliance business, driving a close to 3x increase in sales",
      highlights: [
        "Implemented innovative strategies that drove 3x sales growth through operational optimization",
        "Launched an online ordering platform and expanded to a second location",
        "Transformed logistics from paperwork and Excel to sophisticated POS and inventory management solution",
        "Proven ability to drive growth, optimize operations and deliver results in a competitive market",
      ],
    },
    {
      title: "Cloud Security Engineering Intern",
      company: "Nationwide",
      period: "May 2021 - Jul 2021",
      description: "Worked with Data Analytics team to enhance dashboards and add additional functionalities",
      highlights: [
        "Enhanced data visualization dashboards with advanced analytics features",
        "Collaborated with cross-functional teams to improve security monitoring capabilities",
        "Gained hands-on experience with enterprise-level cloud security tools and practices",
      ],
    },
    {
      title: "Cloud Security Engineering Intern",
      company: "Nationwide",
      period: "May 2020 - Aug 2020",
      description: "Built a monitoring and alert system for the existing Vaucanson system using AWS services",
      highlights: [
        "Developed AWS-based monitoring system saving developers' time and preventing monetary losses",
        "Updated UI for flask web app with improved security and containerization",
        "Updated Docker and Kubernetes configurations with analytical insights for CB team",
        "Technologies: Python, AWS CloudWatch, Lambda, X-Ray, EC2, SNS, Docker, Kubernetes, GitHub",
      ],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "The Ohio State University",
      period: "Aug 2019 - May 2020",
      description: "Assisted students in the lab with various problems that arise during coursework",
      highlights: [
        "Assisted students in the lab with various programming problems during coursework",
        "Held office hours to assist students with Java assignments",
        "Graded Java labs and projects, providing constructive feedback",
      ],
    },
    {
      title: "Applications Development Intern",
      company: "Nationwide",
      period: "May 2019 - Aug 2019",
      description: "Worked on the Personal Lines Transformation Team to modernize legacy systems",
      highlights: [
        "Utilized PolicyCenter, Guidewire's SaaS, to ensure compliance with various states' laws",
        "Assisted in PLT's efforts to move from legacy environments to the cloud",
        "Completed story cards and enhanced company goals in an Agile team environment",
        "Technologies: GOSU, XML, Git, PolicyCenter, QualityCenter, and SQL",
      ],
    },
    {
      title: "IT Intern",
      company: "Ohio Industrial Commission",
      period: "Dec 2018 - Apr 2019",
      description: "Built multiple Java Graphical User interfaces to improve operational efficiency",
      highlights: [
        "Built multiple Java Graphical User interfaces to assist managers in task efficiency",
        "Developed tools that streamlined internal processes and improved productivity",
        "Gained hands-on experience with enterprise Java application development",
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
    } catch {
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
                  src="/images/headshot.jpg"
                  alt="Sadaqat Ali"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
                <a 
                  href="#about" 
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Me
                </a>
                <a 
                  href="#projects" 
                  className="inline-block px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-md text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects
                </a>
                <a 
                  href="#skills" 
                  className="inline-block px-8 py-3 bg-gray-600 text-white font-medium rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-200 shadow-md text-center sm:col-span-2 lg:col-span-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills & Experience
                </a>
                <a 
                  href="/SadaqatAli.pdf" 
                  download
                  className="inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-md text-center"
                >
                  Download Resume
                </a>
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-200 shadow-md text-center sm:col-span-2 lg:col-span-1"
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
                I&apos;m an AI-First Engineer currently participating in Gauntlet AI&apos;s intensive challenge program, where I&apos;m mastering the art of building cutting-edge AI applications. 
                With a unique blend of technical expertise and business acumen, I&apos;ve successfully driven 3x growth as COO of a family business while pursuing my passion for technology.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Currently pursuing my Master&apos;s in Computer Science at Georgia Tech, I bring hands-on experience from cloud security internships at Nationwide, 
                where I built AWS-based monitoring systems and enhanced data analytics platforms. My Bachelor&apos;s in Computer Science & Engineering from The Ohio State University, 
                combined with a minor in Business, provides me with a holistic approach to solving complex problems.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Through the Gauntlet AI program, I&apos;m pushing the boundaries of what&apos;s possible with artificial intelligence, 
                designing and deploying end-to-end AI solutions while collaborating with top-tier engineers. My goal is to leverage this expertise 
                to build innovative, intelligent applications that create real-world impact.
              </p>
            </div>
          </div>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm p-1 overflow-hidden">
                      <Image 
                        src="/images/georgiatechlogo.jpg" 
                        alt="Georgia Tech" 
                        width={56} 
                        height={56} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">Master of Science in Computer Science</h4>
                    <p className="text-gray-700 font-medium">Georgia Institute of Technology</p>
                    <p className="text-gray-600">Aug 2025</p>
                    <p className="text-gray-600 text-sm mt-2">Specialization: Machine Learning</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm p-1 overflow-hidden">
                      <Image 
                        src="/images/ohiostatelogo.jpg" 
                        alt="Ohio State" 
                        width={56} 
                        height={56} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science & Engineering</h4>
                    <p className="text-gray-700 font-medium">The Ohio State University</p>
                    <p className="text-gray-600">Dec 2020</p>
                    <p className="text-gray-600 text-sm mt-1">Minor in Business</p>
                  </div>
                </div>
              </div>
            </div>
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
                embedUrl={(project as any).embedUrl}
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
            <p className="text-gray-600 text-center mb-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A comprehensive toolkit for building intelligent, scalable, and innovative solutions across
              the full spectrum of modern technology.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Technical Expertise
            </h3>
            
            
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
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Available for Opportunities Card - Full Width */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm mb-12 animate-fade-in">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Available for Opportunities</h3>
            <p className="text-gray-600">
              Graduating from Gauntlet AI in August 2025, ready for exciting AI engineering roles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side - Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none bg-white`}
                    placeholder="Tell me about your project, idea, or opportunity..."
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
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    isContactSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right side - Contact Info Cards */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Email Card */}
                <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:ali568osu@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">ali568osu@gmail.com</a>
                    <p className="text-sm text-gray-500">Send me a message anytime</p>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a href="https://linkedin.com/in/alisadaqat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">/in/alisadaqat</a>
                    <p className="text-sm text-gray-500">Connect with me professionally</p>
                  </div>
                </div>

                {/* GitHub Card */}
                <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <a href="https://github.com/sadaqat12" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">@sadaqat12</a>
                    <p className="text-sm text-gray-500">Check out my code</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Columbus, OH</p>
                    <p className="text-sm text-gray-500">Available for opportunities!</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Ready to Innovate Card - Full Width */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-2">Ready to Innovate?</h3>
            <p className="text-gray-300 mb-6">Let&apos;s build the future with AI together</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const form = element.querySelector('form');
                  if (form) {
                    const firstInput = form.querySelector('input');
                    if (firstInput) {
                      (firstInput as HTMLInputElement).focus();
                    }
                  }
                }
              }}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
