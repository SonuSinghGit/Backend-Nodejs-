import express from "express"
import router from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",router)
export default app;