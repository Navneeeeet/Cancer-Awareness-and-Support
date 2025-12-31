import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    console.log("Donation payload:", req.body);

    const { name, email, amount, paymentId } = req.body;

    if (!name || !email || !amount || !paymentId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const donation = await Donation.create({
      name,
      email,
      amount: Number(amount),
      paymentId,
      status: "success",
    });

    res.status(201).json({
      success: true,
      message: "Donation successful",
      donation,
    });
  } catch (error) {
    console.error("Donation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process donation",
    });
  }
};
