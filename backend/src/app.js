import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import donationRoutes from "./routes/donationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import { apiLimiter } from "./middleware/rateLimiter.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// ---------- GLOBAL MIDDLEWARE ----------
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(apiLimiter);

// ---------- HEALTH CHECK ----------
app.get("/", (req, res) => {
  res.status(200).send("Cancer Support Backend is running...");
});

// ---------- ROUTES ----------
app.use("/api/donations", donationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ---------- 404 HANDLER (OPTIONAL BUT RECOMMENDED) ----------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// ---------- ERROR HANDLER (MUST BE LAST) ----------
app.use(errorHandler);

export default app;
