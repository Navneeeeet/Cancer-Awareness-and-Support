import dotenv from "dotenv";
dotenv.config();

const requiredVars = ["PORT", "MONGO_URI"];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    process.exit(1);
  }
});

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI
};
