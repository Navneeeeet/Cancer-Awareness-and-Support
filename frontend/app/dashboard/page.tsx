"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/stat-card"
import { DonationChart } from "@/components/donation-chart"
import { DonationTable } from "@/components/donation-table"
import { getTotalDonations, getTotalDonors } from "@/lib/dummy-data"

export default function DashboardPage() {
  const totalDonations = getTotalDonations()
  const totalDonors = getTotalDonors()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2 -ml-4 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Donation Dashboard</h1>
          <p className="text-muted-foreground text-base md:text-lg">Track donations and monitor our impact together</p>
        </motion.div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              title="Total Donations"
              value={`₹${totalDonations.toLocaleString()}`}
              icon={DollarSign}
              index={0}
              trend="+12% from last month"
            />
            <StatCard
              title="Total Donors"
              value={totalDonors.toString()}
              icon={Users}
              index={1}
              trend="+8 new donors this month"
            />
          </div>

          <DonationChart />

          <DonationTable />
        </div>
      </div>
    </div>
  )
}
