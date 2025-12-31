"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { QuoteIcon, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { quotesApi, type Quote } from "@/lib/api"

export function QuoteSection() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await quotesApi.getRandomQuote()
      setQuote(data)
    } catch (err) {
      setError("Unable to load inspirational quote. Please try again later.")
      console.error("Error fetching quote:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <section id="quote" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Daily Inspiration
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Words of hope and strength to guide your journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              {loading && (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <RefreshCw className="h-8 w-8 text-primary animate-spin" />
                  <p className="text-muted-foreground">Loading inspirational quote...</p>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <AlertCircle className="h-8 w-8 text-destructive" />
                  <p className="text-destructive text-center">{error}</p>
                  <Button onClick={fetchQuote} variant="outline" size="sm" className="mt-2 bg-transparent">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {!loading && !error && quote && (
                  <motion.div
                    key={quote.quote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-center mb-4">
                      <QuoteIcon className="h-10 w-10 text-primary/30" />
                    </div>

                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium text-center leading-relaxed text-balance">
                      {quote.quote}
                    </blockquote>

                    {quote.author && (
                      <p className="text-base md:text-lg text-muted-foreground text-center font-medium">
                        — {quote.author}
                      </p>
                    )}

                    <div className="flex justify-center pt-4">
                      <Button onClick={fetchQuote} variant="outline" size="sm" className="group bg-transparent">
                        <RefreshCw className="h-4 w-4 mr-2 transition-transform group-hover:rotate-180 duration-500" />
                        New Quote
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
