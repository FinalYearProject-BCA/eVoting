import { useUser } from "../context/UserContext";
import { useState } from "react";

function AdminDashboard() {
  const { logout, addCandidate, candidates } = useUser();
  const [name, setName] = useState("");
  const [party, setParty] = useState("");

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Logout</button>

      <h2>Add Candidate</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Party" value={party} onChange={(e) => setParty(e.target.value)} />
      <button onClick={() => addCandidate(name, party)}>Add Candidate</button>

      <h2>Candidate List</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>{candidate.name} ({candidate.party})</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;

