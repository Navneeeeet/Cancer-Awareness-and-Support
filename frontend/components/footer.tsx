"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16 md:mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="text-lg font-semibold text-foreground">Cancer Awareness & Support</span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Together, we stand strong in the fight against cancer. Supporting patients, families, and caregivers with
            compassion, resources, and hope.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/70 mt-2">
            {new Date().getFullYear()} Cancer Awareness & Support. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
