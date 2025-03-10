import React, { useState, useEffect } from "react";
import "../styles/Results.css"; 

const sportsData = {
  "Badminton Mens": {
    PoolA: [
      { team: "Stalwart Rhinos", MP: 3, W: 3, L: 0, D: 0, Pts: 6 },
      { team: "Majestic Eagles", MP: 3, W: 1, L: 2, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Brave Bulls", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Savage Sharks", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Stealthy Panthers", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Wild Wolves", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Ferocious Tigers", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  "Badminton Womens": {
    PoolA: [
      { team: "Stealthy Panther", MP: 1, W: 1, L: 0, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 1, W: 1, L: 0, D: 0, Pts: 2 },
      { team: "Wild Wolves", MP: 2, W: 0, L: 2 , D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Stalwart Rhinos", MP: 3, W: 3, L: 0, D: 0, Pts: 6 },
      { team: "Ferocious Tigers", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
      { team: "Savage Sharks", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
      { team: "Majestic Eagles", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
    ],
  },
  "Basketball Mens": {
    PoolA: [
      { team: "Savage Sharks", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Ferrocious Tigers", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Stalwart Rhinos", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
      { team: "Majestic Eagles", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Stealthy Panthers", MP: 3, W: 3, L: 0, D: 0, Pts: 6 },
      { team: "Wild Wolves", MP: 3, W: 2, L: 1, D: 0, Pts: 4 },
      { team: "BraveBulls", MP: 3, W: 1, L: 2, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 3, W: 0, L: 3, D: 0, Pts: 0 },
    ],
  },
  "Basketball Womens": {
    PoolA: [
      { team: "Ferrocious Tigers", MP: 3, W: 2, L: 1, D: 0, Pts: 4 },
      { team: "Stealthy Panthers", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Mighty Lions", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Wild Wolves", MP: 3, W: 1, L: 2, D: 0, Pts: 2 },
      { team: "Stalwart Rhinos", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  Cricket: {
    PoolA: [
      { team: "Stalwart Rhinos", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Savage Sharks", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Brave Bulls", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Majestic Eagles", MP: 3, W: 3, L: 0, D: 0, Pts: 6 },
      { team: "Stealthy Panther", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Ferocious Tigers", MP: 3, W: 1, L: 2, D: 0, Pts: 2 },
      { team: "Wild Wolves", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  Football: {
    PoolA: [
      { team: "Ferrocious Tigers", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Stealthy Panthers", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Wild Wolves", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
      { team: "BraveBulls", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Stalwart Rhinos", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Majestic Eagles", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Savage Sharks", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  "Table Tennis Mens": {
    PoolA: [
      { team: "Savage Sharks", MP: 3, W: 3, L: 0, D: 0, Pts: 6 },
      { team: "Wild Wolves", MP: 3, W: 2, L: 1, D: 0, Pts: 4 },
      { team: "Majestic Eagles", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
      { team: "Stealthy Panther", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Stalwart Rhinos", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Ferocious Tigers", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Mighty Lions", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
      { team: "Brave Bulls", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  "Table Tennis Womens": {
    PoolA: [
      { team: "Stalwart Rhinos", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Savage Sharks", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Ferocious Tigers", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Wild Wolves", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Stealthy Panther", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  "Volleyball Mens": {
    PoolA: [
      { team: "Stalwart Rhinos", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Wild Wolves", MP: 3, W: 2, L: 1, D: 0, Pts: 4 },
      { team: "Stealthy Panther", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Ferocious Tigers", MP: 3, W: 0, L: 3, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Majestic Eagles", MP: 1, W: 1, L: 0, D: 0, Pts: 2 },
      { team: "Mighty Lions", MP: 1, W: 1, L: 0, D: 0, Pts: 2 },
      { team: "Savage Sharks", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Brave Bulls", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
  },
  "Volleyball Womens": {
    PoolA: [
      { team: "Wild Wolves", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Savage Sharks", MP: 2, W: 1, L: 1, D: 0, Pts: 2 },
      { team: "Brave Bulls", MP: 2, W: 0, L: 2, D: 0, Pts: 0 },
    ],
    PoolB: [
      { team: "Stealthy Panther", MP: 2, W: 2, L: 0, D: 0, Pts: 4 },
      { team: "Stalwart Rhinos", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
      { team: "Mighty Lions", MP: 1, W: 0, L: 1, D: 0, Pts: 0 },
    ],
  },
};

const Results = () => {
  const [activeSport, setActiveSport] = useState(Object.keys(sportsData)[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="results-container">
      {/* Tabs for Desktop, Dropdown for Mobile */}
      {isMobile ? (
        <select
          className="sports-dropdown"
          value={activeSport}
          onChange={(e) => setActiveSport(e.target.value)}
        >
          {Object.keys(sportsData).map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      ) : (
        <div className="sports-tabs">
          {Object.keys(sportsData).map((sport) => (
            <button
              key={sport}
              className={activeSport === sport ? "active" : ""}
              onClick={() => setActiveSport(sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      )}

      {/* Display Tables for Active Sport */}
      <div className="pools-container">
        {Object.entries(sportsData[activeSport]).map(([pool, teams]) => (
          <div key={pool} className="pool">
            <h2>{pool.replace("Pool", "Pool ")}</h2>
            <table>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>MP</th>
                  <th>W</th>
                  <th>L</th>
                  <th>D</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index}>
                    <td>{team.team}</td>
                    <td>{team.MP}</td>
                    <td>{team.W}</td>
                    <td>{team.L}</td>
                    <td>{team.D}</td>
                    <td>{team.Pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
