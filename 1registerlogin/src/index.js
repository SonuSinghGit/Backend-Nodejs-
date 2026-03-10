import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/config.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());


app.listen(PORT, async () => {
  await console.log(`Server is running on: ${PORT}`);
});

await connectDB();

app.use("/api/v1", userRoutes);