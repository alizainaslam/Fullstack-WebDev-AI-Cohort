import express from "express";
import songRoutes from "./routes/song.route.js";

const app = express();

app.use(express.json());
app.use("/", songRoutes);

export default app;
