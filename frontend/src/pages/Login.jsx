import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [matches, setMatches] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [scoreUpdates, setScoreUpdates] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("adminLoggedIn");
    if (storedUser) {
      setIsLoggedIn(true);
      fetchMatches();
    }
  }, []);

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      fetchMatches();
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  const fetchMatches = async () => {
    try {
      const res = await axios.get("http://localhost:8000/matches");
      setMatches([...res.data.live, ...res.data.upcoming, ...res.data.past]);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  const updateMatch = async (id, updates) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/matches/${id}`,
        updates
      );
      setMatches(matches.map((match) => (match._id === id ? res.data : match)));
    } catch (error) {
      console.error("Error updating match:", error);
    }
  };

  const handleScoreChange = (id, team, value) => {
    setScoreUpdates((prev) => ({
      ...prev,
      [id]: { ...prev[id], [team]: value },
    }));
  };

  const applyScoreUpdate = (id) => {
    if (scoreUpdates[id]) {
      updateMatch(id, { scores: scoreUpdates[id] });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input
          className="border p-2 mb-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <button
        className="bg-red-500 text-white px-4 py-2 mb-4"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h2 className="text-2xl mb-4">Admin Panel - Update Matches</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 p-2">Teams</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Scores</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match._id} className="odd:bg-gray-100 even:bg-gray-200">
              <td className="border border-gray-300 p-2">
                {match.teams.join(" vs ")}
              </td>
              <td className="border border-gray-300 p-2">{match.status}</td>
              <td className="border border-gray-300 p-2">
                {match.teams.map((team, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{team}:</span>
                    {match.status === "live" ? (
                      <input
                        type="text"
                        className="border p-1 w-16"
                        value={
                          scoreUpdates[match._id]?.[team] ||
                          match.scores[team] ||
                          0
                        }
                        onChange={(e) =>
                          handleScoreChange(
                            match._id,
                            team,
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    ) : (
                      <input
                        type="text"
                        className="border p-1 w-16"
                        disabled
                        value={
                          scoreUpdates[match._id]?.[team] ||
                          match.scores[team] ||
                          0
                        }
                        onChange={(e) =>
                          handleScoreChange(
                            match._id,
                            team,
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    )}
                  </div>
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2"
                  onClick={() => updateMatch(match._id, { status: "past" })}
                >
                  Mark as Past
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1"
                  onClick={() => applyScoreUpdate(match._id)}
                >
                  Update Score
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
