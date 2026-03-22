import express from 'express';
import cookieParser from "cookie-parser";
import morgan from "morgan";
import postRoutes from './routes/post.routes.js';

const app = express();
app.use(express.json());
app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/post",postRoutes);

export default app;