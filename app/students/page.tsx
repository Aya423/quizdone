"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  image: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What percentage of Earth's water is fresh water available for human use?",
    options: ["Less than 1%", "About 10%", "About 25%", "About 50%"],
    correctAnswer: 0,
    explanation:
      "Only about 0.5% of Earth's water is available fresh water. Most water is in oceans (97%) or frozen in glaciers.",
    image: "/earth-water.jpg",
  },
  {
    id: 2,
    question: "Which of these activities uses the MOST water in a typical household?",
    options: ["Washing dishes", "Toilet flushing", "Showering", "Laundry"],
    correctAnswer: 1,
    explanation:
      "Toilet flushing typically uses the most water in households, accounting for about 30% of indoor water use.",
    image: "/household-water.jpg",
  },
  {
    id: 3,
    question: "What should you do if you see trash near a river?",
    options: [
      "Leave it - it's not my problem",
      "Pick it up and dispose of it properly",
      "Push it into the water",
      "Take a photo and walk away",
    ],
    correctAnswer: 1,
    explanation:
      "Always pick up trash near rivers and dispose of it properly. Trash can harm aquatic life and pollute water sources.",
    image: "/river-cleanup.jpg",
  },
  {
    id: 4,
    question: "How long does it take for a plastic bottle to decompose in water?",
    options: ["1 year", "10 years", "100 years", "450+ years"],
    correctAnswer: 3,
    explanation:
      "Plastic bottles can take 450 years or more to decompose, causing long-term pollution in rivers and oceans.",
    image: "/plastic-pollution.jpg",
  },
  {
    id: 5,
    question: "What is the best time to water plants to conserve water?",
    options: ["Midday when it's hottest", "Early morning or evening", "Anytime is fine", "Only at night"],
    correctAnswer: 1,
    explanation:
      "Watering early morning or evening reduces evaporation, ensuring plants get more water while conserving resources.",
    image: "/watering-plants.jpg",
  },
  {
    id: 6,
    question: "Which action helps protect river ecosystems the most?",
    options: [
      "Using chemical fertilizers",
      "Disposing motor oil in drains",
      "Planting trees along riverbanks",
      "Building more concrete structures",
    ],
    correctAnswer: 2,
    explanation:
      "Planting trees along riverbanks prevents erosion, filters pollutants, and provides habitat for wildlife.",
    image: "/river-trees.jpg",
  },
]

const waterLevelVideos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.04.49_2cee550e-IVJ2po42qcx8KrHyqvRLbrNO4S7bvQ.mp4", // Empty/dry barrel
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.05.16_cbaed6cd-EWdjU5xLBEOWM2S1mkgCzMuJH8ACJE.mp4", // 1 correct answer
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.32.08_daadbf1d-WvOLwB6bpGLpjZ9KN56st6bsHiubC2.mp4", // 2 correct answers
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.19.31_1364d011-YsScv8wAef1COiBdHFHtLmGUX2zUVF.mp4", // 3 correct answers
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.17.25_a94a3204-ic93hMOKPYyNVrujVUHyf84qeYjRVc.mp4", // 4 correct answers
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.20.21_4505bd61-lPszJbiBTgwEwDDDRguezX51Fdw6by.mp4", // 5 correct answers
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2006.20.37_1f9547b0-CPLnlyre2KiuywN8WC5BOPIe1J23NT.mp4", // 6 correct answers - full/overflowing
]

export default function StudentsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Add transition effect when score changes
    setIsTransitioning(true)

    // Play the video after a brief transition
    setTimeout(() => {
      video.play().catch(() => {
        // Ignore autoplay errors
      })
      setIsTransitioning(false)
    }, 300)
  }, [score])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowExplanation(true)
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion])

    setTimeout(() => {
      handleNextQuestion()
    }, 1500)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage === 100) return "Perfect! You're a River Guardian! 🌟"
    if (percentage >= 80) return "Excellent! You really care about rivers! 💧"
    if (percentage >= 60) return "Good job! Keep learning about water conservation! 🌊"
    return "Keep learning! Every small action helps protect our rivers! 💙"
  }

  const getRiverLevel = () => {
    const maxScore = answeredQuestions.length || 1
    const percentage = (score / maxScore) * 100
    return percentage
  }

  const getRiverStatus = () => {
    const level = getRiverLevel()
    if (level >= 80) return "River is thriving!"
    if (level >= 60) return "River is healthy"
    if (level >= 40) return "River needs care"
    if (level >= 20) return "River is drying"
    return "River is in danger"
  }

  const getRiverColor = () => {
    const level = getRiverLevel()
    if (level >= 80) return "from-blue-400 to-blue-600"
    if (level >= 60) return "from-blue-300 to-blue-500"
    if (level >= 40) return "from-yellow-300 to-blue-400"
    if (level >= 20) return "from-orange-300 to-yellow-400"
    return "from-red-300 to-orange-400"
  }

  if (quizCompleted) {
    return (
      <main className="min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <img src="/earth-water.jpg" alt="Ocean background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="relative z-10">
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

          <section className="pt-32 pb-16 px-4">
            <div className="container mx-auto max-w-3xl">
              <Card className="p-8 md:p-12 text-center">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Quiz Complete!</h1>

                <div className="mb-8 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <p className="text-lg text-muted-foreground mb-2">Your Score</p>
                  <p className="text-6xl font-bold text-primary mb-4">
                    {score}/{quizQuestions.length}
                  </p>
                  <p className="text-xl font-semibold text-foreground">{getScoreMessage()}</p>
                </div>

                <div className="mb-8 p-6 rounded-xl bg-muted/50 text-left">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-foreground text-center">What You Learned</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">💧</span>
                      <span className="text-muted-foreground">
                        Less than 1% of Earth's water is available for human use
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">💧</span>
                      <span className="text-muted-foreground">
                        Plastic bottles take 450+ years to decompose in water
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">💧</span>
                      <span className="text-muted-foreground">Planting trees along riverbanks protects ecosystems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">💧</span>
                      <span className="text-muted-foreground">
                        Every action counts in protecting our water resources
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Retake Quiz
                  </button>
                  <Link
                    href="/"
                    className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Explore More
                  </Link>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <main className="min-h-screen relative pb-32">
      <div className="fixed inset-0 z-0">
        <img src="/ocean-background.jpg" alt="Ocean background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10">
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

        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="w-full lg:w-[55%] flex flex-col">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8 text-center lg:text-left drop-shadow-lg">
                  Ready to Protect Our Rivers
                </h1>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-white text-center lg:text-left drop-shadow-md">
                  {question.question}
                </h2>

                <div className="w-full space-y-4 mb-8">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === question.correctAnswer
                    const showCorrect = showExplanation && isCorrect
                    const showIncorrect = showExplanation && isSelected && !isCorrect

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 backdrop-blur-md ${
                          showCorrect
                            ? "bg-green-500/40 border-2 border-green-400"
                            : showIncorrect
                              ? "bg-red-500/40 border-2 border-red-400"
                              : isSelected
                                ? "bg-primary/40 border-2 border-primary"
                                : "bg-white/20 hover:bg-white/30 border-2 border-white/30"
                        } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer hover:scale-102"}`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              showCorrect
                                ? "bg-green-500 text-white"
                                : showIncorrect
                                  ? "bg-red-500 text-white"
                                  : isSelected
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-white/80 text-foreground"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-white font-semibold text-lg drop-shadow">{option}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {showExplanation && (
                  <div className="mb-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                      {selectedAnswer === question.correctAnswer ? "Correct!" : "Not quite!"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{question.explanation}</p>
                  </div>
                )}

                <div className="flex justify-center lg:justify-start">
                  {!showExplanation ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <div className="px-10 py-4 rounded-full bg-primary/70 text-primary-foreground font-bold text-lg shadow-2xl flex items-center gap-3">
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Next question...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-[40%] lg:sticky lg:top-32">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-8">
                    <p className="text-sm text-white/80 mb-1">Current Score</p>
                    <p className="text-4xl font-bold text-white drop-shadow-lg">
                      {score} / {answeredQuestions.length || 0}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-full max-w-xs aspect-[9/16] rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                      <video
                        ref={videoRef}
                        key={score} // Force re-render when score changes
                        src={waterLevelVideos[score]}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          isTransitioning ? "opacity-0" : "opacity-100"
                        }`}
                        muted
                        playsInline
                        autoPlay
                        preload="auto"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <p className="text-2xl font-bold text-primary">{Math.round(getRiverLevel())}%</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-bold text-white mb-2 drop-shadow">{getRiverStatus()}</p>
                      <p className="text-sm text-white/80">
                        {getRiverLevel() >= 80
                          ? "Keep up the great work!"
                          : getRiverLevel() >= 60
                            ? "You're doing well!"
                            : getRiverLevel() >= 40
                              ? "Keep learning!"
                              : "Every answer helps!"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
