import express from "express";
import cors from "cors";
import songRoutes from "./routes/song.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", songRoutes);

export default app;
