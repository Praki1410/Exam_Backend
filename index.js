const express = require("express");
const dotenv = require("dotenv");
const cors=require("cors")
const dbConnect = require("./config/db");
const userRoute = require("./routes/userRoutes");
const questionRoute = require("./routes/questionRoutes");
const examRoute = require("./routes/examRoutes");
const resultsRoute = require("./routes/resultRoutes");
dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/questions", questionRoute);
app.use("/api/v1/exams", examRoute);
app.use("/api/v1/results", resultsRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  dbConnect();
});
