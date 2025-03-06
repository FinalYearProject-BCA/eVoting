import { useUser } from "../context/UserContext";

function Results() {
  const { candidates } = useUser();

  return (
    <div>
      <h1>Election Results</h1>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            {candidate.name} ({candidate.party}) - {candidate.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
