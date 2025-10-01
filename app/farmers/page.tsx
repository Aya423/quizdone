"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface AdviceCategory {
  id: string
  title: string
  icon: string
  description: string
  tips: string[]
  benefits: string[]
  image: string
}

const adviceCategories: AdviceCategory[] = [
  {
    id: "irrigation",
    title: "Smart Irrigation",
    icon: "💧",
    description: "Efficient water use in crop irrigation",
    tips: [
      "Use drip irrigation systems to deliver water directly to plant roots",
      "Install soil moisture sensors to water only when needed",
      "Schedule irrigation during early morning or evening to reduce evaporation",
      "Maintain irrigation equipment regularly to prevent leaks",
      "Use mulch around plants to retain soil moisture",
    ],
    benefits: ["Reduce water usage by up to 50%", "Lower energy costs", "Improve crop yields", "Prevent soil erosion"],
    image: "/watering-garden.jpg",
  },
  {
    id: "soil",
    title: "Soil Management",
    icon: "🌱",
    description: "Healthy soil retains more water",
    tips: [
      "Add organic matter and compost to improve soil water retention",
      "Practice crop rotation to maintain soil health",
      "Use cover crops to prevent erosion and retain moisture",
      "Avoid over-tilling which can damage soil structure",
      "Test soil regularly to optimize nutrient and water management",
    ],
    benefits: [
      "Increase water retention by 20-30%",
      "Reduce fertilizer needs",
      "Improve soil fertility",
      "Prevent nutrient runoff",
    ],
    image: "/farmer-tractor-field.jpg",
  },
  {
    id: "crops",
    title: "Crop Selection",
    icon: "🌾",
    description: "Choose water-efficient crops",
    tips: [
      "Select drought-resistant crop varieties suited to your climate",
      "Plant native species that require less water",
      "Consider crop water requirements when planning rotations",
      "Use intercropping to maximize water efficiency",
      "Adjust planting dates to align with natural rainfall patterns",
    ],
    benefits: [
      "Reduce irrigation needs by 30-40%",
      "Increase resilience to drought",
      "Lower production costs",
      "Diversify farm income",
    ],
    image: "/farmer-tractor-field.jpg",
  },
  {
    id: "rainwater",
    title: "Rainwater Harvesting",
    icon: "🌧️",
    description: "Capture and store natural rainfall",
    tips: [
      "Build ponds or reservoirs to collect rainwater",
      "Install gutters and storage tanks on farm buildings",
      "Create contour bunds to slow water runoff",
      "Use swales to direct water to crop areas",
      "Maintain collection systems to prevent contamination",
    ],
    benefits: [
      "Free water source for irrigation",
      "Reduce dependence on groundwater",
      "Recharge aquifers naturally",
      "Provide water during dry seasons",
    ],
    image: "/flowing-river-sunset.jpg",
  },
  {
    id: "runoff",
    title: "Prevent Runoff",
    icon: "🛡️",
    description: "Protect rivers from agricultural pollution",
    tips: [
      "Create buffer zones with vegetation along waterways",
      "Use terracing on sloped land to slow water flow",
      "Apply fertilizers and pesticides carefully to avoid excess",
      "Implement conservation tillage practices",
      "Plant grass waterways in drainage areas",
    ],
    benefits: [
      "Protect river water quality",
      "Reduce soil loss by 70-80%",
      "Save on fertilizer costs",
      "Support aquatic ecosystems",
    ],
    image: "/river-trees.jpg",
  },
  {
    id: "technology",
    title: "Modern Technology",
    icon: "📱",
    description: "Use technology for water management",
    tips: [
      "Install weather stations to track rainfall and evaporation",
      "Use mobile apps for irrigation scheduling",
      "Implement precision agriculture with GPS and sensors",
      "Monitor water usage with smart meters",
      "Access satellite data for crop water stress detection",
    ],
    benefits: [
      "Optimize water use efficiency",
      "Make data-driven decisions",
      "Reduce labor costs",
      "Increase productivity",
    ],
    image: "/farmer-tractor-field.jpg",
  },
]

export default function FarmersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedAdvice = adviceCategories.find((cat) => cat.id === selectedCategory)

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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-500/5 via-background to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Water Conservation for Farmers
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Practical advice and proven techniques to conserve water, protect rivers, and improve farm productivity
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Choose a Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adviceCategories.map((category) => (
              <Card
                key={category.id}
                className="p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-primary/50"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Category Details */}
      {selectedAdvice && (
        <section className="py-16 px-4 bg-gradient-to-br from-accent/10 via-background to-green-500/10">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-6 text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
              >
                ← Back to Topics
              </button>

              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{selectedAdvice.icon}</div>
                <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">{selectedAdvice.title}</h2>
                <p className="text-xl text-muted-foreground">{selectedAdvice.description}</p>
              </div>

              {/* Image */}
              <div className="w-full h-64 mb-8 rounded-xl overflow-hidden">
                <img
                  src={selectedAdvice.image || "/placeholder.svg"}
                  alt={selectedAdvice.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tips */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Practical Tips</h3>
                <div className="space-y-4">
                  {selectedAdvice.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <span className="text-primary font-bold text-lg flex-shrink-0">{index + 1}.</span>
                      <p className="text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedAdvice.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Impact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
              Why Water Conservation Matters
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Agriculture accounts for approximately 70% of global freshwater use. By implementing water-efficient
                practices, farmers can significantly reduce their environmental impact while maintaining or even
                improving crop yields.
              </p>
              <p>
                Protecting rivers and water sources ensures sustainable farming for future generations. Healthy rivers
                support biodiversity, provide irrigation water, and maintain the ecological balance essential for
                agriculture.
              </p>
              <p className="text-center font-semibold text-foreground text-xl">
                Every drop saved today secures tomorrow's harvest.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/5 to-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Start Conserving Today</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Implement these water-saving techniques on your farm and join the movement to protect our rivers and water
            resources for future generations.
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
