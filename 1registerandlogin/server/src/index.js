import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/config.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});