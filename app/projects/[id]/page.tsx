import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// This would typically come from a database or API
const projectsData = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "Advanced conversational AI with natural language processing capabilities, featuring real-time responses and context awareness.",
    longDescription: "This project showcases an advanced AI chat assistant built with cutting-edge natural language processing techniques. The system features real-time response generation, context-aware conversations, and seamless integration with various APIs.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["React", "TypeScript", "OpenAI API", "Next.js", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/username/project-1",
    challenges: [
      {
        challenge: "Managing conversation context across multiple turns",
        solution: "Implemented a sophisticated context window management system using vector embeddings"
      },
      {
        challenge: "Optimizing response time for better user experience",
        solution: "Used streaming responses and edge functions to reduce latency by 60%"
      },
      {
        challenge: "Handling rate limits and API failures gracefully",
        solution: "Built a robust retry mechanism with exponential backoff and user-friendly error messages"
      }
    ]
  },
  {
    id: 2,
    title: "3D Visualization Tool",
    description: "Interactive 3D data visualization using Three.js for complex datasets.",
    longDescription: "A powerful 3D visualization tool that transforms complex data into interactive, immersive experiences. Built with Three.js and WebGL, it enables users to explore multidimensional datasets through intuitive 3D interfaces.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["Three.js", "React", "WebGL", "D3.js", "TypeScript"],
    githubUrl: "https://github.com/username/project-2",
    challenges: [
      {
        challenge: "Rendering performance with large datasets",
        solution: "Implemented level-of-detail rendering and GPU instancing for smooth 60fps performance"
      },
      {
        challenge: "Creating intuitive 3D navigation controls",
        solution: "Designed custom camera controls with smooth transitions and user-friendly gestures"
      }
    ]
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "Live data monitoring and analytics platform with real-time updates.",
    longDescription: "A comprehensive analytics dashboard that provides real-time insights and monitoring capabilities. Features WebSocket connections for live data streaming and dynamic visualizations.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["React", "Node.js", "WebSocket", "Chart.js", "Redis"],
    githubUrl: "https://github.com/username/project-3",
    challenges: [
      {
        challenge: "Handling high-frequency data updates without UI lag",
        solution: "Implemented data throttling and React optimization techniques for smooth updates"
      },
      {
        challenge: "Scaling WebSocket connections for multiple users",
        solution: "Built a distributed WebSocket server architecture with Redis pub/sub"
      }
    ]
  },
  {
    id: 4,
    title: "Machine Learning Pipeline",
    description: "Automated ML workflow with model deployment and monitoring.",
    longDescription: "An end-to-end machine learning pipeline that automates model training, evaluation, and deployment. Features continuous integration for ML models and real-time performance monitoring.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["Python", "TensorFlow", "Docker", "FastAPI", "Kubernetes"],
    githubUrl: "https://github.com/username/project-4",
    challenges: [
      {
        challenge: "Automating model retraining with new data",
        solution: "Created a event-driven pipeline with automated data validation and model versioning"
      },
      {
        challenge: "Ensuring model reproducibility across environments",
        solution: "Containerized the entire pipeline with strict dependency management"
      }
    ]
  },
  {
    id: 5,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative coding environment with live cursor tracking.",
    longDescription: "A browser-based collaborative code editor that enables multiple developers to code together in real-time. Features syntax highlighting, live cursor tracking, and integrated video chat.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["React", "WebRTC", "Monaco Editor", "Socket.io", "CRDT"],
    githubUrl: "https://github.com/username/project-5",
    challenges: [
      {
        challenge: "Resolving concurrent edits without conflicts",
        solution: "Implemented Conflict-free Replicated Data Types (CRDT) for seamless collaboration"
      },
      {
        challenge: "Low-latency cursor synchronization",
        solution: "Used WebRTC data channels for peer-to-peer cursor updates"
      }
    ]
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Automated content creation platform powered by advanced AI models.",
    longDescription: "An intelligent content generation platform that leverages state-of-the-art AI models to create high-quality content. Features customizable templates and fine-tuned models for specific use cases.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    techStack: ["Next.js", "GPT-4", "Vercel AI SDK", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/username/project-6",
    challenges: [
      {
        challenge: "Maintaining content quality and relevance",
        solution: "Implemented multi-stage validation with human-in-the-loop feedback system"
      },
      {
        challenge: "Managing API costs at scale",
        solution: "Built intelligent caching and prompt optimization to reduce API calls by 40%"
      }
    ]
  }
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return {
      title: "Project Not Found | Sadaqat Ali",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Sadaqat Ali - Project Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Sadaqat Ali`,
      description: project.description,
      type: "website",
      images: [{
        url: project.thumbnail,
        width: 1200,
        height: 630,
        alt: project.title
      }]
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            {project.longDescription}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <video
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Summary */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Key Challenges & Solutions */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 mb-3">{item.challenge}</p>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Tech Stack */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* GitHub Link */}
            <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View Code
              </a>
            </section>

            {/* Navigation */}
            <section className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="border-t pt-8">
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  ← View All Projects
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}