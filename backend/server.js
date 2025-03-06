require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Candidate Model
const Candidate = mongoose.model("Candidate", {
  name: String,
  votes: { type: Number, default: 0 },
});

// API Routes
app.get("/candidates", async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

app.post("/vote", async (req, res) => {
  const { candidateId } = req.body;
  await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } });
  res.send("Vote submitted!");
});

app.get("/results", async (req, res) => {
  const results = await Candidate.find();
  res.json(results);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
