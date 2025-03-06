import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [candidates, setCandidates] = useState([]);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setUser({ username, role: "admin" });
    } else {
      setUser({ username, role: "user" });
    }
  };

  const logout = () => setUser(null);

  const addCandidate = (name, party) => {
    setCandidates([...candidates, { name, party, votes: 0 }]);
  };

  const voteForCandidate = (name) => {
    setCandidates(candidates.map(candidate => 
      candidate.name === name ? { ...candidate, votes: candidate.votes + 1 } : candidate
    ));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, candidates, addCandidate, voteForCandidate }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

