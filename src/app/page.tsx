import Link from "next/link"
import { ArrowRight, Instagram, MessageCircle } from "lucide-react"
import HeroSection from "@/components/hero-section"
import CollectionGrid from "@/components/collection-grid"
import ContactSection from "@/components/contact-section"
// import Image from "next/image"
import AboutFounder from "@/components/about-founder"
import NavBar from "@/components/nav-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* CEO Section */}
      <AboutFounder />

      {/* About Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 bg">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Capturing moments that last forever</h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            We are a premium photography studio specializing in creating timeless imagery that tells your unique story.
            Our approach combines technical excellence with artistic vision to deliver photographs that exceed
            expectations.
          </p>
          <Link
            href="#collections"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            Explore our work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-16 md:py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-10 md:mb-16 text-center">Collections</h2>
          <CollectionGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Let&apos;s create something beautiful together
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Whether you&apos;re looking for portrait photography, event coverage, or commercial work, we&apos;re here to bring
              your vision to life.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-light">Connect with us</h3>
              <div className="flex gap-6">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Kodest Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

