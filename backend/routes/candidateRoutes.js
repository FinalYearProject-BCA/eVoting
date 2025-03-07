import express from "express";
import Candidate from "../models/Candidate.js";

const router = express.Router();

// Add a Candidate (Admin Only)
router.post("/add", async (req, res) => {
  const { name, party } = req.body;

  try {
    const candidate = new Candidate({ name, party, votes: 0 });
    await candidate.save();
    res.status(201).json({ message: "Candidate added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding candidate" });
  }
});

// Get All Candidates
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: "Error fetching candidates" });
  }
});

export default router;
