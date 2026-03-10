import express from "express";
import { connectDB } from "./config/config.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.listen(9000, async () => {
  await console.log("Server is running on: 9000");
});

await connectDB();

app.use("/api/users", userRoutes);

