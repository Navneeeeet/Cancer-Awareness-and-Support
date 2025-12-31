import express from "express";
import { createDonation } from "../controllers/donationController.js";

const router = express.Router();

// POST /api/donations
router.post("/", createDonation);

export default router;
