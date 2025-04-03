"use client"
import potraitImg from "@/assets/hero-imgs/potrait-img.jpg"
import weddingsImg from "@/assets/hero-imgs/weddings.jpg"
import fashionImg from "@/assets/hero-imgs/fashion-img.jpg"
import commercialImg from "@/assets/hero-imgs/commercial-img.jpg"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  {
    src: potraitImg,
    alt: "Portrait photography",
    title: "Portraits",
  },
  {
    src: weddingsImg,
    alt: "Wedding photography",
    title: "Weddings",
  },
  {
    src: fashionImg,
    alt: "Fashion photography",
    title: "Fashion",
  },
  {
    src: commercialImg,
    alt: "Commercial photography",
    title: "Commercial",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Loading overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-light tracking-widest"
            >
              KODEST STUDIO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="dark-overlay"></div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter mb-4 md:mb-6"
            >
              {images[currentIndex].title}
            </motion.h1>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-xl mx-auto mb-6 md:mb-8">
              Exceptional photography that captures the essence of your story
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4 md:w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

