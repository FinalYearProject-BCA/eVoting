import { useState, useEffect } from "react";

function Vote() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  return (
    <div>
      <h1>Vote for Your Candidate</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>{candidate.name} - {candidate.party}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vote;
