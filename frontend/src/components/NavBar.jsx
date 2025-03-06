import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { user, logout } = useUser();

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>E-Voting</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/vote" style={styles.link}>Vote</Link></li>
        <li><Link to="/results" style={styles.link}>Results</Link></li>
        {user?.role === "admin" && <li><Link to="/admin-dashboard" style={styles.link}>Admin Panel</Link></li>}
        {user ? (
          <>
            <li><Link to="/user-dashboard" style={styles.link}>Dashboard</Link></li>
            <li><button onClick={logout} style={styles.button}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" style={styles.link}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" },
  logo: { fontSize: "24px" },
  navLinks: { listStyle: "none", display: "flex", gap: "20px", alignItems: "center" },
  link: { color: "white", textDecoration: "none", fontSize: "18px" },
  button: { background: "red", border: "none", color: "white", padding: "5px 10px", cursor: "pointer" },
};

export default Navbar;
