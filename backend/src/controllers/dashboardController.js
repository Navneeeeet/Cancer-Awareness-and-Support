import Donation from "../models/Donation.js";

export const getSummary = async (req, res) => {
  try {
    const totalDonors = await Donation.countDocuments();

    const totalAmountAgg = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalDonations: totalAmountAgg[0]?.total || 0,
      totalDonors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export const getDonationTrends = async (req, res) => {
  try {
    const trends = await Donation.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          amount: { $sum: "$amount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    res.json(
      trends.map(t => ({
        month: months[t._id - 1],
        amount: t.amount,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};
