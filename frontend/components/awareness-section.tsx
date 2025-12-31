"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Shield } from "lucide-react"

const awarenessCards = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We provide emotional and practical support for cancer patients and their families, ensuring no one faces this journey alone.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a network of survivors, caregivers, and supporters who understand your journey and are here to help every step of the way.",
  },
  {
    icon: Lightbulb,
    title: "Education & Resources",
    description:
      "Access comprehensive information about cancer prevention, early detection, treatment options, and wellness strategies.",
  },
  {
    icon: Shield,
    title: "Advocacy & Awareness",
    description:
      "We raise awareness about cancer prevention and early detection while advocating for better healthcare access and research funding.",
  },
]

export function AwarenessSection() {
  return (
    <section id="awareness" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Mission & Support
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Empowering individuals and communities with the knowledge, resources, and support needed to fight cancer
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {awarenessCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
