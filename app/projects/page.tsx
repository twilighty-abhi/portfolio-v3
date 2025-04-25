'use client';

import MobileNavigation, { DesktopNavigation } from '@/components/Navigation';

export default function Projects() {
  return (
    <>
      <MobileNavigation />

      <div className="min-h-screen">
        <div className="flex justify-center">
          <main className="max-w-md w-full px-6 py-24">
            <div className="space-y-16">
              <header>
                <h1 className="text-2xl font-light text-gray-900 mb-1">Projects</h1>
                <p className="text-sm text-gray-400">My latest work</p>
              </header>

              <section className="space-y-12">
                <article className="group">
                  <div className="space-y-2">
                    <h2 className="text-base font-light text-gray-900">Blog</h2>
                    <p className="text-sm text-gray-500">A astro powered micro blogging site for personal needs.</p>
                    <a 
                      href="https://blog.abhiramnj.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 transition-colors duration-200 group"
                    >
                      Visit Unblurred Blog
                      <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>

              </section>

              <footer className="text-xs text-gray-400">
                <p>© 2025 Abhiram NJ</p>
              </footer>
            </div>
          </main>
          
          <DesktopNavigation />
        </div>
      </div>
    </>
  );
} 