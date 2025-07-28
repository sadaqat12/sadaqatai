import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Experience | Sadaqat Ali - Full Stack & AI Developer",
  description: "Explore Sadaqat Ali's technical expertise in AI, machine learning, web development, cloud infrastructure, and professional experience.",
  openGraph: {
    title: "Skills & Experience - Sadaqat Ali",
    description: "Explore Sadaqat Ali's technical expertise in AI, machine learning, web development, cloud infrastructure, and professional experience.",
    type: "website",
  },
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: "🧠",
      bgColor: "bg-purple-50",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "NLP",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
      ],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      bgColor: "bg-green-50",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C++",
        "Go",
        "Rust",
        "SQL",
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      bgColor: "bg-orange-50",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "FastAPI",
        "GraphQL",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      title: "Data & Databases",
      icon: "📊",
      bgColor: "bg-purple-50",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Data Analysis",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      bgColor: "bg-blue-50",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "Linux",
        "Nginx",
        "Monitoring",
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      bgColor: "bg-pink-50",
      skills: [
        "React Native",
        "Flutter",
        "iOS",
        "Android",
        "Expo",
        "Mobile UI/UX",
      ],
    },
    {
      title: "AI Infrastructure",
      icon: "🤖",
      bgColor: "bg-indigo-50",
      skills: [
        "MLOps",
        "Model Deployment",
        "A/B Testing",
        "Data Pipelines",
        "Model Monitoring",
        "GPU Computing",
      ],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      bgColor: "bg-yellow-50",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter",
        "Postman",
        "Figma",
        "Slack",
        "Notion",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Technical Expertise
          </h2>
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
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
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
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Professional Experience
          </h2>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
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
        </section>

        {/* Additional Skills */}
        <section className="mt-16 text-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git/GitHub", "Agile/Scrum", "CI/CD", "Testing (Jest, Playwright)", "System Design", "Technical Writing", "Team Leadership", "Problem Solving"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}