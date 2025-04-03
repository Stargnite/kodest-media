"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black pt-20"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
              <Link
                href="#collections"
                onClick={closeMenu}
                className="text-2xl uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Collections
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="text-2xl uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-4 border border-white px-8 py-3 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

