'use client'

export function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-0 left-0 z-[100000] bg-white p-2">
        <a
          href="#main-content"
          className="inline-block px-4 py-2 text-sm font-semibold text-white bg-maximax-pink rounded-md focus:outline-none focus:ring-2 focus:ring-maximax-cyan focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <a
          href="#main-navigation"
          className="inline-block ml-2 px-4 py-2 text-sm font-semibold text-white bg-maximax-cyan rounded-md focus:outline-none focus:ring-2 focus:ring-maximax-pink focus:ring-offset-2"
        >
          Skip to navigation
        </a>
        <a
          href="#footer"
          className="inline-block ml-2 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-maximax-cyan focus:ring-offset-2"
        >
          Skip to footer
        </a>
      </div>
    </div>
  )
}