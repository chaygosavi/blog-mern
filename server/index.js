import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import userRouter from "./routes/user-routes.js";
import cors from "cors";
mongoose.set("strictQuery", true);
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.rrwyze5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3001))
  .then(() => console.log("connected to 3001"))
  .catch((err) => console.log(err));
