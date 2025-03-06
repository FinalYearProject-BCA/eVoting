import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import Home from "./pages/Home"
import Results from "./pages/Results";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function ProtectedRoute({ element, role }) {
  const { user } = useUser();
  return user && user.role === role ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote" element={<UserDashboard />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<ProtectedRoute element={<AdminDashboard />} role="admin" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

