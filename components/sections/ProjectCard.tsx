"use client";

import Link from "next/link";
import Image from "next/image";
import { useAnalytics } from "@/lib/hooks/useAnalytics";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl?: string;
  delay?: number;
}

export function ProjectCard({ id, title, description, thumbnail, embedUrl, delay = 0 }: ProjectCardProps) {
  const { trackProjectView } = useAnalytics();
  
  return (
    <Link href={`/projects/${id}`} onClick={() => trackProjectView(title)}>
      <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Thumbnail Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <div className="relative w-full h-full">
            {embedUrl && id === 6 ? (
              // For ADempiere, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">ADempiere</div>
                  <div className="text-lg opacity-90">Modernization Demo</div>
                </div>
              </div>
            ) : embedUrl && id === 4 ? (
              // For PoliseeAI, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">🏛️ PoliseeAI</div>
                  <div className="text-lg opacity-90">Watch Demo</div>
                </div>
              </div>
            ) : embedUrl && id === 3 ? (
              // For Service Call Manager, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">🔧 Service Call</div>
                  <div className="text-lg opacity-90">Manager Demo</div>
                </div>
              </div>
            ) : embedUrl && id === 1 ? (
              // For Wordwise, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">✍️ Wordwise</div>
                  <div className="text-lg opacity-90">Sales Writing AI</div>
                </div>
              </div>
            ) : embedUrl && id === 5 ? (
              // For Cricket 3D, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">🏏 Cricket 3D</div>
                  <div className="text-lg opacity-90">Game Demo</div>
                </div>
              </div>
            ) : id === 2 ? (
              // For SnapConnect, show a custom thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-pink-600 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">✈️ SnapConnect</div>
                  <div className="text-lg opacity-90">Travel Social App</div>
                </div>
              </div>
            ) : (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}