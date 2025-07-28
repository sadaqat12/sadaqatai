import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sadaqat Ali - AI Engineer & Developer",
  description: "Learn about Sadaqat Ali's journey as an AI-first developer, Gauntlet AI challenger, and full-stack engineer building cutting-edge solutions.",
  openGraph: {
    title: "About Sadaqat Ali - AI Engineer & Developer",
    description: "Learn about Sadaqat Ali's journey as an AI-first developer, Gauntlet AI challenger, and full-stack engineer building cutting-edge solutions.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about leveraging AI to solve complex problems
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm Sadaqat Ali, an AI-First developer with a passion for building innovative solutions that push the boundaries of what's possible. 
              Currently participating in the Gauntlet AI challenger program, I specialize in creating intelligent applications that combine 
              cutting-edge machine learning with elegant user experiences. My approach focuses on practical problem-solving, leveraging the 
              latest AI technologies to deliver real-world value.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Journey & Experience
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Gauntlet AI */}
              <div className="relative flex items-start">
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-20">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Gauntlet AI Challenger</h3>
                      <span className="text-sm text-gray-500">2024 - Present</span>
                    </div>
                    <p className="text-gray-600">
                      Selected for the competitive Gauntlet AI program, working on cutting-edge AI projects
                      and collaborating with industry leaders to push the boundaries of artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Previous Experience */}
              <div className="relative flex items-start">
                <div className="absolute left-8 w-4 h-4 bg-gray-400 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-20">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Senior Software Engineer</h3>
                      <span className="text-sm text-gray-500">2020 - 2024</span>
                    </div>
                    <p className="text-gray-600">
                      Led development of scalable web applications and implemented machine learning solutions
                      for real-time data processing and predictive analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative flex items-start">
                <div className="absolute left-8 w-4 h-4 bg-gray-400 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-20">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Computer Science Degree</h3>
                      <span className="text-sm text-gray-500">2016 - 2020</span>
                    </div>
                    <p className="text-gray-600">
                      Bachelor's degree in Computer Science with focus on Artificial Intelligence and Machine Learning.
                      Graduated with honors and completed thesis on neural network optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Download Section */}
        <section className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to know more?
            </h2>
            <p className="text-gray-600 mb-8">
              Download my full résumé for a comprehensive overview of my experience and skills.
            </p>
            <Link
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Résumé
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}