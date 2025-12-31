"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CreditCard, Smartphone, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-background border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Secure Donation</h2>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Donation Amount ($)</Label>
                    <Input id="amount" type="number" placeholder="Enter amount" required className="text-lg py-6" />
                  </div>

                  <Tabs defaultValue="upi" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="upi" className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" /> UPI
                      </TabsTrigger>
                      <TabsTrigger value="bank" className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" /> Bank Transfer
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="upi" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upi-id">UPI ID / VPA</Label>
                        <Input id="upi-id" placeholder="example@upi" required />
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg border border-dashed border-primary/30 flex flex-col items-center gap-3">
                        <div className="w-32 h-32 bg-white rounded-md flex items-center justify-center border">
                          {/* Placeholder for QR Code */}
                          <div className="text-[10px] text-muted-foreground text-center px-2">Scan QR Code in App</div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          Scan the QR code using any UPI app to pay securely.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="bank" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="acc-number">Account Number</Label>
                          <Input id="acc-number" placeholder="Enter account number" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ifsc">IFSC Code</Label>
                          <Input id="ifsc" placeholder="SBIN0001234" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="acc-name">Account Holder Name</Label>
                        <Input id="acc-name" placeholder="Full name as per bank" required />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button type="submit" className="w-full py-6 text-lg font-semibold" disabled={loading}>
                    {loading ? "Processing..." : "Complete Donation"}
                    {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-muted-foreground max-w-[300px]">
                    Your contribution towards cancer awareness has been received. A receipt has been sent to your email.
                  </p>
                  <Button onClick={onClose} className="mt-6">
                    Return to Dashboard
                  </Button>
                </motion.div>
              )}
            </div>
            <div className="bg-muted/30 p-4 text-center border-t">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                Secure 256-bit SSL Encrypted Payment
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
