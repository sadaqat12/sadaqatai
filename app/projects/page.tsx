import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sadaqat Ali - AI & Software Portfolio",
  description: "Explore Sadaqat Ali's portfolio of AI projects, machine learning applications, and full-stack development work.",
  openGraph: {
    title: "Projects Portfolio - Sadaqat Ali",
    description: "Explore Sadaqat Ali's portfolio of AI projects, machine learning applications, and full-stack development work.",
    type: "website",
  },
};

// Sample project data - replace with actual projects
const projects = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "Advanced conversational AI with natural language processing",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4", // project-1.mp4",
    techStack: ["React", "TypeScript", "OpenAI API", "Next.js"],
    githubUrl: "https://github.com/username/project-1",
  },
  {
    id: 2,
    title: "3D Visualization Tool",
    description: "Interactive 3D data visualization using Three.js",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4", // project-2.mp4",
    techStack: ["Three.js", "React", "WebGL", "D3.js"],
    githubUrl: "https://github.com/username/project-2",
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "Live data monitoring and analytics platform",
    thumbnail: "/project-thumbnails/placeholder.svg", // project-3.jpg",
    videoUrl: "/project-videos/placeholder.mp4", // project-3.mp4",
    techStack: ["React", "Node.js", "WebSocket", "Chart.js"],
    githubUrl: "https://github.com/username/project-3",
  },
  {
    id: 4,
    title: "Machine Learning Pipeline",
    description: "Automated ML workflow with model deployment",
    thumbnail: "/project-thumbnails/placeholder.svg", // project-4.jpg",
    videoUrl: "/project-videos/placeholder.mp4", // project-4.mp4",
    techStack: ["Python", "TensorFlow", "Docker", "FastAPI"],
    githubUrl: "https://github.com/username/project-4",
  },
  {
    id: 5,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative coding environment",
    thumbnail: "/project-thumbnails/placeholder.svg", // project-5.jpg",
    videoUrl: "/project-videos/placeholder.mp4", // project-5.mp4",
    techStack: ["React", "WebRTC", "Monaco Editor", "Socket.io"],
    githubUrl: "https://github.com/username/project-5",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Automated content creation with AI models",
    thumbnail: "/project-thumbnails/placeholder.svg", // project-6.jpg",
    videoUrl: "/project-videos/placeholder.mp4", // project-6.mp4",
    techStack: ["Next.js", "GPT-4", "Vercel AI SDK", "PostgreSQL"],
    githubUrl: "https://github.com/username/project-6",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
    </div>
  );
}