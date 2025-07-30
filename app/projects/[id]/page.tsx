import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// This would typically come from a database or API
const projectsData = [
  {
    id: 1,
    title: "Wordwise",
    description: "AI writing assistant for sales teams with personalization and email optimization",
    longDescription: "Wordwise is a Grammarly-inspired writing assistant specifically tailored for sales professionals. It goes beyond basic grammar checking to help salespeople craft personalized, compelling emails and sales documents. The platform uses AI to suggest improvements that increase engagement, optimize messaging for specific prospects, and maintain consistent brand voice while personalizing content for each recipient.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/363ee9d6b7784dbdb11d0b47709175f9?sid=d2c5a7ac-5db3-4ec9-9fb1-7f1656494846",
    techStack: ["TypeScript", "Next.js", "Supabase", "OpenAI API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/sadaqat12/wordwise",
    challenges: [
      {
        challenge: "Creating sales-specific writing suggestions beyond basic grammar",
        solution: "Developed AI models trained on successful sales communications to provide context-aware suggestions for persuasion, personalization, and call-to-action optimization"
      },
      {
        challenge: "Real-time personalization without sacrificing performance",
        solution: "Implemented edge computing with streaming AI responses, allowing instant personalization suggestions while maintaining sub-second response times"
      },
      {
        challenge: "Balancing automation with authentic human voice",
        solution: "Created customizable tone profiles and guardrails that maintain the salesperson's authentic voice while enhancing effectiveness and fixing errors"
      }
    ]
  },
  {
    id: 2,
    title: "SnapConnect",
    description: "AI-powered social travel app with ephemeral sharing and intelligent travel assistance",
    longDescription: "SnapConnect is an innovative social media application designed specifically for travelers, fusing engaging ephemeral social features with AI-driven travel tools. The app combines social connectivity through ephemeral photo/video snaps, 24-hour stories, and real-time chat with powerful AI features including Caption Compass for creative captions, Travel Advisor chatbot for personalized tips and flight hacks, Local Insights for GPS-based recommendations, Story Snippet Generator for blog posts, and Culture & Cuisine Coach using computer vision. Built with React Native and Supabase, it leverages GPT-4 and GPT-4 Vision with RAG architecture to create an indispensable tool for modern travelers.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/0da6d95097ab4392b9f619a5faa16b46?sid=5bc3b84c-edce-4f35-aad5-06e1204912e9",
    techStack: ["React Native", "Expo", "TypeScript", "NativeWind", "Supabase", "PostgreSQL", "pgvector", "OpenAI GPT-4", "Edge Functions", "Zustand"],
    githubUrl: "https://github.com/sadaqat12/snapconnect",
    challenges: [
      {
        challenge: "Building real-time ephemeral content sharing with cross-platform consistency",
        solution: "Implemented Supabase Realtime for instant updates and designed a robust media handling system with automatic cleanup for ephemeral content, ensuring consistent experience across iOS and Android"
      },
      {
        challenge: "Integrating multiple AI features without compromising app performance",
        solution: "Utilized Supabase Edge Functions to offload AI processing, implemented smart caching strategies, and used pgvector for efficient RAG implementation, maintaining smooth app performance"
      },
      {
        challenge: "Creating context-aware AI responses for diverse travel scenarios",
        solution: "Built a sophisticated RAG system with specialized embeddings for travel knowledge, implemented GPS-based context injection, and fine-tuned prompts for culturally sensitive and location-aware AI responses"
      }
    ]
  },
  {
    id: 3,
    title: "Service Call Manager",
    description: "Desktop app for managing appliance repairs with AI-powered workflow automation",
    longDescription: "FlowGenius is an Electron desktop application designed for managing appliance repair service calls with AI-powered workflow automation using n8n integration. It features comprehensive service call management, AI-powered auto-tagging for appliance types, stale call detection, and daily service sheet generation with PDF export. The hybrid workflow system combines n8n's visual workflow designer with local fallbacks for reliability.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/cba9b665b5ca49979a89bfda5fbcd362?sid=37466228-6f68-4daa-95d5-0379531b2a2c",
    techStack: ["React 18", "TypeScript", "Electron 27", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL", "n8n", "Node.js"],
    githubUrl: "https://github.com/sadaqat12/flowgenius",
    challenges: [
      {
        challenge: "Integrating complex workflow automation in a desktop application",
        solution: "Embedded n8n server directly within the Electron app with visual workflow designer, enabling one-click workflow creation while maintaining sub-second response times"
      },
      {
        challenge: "Ensuring reliability when external services fail",
        solution: "Implemented a hybrid workflow system with intelligent fallbacks - when n8n or external services are unavailable, the app seamlessly switches to local processing to maintain core functionality"
      }
    ]
  },
  {
    id: 4,
    title: "PoliseeAI",
    description: "AI-powered platform that transforms complex legislation into personalized impact reports",
    longDescription: "Polisee is an open-source web application that democratizes access to legislative information by transforming complex bills into personalized impact reports for citizens. Using AI and Natural Language Processing, it helps users understand how proposed legislation will directly affect their lives through multi-step persona creation and AI-powered analysis. The platform captures citizen sentiment on bills, aggregating community feedback to drive civic engagement and provide lawmakers with valuable constituent insights.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/00f16966df254e9ba1ec6d5f6a30818c?sid=c24fa744-019f-45e4-bcbc-459e28569406",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase", "PostgreSQL", "OpenAI API", "Congress.gov API", "Vercel"],
    githubUrl: "https://github.com/PoliseeAI/polisee",
    challenges: [
      {
        challenge: "Making complex legislative text accessible to everyday citizens",
        solution: "Developed an AI-powered system that analyzes bills based on user personas, generating personalized impact reports with plain language explanations"
      },
      {
        challenge: "Capturing and mobilizing citizen sentiment on proposed legislation",
        solution: "Built sentiment analysis features that collect user feedback on bill impacts, aggregating community responses to drive civic engagement and provide lawmakers with constituent insights on how legislation affects real people"
      }
    ]
  },
  {
    id: 5,
    title: "Cricket 3D",
    description: "Realistic 3D cricket game with batting, bowling, fielding mechanics and AI-powered gameplay",
    longDescription: "Cricket 3D is a realistic 3D cricket game built with Three.js that provides an authentic cricket experience. The game features a 70-meter radius oval field with a 22-yard pitch, proper crease markings, wickets, and a boundary rope. It includes realistic environment with atmospheric lighting, shadows, and fog for depth perception. The game offers interactive controls with mouse-controlled camera orbit, zoom, and pan, along with keyboard-controlled player movement. It features comprehensive batting and bowling mechanics with various shot types and delivery styles, an AI-based fielding system with catch detection and dynamic positioning, and a complete scoring system tracking runs, wickets, and overs. Game modes include free play, target chase, and local multiplayer.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/4dafa3b7cdc845909b4f32a6b516c362?sid=5ba015dd-230c-4717-92ed-7aa809c239aa",
    techStack: ["JavaScript", "Three.js", "Node.js", "OrbitControls.js", "FBX/glTF", "WebGL", "CSS"],
    githubUrl: "https://github.com/sadaqat12/cricketai",
    challenges: [
      {
        challenge: "Creating realistic physics for ball movement and player interactions",
        solution: "Implemented custom physics calculations for ball trajectory, spin, bounce, and collision detection to ensure authentic cricket ball behavior and player responses"
      },
      {
        challenge: "Developing intelligent AI fielding system with natural movement",
        solution: "Built an AI-based fielding system with features like predictive positioning, catch detection algorithms, ground chase mechanics, and dynamic fielder coordination for realistic gameplay"
      },
      {
        challenge: "Optimizing 3D performance for smooth gameplay on web browsers",
        solution: "Utilized efficient rendering techniques, level-of-detail models, and WebGL optimizations to maintain 60fps performance while rendering the detailed cricket field, players, and animations"
      }
    ]
  },
  {
    id: 6,
    title: "ADempiere Modernization",
    description: "Modern REST API and AI Agent for open-source Enterprise Resource Planning system",
    longDescription: "ADempiere is a robust, open-source Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) system. This project showcases the development of a comprehensive REST API and an AI-powered chatbot agent that transforms ADempiere into a modern, API-first platform. The AI agent revolutionizes user interaction by allowing natural language commands to perform complex ERP tasks, eliminating the need to navigate the legacy UI. Built on a modular, multi-tier architecture, it provides flexible deployment options and supports multiple client interfaces including desktop, web, POS, mobile applications, and now conversational AI.",
    thumbnail: "/project-thumbnails/placeholder.svg",
    videoUrl: "/project-videos/placeholder.mp4",
    embedUrl: "https://www.loom.com/embed/fb77758267da4fafbfc143833fdf3436?sid=50b50db4-d8ab-4589-8e0b-bff6decba401",
    techStack: ["Java 11-17", "JAX-RS (Jersey)", "JWT", "OpenAPI 3.0", "PostgreSQL", "Oracle", "MySQL", "ZK Framework", "Swing", "Docker", "Gradle"],
    githubUrl: "https://github.com/sadaqat12/AdempiereV2",
    challenges: [
      {
        challenge: "Modernizing a Legacy System for API-First Integrations",
        solution: "Designed and implemented a comprehensive REST API using JAX-RS (Jersey), secured with JWT and fully documented with OpenAPI. This transformed ADempiere into a modern, API-first platform that can serve as a headless ERP/CRM backend for any modern frontend or external system."
      },
      {
        challenge: "Overcoming the Steep Learning Curve of Complex Legacy UI",
        solution: "Developed an AI-powered chatbot agent that allows users to perform key ERP actions through natural language commands. This eliminated the need to navigate the outdated and convoluted UI, making the system accessible to non-technical users and dramatically reducing training time from weeks to hours."
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
            {(project as any).embedUrl ? (
              <iframe
                src={(project as any).embedUrl}
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            ) : (
              <video
                src={project.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            )}
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
                  href="/#projects"
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