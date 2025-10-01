"use client"
import { useState } from "react"

interface NavigationProps {
  overviewRef: React.RefObject<HTMLElement>
  chooseRoleRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
}

export function Navigation({ overviewRef, chooseRoleRef, aboutRef }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>, sectionId: string) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="fixed top-0 right-0 z-[60] p-6">
      <div className="flex items-center gap-6 bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border">
        <button
          onClick={() => scrollToSection(overviewRef, "overview")}
          className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
            activeSection === "overview" ? "text-primary" : "text-foreground"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection(chooseRoleRef, "choose-role")}
          className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
            activeSection === "choose-role" ? "text-primary" : "text-foreground"
          }`}
        >
          Choose Your Role
        </button>
        <button
          onClick={() => scrollToSection(aboutRef, "about")}
          className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
            activeSection === "about" ? "text-primary" : "text-foreground"
          }`}
        >
          About Us
        </button>
      </div>
    </nav>
  )
}
