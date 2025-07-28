import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Headshot */}
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

          {/* Hero Content */}
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/projects" 
                className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md"
              >
                View Projects
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="inline-block px-8 py-3 bg-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-300 hover:scale-105 transition-all duration-200 shadow-md"
              >
                Download Résumé
              </a>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}