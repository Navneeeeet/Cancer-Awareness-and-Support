import express from "express";
import { getSummary, getDonationTrends } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/summary", getSummary);
router.get("/donations", getDonationTrends);

export default router;
