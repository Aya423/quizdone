"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface Activity {
  id: string
  name: string
  icon: string
  waterUsage: number
  duration: string
  tips: string[]
  image: string
}

const activities: Activity[] = [
  {
    id: "shower",
    name: "Shower",
    icon: "🚿",
    waterUsage: 65,
    duration: "10 minutes",
    tips: [
      "Reduce shower time to 5 minutes to save 32 liters",
      "Install a low-flow showerhead to reduce usage by 40%",
      "Turn off water while soaping",
    ],
    image: "/modern-bathroom-shower.png",
  },
  {
    id: "dishes",
    name: "Washing Dishes",
    icon: "🍽️",
    waterUsage: 40,
    duration: "15 minutes",
    tips: [
      "Use a dishwasher when full - saves up to 20 liters",
      "Don't pre-rinse dishes before dishwasher",
      "Fill sink basin instead of running water",
    ],
    image: "/washing-dishes.jpg",
  },
  {
    id: "laundry",
    name: "Laundry",
    icon: "👕",
    waterUsage: 50,
    duration: "1 load",
    tips: [
      "Only run full loads to maximize efficiency",
      "Use cold water when possible",
      "Choose high-efficiency washing machines",
    ],
    image: "/laundry-machine.jpg",
  },
  {
    id: "cooking",
    name: "Cooking",
    icon: "🍳",
    waterUsage: 15,
    duration: "30 minutes",
    tips: [
      "Reuse pasta water for plants",
      "Steam vegetables instead of boiling",
      "Keep a pitcher of water in fridge instead of running tap",
    ],
    image: "/cooking-kitchen.png",
  },
  {
    id: "brushing",
    name: "Brushing Teeth",
    icon: "🪥",
    waterUsage: 8,
    duration: "2 minutes",
    tips: [
      "Turn off tap while brushing - saves 6 liters",
      "Use a cup to rinse instead of running water",
      "Fix leaky faucets immediately",
    ],
    image: "/brushing-teeth.jpg",
  },
  {
    id: "garden",
    name: "Watering Garden",
    icon: "🌱",
    waterUsage: 75,
    duration: "20 minutes",
    tips: [
      "Water early morning or evening to reduce evaporation",
      "Use drip irrigation systems",
      "Collect rainwater for garden use",
    ],
    image: "/watering-garden.jpg",
  },
]

export default function AdultsPage() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const toggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId],
    )
    setShowResults(false)
  }

  const calculateTotal = () => {
    return activities
      .filter((activity) => selectedActivities.includes(activity.id))
      .reduce((total, activity) => total + activity.waterUsage, 0)
  }

  const getSelectedTips = () => {
    return activities
      .filter((activity) => selectedActivities.includes(activity.id))
      .flatMap((activity) => activity.tips)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link
          href="/"
          className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out hover:bg-background/90 hover:scale-105"
        >
          <h2 className="font-serif text-sm font-bold text-primary tracking-wider">Breathing Rivers</h2>
        </Link>
      </div>

      <div className="fixed top-0 right-0 z-50 p-6">
        <Link
          href="/"
          className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out hover:bg-background/90 hover:scale-105 font-semibold text-sm text-primary"
        >
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Daily Water Footprint
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Discover how your daily activities impact water consumption. Select the activities you do regularly to see
            your water usage and learn how to conserve.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Select Your Daily Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedActivities.includes(activity.id)
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:ring-1 hover:ring-primary/50"
                }`}
                onClick={() => toggleActivity(activity.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{activity.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{activity.duration}</p>
                  <p className="text-lg font-semibold text-primary">{activity.waterUsage}L water</p>
                  {selectedActivities.includes(activity.id) && (
                    <div className="mt-3 text-sm text-primary font-semibold">✓ Selected</div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Calculate Button */}
          {selectedActivities.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setShowResults(true)}
                className="px-12 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Calculate My Water Usage
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      {showResults && selectedActivities.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-br from-accent/10 via-background to-primary/10">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12">
              <h2 className="font-serif text-4xl font-bold text-center mb-8 text-foreground">Your Water Impact</h2>

              {/* Total Usage */}
              <div className="text-center mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <p className="text-lg text-muted-foreground mb-2">Daily Water Usage</p>
                <p className="text-6xl font-bold text-primary mb-2">{calculateTotal()}L</p>
                <p className="text-sm text-muted-foreground">
                  That's {(calculateTotal() / 1000).toFixed(2)} cubic meters per day
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Annual usage: {(calculateTotal() * 365).toLocaleString()}L
                </p>
              </div>

              {/* Conservation Tips */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground text-center">
                  Ways to Reduce Your Water Footprint
                </h3>
                <div className="space-y-4">
                  {getSelectedTips().map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <span className="text-primary font-bold text-lg">💧</span>
                      <p className="text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-lg text-foreground leading-relaxed">
                  By implementing these water-saving tips, you could reduce your daily water usage by up to{" "}
                  <span className="font-bold text-primary">30-40%</span>, helping preserve our rivers and water
                  resources for future generations.
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Every Drop Counts</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Small changes in our daily habits can make a significant impact on water conservation. Start today and be
            part of the solution to protect our rivers and water resources.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore More Roles
          </Link>
        </div>
      </section>
    </main>
  )
}
