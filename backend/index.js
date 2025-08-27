import express from "express";
import { ConnectDb } from "./config/connectDb.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json())
app.use("/admin", adminRoutes)
app.use("/user", userRoutes)


ConnectDb()
app.listen(3000, () => {    
    console.log("Server is running on port 3000");
})