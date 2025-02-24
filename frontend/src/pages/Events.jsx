import React, { useEffect, useState, useRef } from "react";
import "../styles/Events.css"; // Import external CSS

const Events = (props) => {
  const [matches, setMatches] = useState({ upcoming: {}, live: {}, past: {} });
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeSport, setActiveSport] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null); // Ref for handling outside clicks

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:8000/matches");
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
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
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    document.title = "GC 2.0 - " + props.title;
    fetchMatches();

    // Listen for window resize to update mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <div className="events-container">
      {/* Tabs Section */}
      <div className="tabs-container">
        {["upcoming", "live", "past"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? "active" : ""}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Sports Selection (Button or Dropdown) */}
      {matches[activeTab] && Object.keys(matches[activeTab]).length > 0 && (
        <div className="sports-tabs">
          {isMobile ? (
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={() => setShowDropdown(!showDropdown)}>
                Select Sport &#x22EE;
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  {Object.keys(matches[activeTab]).map((sport) => (
                    <button key={sport} onClick={() => { setActiveSport(sport); setShowDropdown(false); }}>
                      {sport}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            Object.keys(matches[activeTab]).map((sport) => (
              <button key={sport} onClick={() => setActiveSport(sport)} className={activeSport === sport ? "active" : ""}>
                {sport}
              </button>
            ))
          )}
        </div>
      )}

      {/* Match List */}
      <div className="match-list">
        {matches[activeTab] && activeSport && matches[activeTab][activeSport] && matches[activeTab][activeSport].length > 0 ? (
          matches[activeTab][activeSport].map((match) => (
            <div key={match._id} className="match-card">
              <h3>{match.teams.join(" vs ")}</h3>
              <p><strong>Venue:</strong> {match.venue}</p>
              <p><strong>Sport:</strong> {match.sport}</p>
              <p><strong>Time:</strong> {new Date(match.time).toLocaleString()}</p>
              <p><strong>Scores:</strong> {JSON.stringify(match.scores)}</p>
              <p><strong>Status:</strong> {match.status === "past" 
                ? Object.entries(match.scores).map(([team, score]) => `${team}: ${score}`).join(" | ") 
                : match.status}
              </p>
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
