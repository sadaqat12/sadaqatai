"use client";

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  delay?: number;
}

export function ProjectCard({ id, title, description, thumbnail, delay = 0 }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Thumbnail Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <div className="relative w-full h-full">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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