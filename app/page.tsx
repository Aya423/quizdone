"use client"

import { useRef } from "react"
import Link from "next/link"

import { RiverCards } from "@/components/river-cards"
import { Navigation } from "@/components/navigation"
import { LeftSidebar } from "@/components/left-sidebar"
import { TeamCircles } from "@/components/team-circles"
import { useEffect, useState } from "react"

export default function Home() {
  const [showBackground, setShowBackground] = useState(false)
  const overviewRef = useRef<HTMLElement>(null)
  const chooseRoleRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6
      if (window.scrollY > heroHeight * 0.5) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation Component */}
      <Navigation overviewRef={overviewRef} chooseRoleRef={chooseRoleRef} aboutRef={aboutRef} />

      {/* Left Sidebar Component */}
      <LeftSidebar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2004.04.41_9bbb02de-1Fbcw5Yr6KkCHBchwEIKfMPnYMrZpi.mp4"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.5
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-balance mt-20">
            Breathing Rivers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            An awareness journey through the world's greatest rivers, discovering stories of life, civilization, and
            nature!
          </p>
          <div className="mt-8">
            <div className="inline-block animate-bounce">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Fixed Background Image with Animation */}
        <div
          className={`fixed inset-0 z-0 top-[60vh] transition-all duration-1000 ease-out ${
            showBackground ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img src="/lake-scene.jpg" alt="River landscape background" className="w-full h-full object-cover" />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/10" />
        </div>

        {/* Content sections with relative positioning */}
        <div className="relative z-10">
          {/* River Cards Section */}
          <section className="py-16 px-4 backdrop-blur-sm bg-background/60">
            <div className="container mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                Discover the Rivers
              </h2>
              <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
                Three great rivers that shaped civilizations and cultures across continents
              </p>
              <RiverCards />
            </div>
          </section>

          {/* Overview Section */}
          <section ref={overviewRef} id="overview" className="py-20 px-4 backdrop-blur-sm bg-muted/50 scroll-mt-24">
            <div className="container mx-auto max-w-4xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
                Welcome to Breathing Rivers, an immersive journey through the world's most magnificent waterways. Our
                platform brings together stories, facts, and experiences that showcase how rivers have shaped
                civilizations, cultures, and ecosystems throughout history. Explore the vital role these natural wonders
                play in our world today.
              </p>
            </div>
          </section>

          {/* Choose Your Role Section */}
          <section
            ref={chooseRoleRef}
            id="choose-role"
            className="py-20 px-4 backdrop-blur-sm bg-background/60 scroll-mt-24 relative overflow-hidden"
          >
            <div className="container mx-auto max-w-6xl relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
                Choose Your Role
              </h2>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12" style={{ perspective: "1200px" }}>
                <div
                  className="rounded-[2.5rem] p-[2px] transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
                    transform: "rotateY(15deg) rotateX(5deg) translateZ(-20px)",
                    transformStyle: "preserve-3d",
                    boxShadow:
                      "-20px 30px 60px rgba(0, 0, 0, 0.3), -10px 15px 30px rgba(0, 0, 0, 0.2), inset 5px 5px 15px rgba(255, 255, 255, 0.05)",
                    animation: "float 6s ease-in-out infinite",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(30px)"
                    e.currentTarget.style.boxShadow = "0 40px 80px rgba(0, 0, 0, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateY(15deg) rotateX(5deg) translateZ(-20px)"
                    e.currentTarget.style.boxShadow =
                      "-20px 30px 60px rgba(0, 0, 0, 0.3), -10px 15px 30px rgba(0, 0, 0, 0.2), inset 5px 5px 15px rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div className="flex flex-col items-center text-center p-8 rounded-[2.5rem] backdrop-blur-md bg-background/80 relative overflow-hidden group h-full">
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img src="/lake-scene.jpg" alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/60" />
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700 opacity-0 group-hover:opacity-100"
                      style={{ transform: "translateX(-100%) rotate(45deg)", transition: "all 0.7s" }}
                    />

                    <div className="relative z-10">
                      <div className="w-48 h-48 mb-6 relative overflow-hidden rounded-lg ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all flex items-center justify-center">
                        <img
                          src="/daily-routine.jpg"
                          alt="Adults"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Adults</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic">
                        "simulation of your activities!"
                      </p>
                      <Link
                        href="/adults"
                        className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-[2.5rem] p-[2px] transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(59, 130, 246, 0.5))",
                    boxShadow:
                      "0 35px 70px rgba(0, 0, 0, 0.35), 0 18px 35px rgba(0, 0, 0, 0.25), inset 0 5px 15px rgba(255, 255, 255, 0.05)",
                    animation: "float 6s ease-in-out infinite 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05) translateY(-16px)"
                    e.currentTarget.style.boxShadow = "0 45px 90px rgba(0, 0, 0, 0.45), 0 23px 45px rgba(0, 0, 0, 0.35)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = ""
                    e.currentTarget.style.boxShadow =
                      "0 35px 70px rgba(0, 0, 0, 0.35), 0 18px 35px rgba(0, 0, 0, 0.25), inset 0 5px 15px rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div className="flex flex-col items-center text-center p-8 rounded-[2.5rem] backdrop-blur-md bg-background/80 relative overflow-hidden group h-full">
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img src="/river-sunset.jpg" alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/60 to-primary/60" />
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700 opacity-0 group-hover:opacity-100"
                      style={{ transform: "translateX(-100%) rotate(45deg)", transition: "all 0.7s" }}
                    />

                    <div className="relative z-10">
                      <div className="w-48 h-48 mb-6 relative overflow-hidden rounded-lg ring-2 ring-accent/30 group-hover:ring-accent/60 transition-all flex items-center justify-center">
                        <img
                          src="/student-with-glasses.jpg"
                          alt="Student with glasses"
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }}
                        />
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Students</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic">
                        "how you treat the river?"
                      </p>
                      <Link
                        href="/students"
                        className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-[2.5rem] p-[2px] transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(245, 158, 11, 0.5), rgba(16, 185, 129, 0.5))",
                    transform: "rotateY(-15deg) rotateX(5deg) translateZ(-20px)",
                    transformStyle: "preserve-3d",
                    boxShadow:
                      "20px 30px 60px rgba(0, 0, 0, 0.3), 10px 15px 30px rgba(0, 0, 0, 0.2), inset -5px 5px 15px rgba(255, 255, 255, 0.05)",
                    animation: "float 6s ease-in-out infinite 1s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(30px)"
                    e.currentTarget.style.boxShadow = "0 40px 80px rgba(0, 0, 0, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateY(-15deg) rotateX(5deg) translateZ(-20px)"
                    e.currentTarget.style.boxShadow =
                      "20px 30px 60px rgba(0, 0, 0, 0.3), 10px 15px 30px rgba(0, 0, 0, 0.2), inset -5px 5px 15px rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div className="flex flex-col items-center text-center p-8 rounded-[2.5rem] backdrop-blur-md bg-background/80 relative overflow-hidden group h-full">
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img src="/lake-scene.jpg" alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/60 to-blue-500/60" />
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700 opacity-0 group-hover:opacity-100"
                      style={{ transform: "translateX(-100%) rotate(45deg)", transition: "all 0.7s" }}
                    />

                    <div className="relative z-10">
                      <div className="w-48 h-48 mb-6 relative overflow-hidden rounded-lg ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all flex items-center justify-center">
                        <img
                          src="/farmer-tractor-field.jpg"
                          alt="Farmer on tractor in field"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Farmers</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic">"advices to keep water"</p>
                      <Link
                        href="/farmers"
                        className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section ref={aboutRef} id="about" className="py-20 px-4 backdrop-blur-sm bg-muted/50 scroll-mt-24">
            <div className="container mx-auto max-w-4xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
                Breathing Rivers is dedicated to raising awareness about the world's most important waterways. Our
                mission is to educate, inspire, and mobilize people to appreciate and protect these vital natural
                resources.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Through compelling storytelling, stunning visuals, and interactive experiences, we bring the majesty of
                rivers to life and highlight their crucial role in sustaining life on Earth.
              </p>

              <div className="mt-16">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Our Team</h3>
                <TeamCircles />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
