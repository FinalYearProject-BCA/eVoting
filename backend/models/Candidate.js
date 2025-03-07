import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
  name: String,
  party: String,
  votes: { type: Number, default: 0 },
});

export default mongoose.model("Candidate", CandidateSchema);
