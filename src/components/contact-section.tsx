"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactSection() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
      submitted: true,
      loading: false,
    })
    setDate(undefined)
  }

  return (
    <div className="relative">
      {formState.submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 py-8 md:py-16"
        >
          <h3 className="text-xl md:text-2xl font-light">Thank you for reaching out</h3>
          <p className="text-gray-400 text-sm md:text-base">
            We&apos;ve received your message and will get back to you shortly.
          </p>
          <Button
            variant="outline"
            className="mt-4 border-white text-white hover:bg-white hover:text-black"
            onClick={() => setFormState({ ...formState, submitted: false })}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <div className="space-y-3 md:space-y-4">
            <Input
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="bg-transparent border-gray-800 focus:border-white transition-colors"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="bg-transparent border-gray-800 focus:border-white transition-colors"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="bg-transparent border-gray-800 focus:border-white transition-colors"
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-transparent border-gray-800 hover:bg-white hover:text-black",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select preferred date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black border border-gray-800">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-black text-white"
                />
              </PopoverContent>
            </Popover>

            <Textarea
              placeholder="Tell us about your project"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              className="min-h-[100px] md:min-h-[120px] bg-transparent border-gray-800 focus:border-white transition-colors"
            />
          </div>

          <Button
            type="submit"
            disabled={formState.loading}
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            {formState.loading ? "Sending..." : "Book Session"}
          </Button>
        </motion.form>
      )}
    </div>
  )
}

