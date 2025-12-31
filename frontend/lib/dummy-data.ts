export interface DonationData {
  id: number
  donorName: string
  amount: number
  date: string
}

export interface TrendData {
  date: string
  amount: number
}

export const donationsData: DonationData[] = [
  { id: 1, donorName: "Rajesh Kumar", amount: 5000, date: "2025-01-15" },
  { id: 2, donorName: "Priya Sharma", amount: 10000, date: "2025-01-18" },
  { id: 3, donorName: "Amit Patel", amount: 3000, date: "2025-01-20" },
  { id: 4, donorName: "Sneha Reddy", amount: 7500, date: "2025-01-22" },
  { id: 5, donorName: "Vikram Singh", amount: 15000, date: "2025-01-25" },
  { id: 6, donorName: "Anjali Gupta", amount: 2000, date: "2025-01-28" },
  { id: 7, donorName: "Rahul Verma", amount: 8000, date: "2025-01-30" },
  { id: 8, donorName: "Kavita Joshi", amount: 12000, date: "2025-02-02" },
  { id: 9, donorName: "Suresh Nair", amount: 4500, date: "2025-02-05" },
  { id: 10, donorName: "Meera Das", amount: 6000, date: "2025-02-08" },
  { id: 11, donorName: "Arjun Mehta", amount: 9000, date: "2025-02-12" },
  { id: 12, donorName: "Pooja Iyer", amount: 11000, date: "2025-02-15" },
]

export const trendData: TrendData[] = [
  { date: "Jan 15", amount: 5000 },
  { date: "Jan 18", amount: 15000 },
  { date: "Jan 20", amount: 18000 },
  { date: "Jan 22", amount: 25500 },
  { date: "Jan 25", amount: 40500 },
  { date: "Jan 28", amount: 42500 },
  { date: "Jan 30", amount: 50500 },
  { date: "Feb 02", amount: 62500 },
  { date: "Feb 05", amount: 67000 },
  { date: "Feb 08", amount: 73000 },
  { date: "Feb 12", amount: 82000 },
  { date: "Feb 15", amount: 93000 },
]

export const getTotalDonations = () => {
  return donationsData.reduce((sum, donation) => sum + donation.amount, 0)
}

export const getTotalDonors = () => {
  return donationsData.length
}
