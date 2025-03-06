import { useUser } from "../context/UserContext";

function UserDashboard() {
  const { logout, candidates, voteForCandidate } = useUser();

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logout}>Logout</button>

      <h2>Vote for Candidates</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            {candidate.name} ({candidate.party}) - {candidate.votes} votes
            <button onClick={() => voteForCandidate(candidate.name)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;

