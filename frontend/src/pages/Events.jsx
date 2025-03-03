import React, { useEffect, useState, useRef } from "react";
import "../styles/Events.css";

const API_URL = "http://localhost:8000/matches/update-match"; // Update with your backend URL

const Events = (props) => {
  const [matches, setMatches] = useState({ upcoming: {}, live: {}, past: {} });
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeSport, setActiveSport] = useState("Football");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [editingMatchId, setEditingMatchId] = useState(null);
  const [updatedMatchData, setUpdatedMatchData] = useState({});
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:8000/matches");
        if (!response.ok) throw new Error("Failed to fetch matches");

        const data = await response.json();
        const categorizedMatches = { upcoming: {}, live: {}, past: {} };
        ["upcoming", "live", "past"].forEach((status) => {
          data[status]?.forEach((match) => {
            if (!categorizedMatches[status][match.sport]) {
              categorizedMatches[status][match.sport] = [];
            }
            categorizedMatches[status][match.sport].push(match);
          });
        });

        setMatches(categorizedMatches);
        setIsLoggedIn(localStorage.getItem("adminLoggedIn"));
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    document.title = "GC 2.0 - " + props.title;
    fetchMatches();

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => setShowDropdown(false), 150);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props]);

  const handleEdit = (match) => {
    setEditingMatchId(match._id);
    setUpdatedMatchData({ ...match });
  };

  const handleChange = (field, value) => {
    setUpdatedMatchData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTeamChange = (index, value) => {
    const updatedTeams = [...updatedMatchData.teams];
    updatedTeams[index] = value;
    setUpdatedMatchData((prev) => ({ ...prev, teams: updatedTeams }));
  };

  const handleScoreChange = (team, value) => {
    setUpdatedMatchData((prev) => ({
      ...prev,
      scores: { ...prev.scores, [team]: value },
    }));
  };

  const handleUpdate = async (matchId) => {
    try {
      const response = await fetch(`${API_URL}/${matchId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMatchData),
      });

      if (!response.ok) throw new Error("Failed to update match");

      alert("Match updated successfully!");
      setEditingMatchId(null);
    } catch (error) {
      console.error("Error updating match:", error);
      alert("Error updating match");
    }
  };

  return (
    <div className="events-container">
      <div className="tabs-container">
        {["upcoming", "live", "past"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? "active" : ""}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {matches[activeTab] && Object.keys(matches[activeTab]).length > 0 && (
        <div className="sports-tabs">
          {isMobile ? (
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={() => setShowDropdown((prev) => !prev)}>
                Select Sport ⌄
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  {Object.keys(matches[activeTab]).sort().map((sport) => (
                    <button key={sport} onClick={() => { setActiveSport(sport); setShowDropdown(false); }}>
                      {sport}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            Object.keys(matches[activeTab]).sort().map((sport) => (
              <button key={sport} onClick={() => setActiveSport(sport)} className={activeSport === sport ? "active" : ""}>
                {sport}
              </button>
            ))
          )}
        </div>
      )}

      <div className="match-list">
        {matches[activeTab] && activeSport && matches[activeTab][activeSport]?.length > 0 ? (
          matches[activeTab][activeSport].map((match) => (
            <div key={match._id} className="match-card">
              {editingMatchId === match._id ? (
                <>
                  <input type="text" value={updatedMatchData.teams[0]} onChange={(e) => handleTeamChange(0, e.target.value)} className="edit-input" />
                  <span> vs </span>
                  <input type="text" value={updatedMatchData.teams[1]} onChange={(e) => handleTeamChange(1, e.target.value)} className="edit-input" />
                  <input type="text" value={updatedMatchData.venue} onChange={(e) => handleChange("venue", e.target.value)} className="edit-input" placeholder="Venue" />
                  <input type="text" value={updatedMatchData.sport} onChange={(e) => handleChange("sport", e.target.value)} className="edit-input" placeholder="Sport" />
                  <input type="datetime-local" value={new Date(updatedMatchData.time).toISOString().slice(0, 16)} onChange={(e) => handleChange("time", e.target.value)} className="edit-input" />
                  <select value={updatedMatchData.status} onChange={(e) => handleChange("status", e.target.value)} className="edit-input">
                    <option value="upcoming">Upcoming</option>
                    <option value="live">Live</option>
                    <option value="past">Past</option>
                  </select>
                  <div>
                    <strong>Scores:</strong>
                    {Object.entries(updatedMatchData.scores).map(([team, score]) => (
                      <div key={team}>
                        {team}: <input type="number" value={score} onChange={(e) => handleScoreChange(team, e.target.value)} className="edit-input" style={{ width: "50px" }} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3>{match.teams.join(" vs ")}</h3>
                  <p><strong>Venue:</strong> {match.venue}</p>
                  <p><strong>Sport:</strong> {match.sport}</p>
                  <p><strong>Time:</strong> {new Date(match.time).toLocaleString()}</p>
                  <p><strong>Status:</strong> {match.status}</p>
                  {match.status === "past"
                  ? Object.entries(match.scores)
                      .map(([team, score]) => `${team}: ${score}`)
                      .join(" | ")
                  : match.status}
                </>
              )}

              {isLoggedIn && (
                <div className="edit-icons">
                  {editingMatchId === match._id ? (
                    <>
                      <button onClick={() => handleUpdate(match._id)} className="confirm-btn">✔</button>
                      <button onClick={() => setEditingMatchId(null)} className="cancel-btn">✖</button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(match)} className="edit-btn">✏</button>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-matches">No {activeTab} matches available for {activeSport || "this category"}.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
