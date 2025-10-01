"use client"

export function LeftSidebar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed top-0 left-0 z-50 p-6 transition-all duration-500 ease-in-out">
      <div
        onClick={scrollToTop}
        className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out cursor-pointer hover:bg-background/90 hover:scale-105"
      >
        <h2 className="font-serif text-sm font-bold text-primary tracking-wider">Breathing Rivers</h2>
      </div>
    </div>
  )
}
