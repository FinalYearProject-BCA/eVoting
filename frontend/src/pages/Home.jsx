import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Navbar from "../components/NavBar";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div style={styles.container}>
      <Navbar />
      <h1>Welcome to E-Voting</h1>
      <p>Cast your vote securely and easily.</p>
      {user ? (
        <button style={styles.button} onClick={() => navigate("/user-dashboard")}>Go to Dashboard</button>
      ) : (
        <button style={styles.button} onClick={() => navigate("/login")}>Login to Vote</button>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" },
  button: { background: "#007BFF", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" },
};

export default Home;
