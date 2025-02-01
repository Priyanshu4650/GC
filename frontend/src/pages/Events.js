import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Events = (props) => {
  const [matches, setMatches] = useState({ upcoming: [], live: [], past: [] });
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`http://localhost:8000/matches`);
        console.log(process.env.REACT_APP_SERVER);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();

        // Ensure data structure is correct
        setMatches({
          upcoming: data.upcoming || [],
          live: data.live || [],
          past: data.past || [],
        });

        console.log('Fetched matches:', data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    document.title += ' - ' + props.title;

    fetchMatches();
  }, []);

  return (
    <div>

      <div className="tabscontainer">
        <button onClick={() => setActiveTab('upcoming')} className={activeTab === 'upcoming' ? 'active' : ''}>Upcoming</button>
        <button onClick={() => setActiveTab('live')} className={activeTab === 'live' ? 'active' : ''}>Live</button>
        <button onClick={() => setActiveTab('past')} className={activeTab === 'past' ? 'active' : ''}>Past</button>
      </div>

      <div className="match-list">
        {matches[activeTab] && matches[activeTab].length > 0 ? (
          matches[activeTab].map(match => (
            <div key={match._id} className="match-card">
              <h3>{match.teams.join(" vs ")}</h3>
              <p>Venue: {match.venue}</p>
              <p>Time: {new Date(match.time).toLocaleString()}</p>
              <p>Scores: {JSON.stringify(match.scores)}</p>
              <p>
                Status: {match.status === 'past' 
                  ? Object.entries(match.scores).map(([team, score]) => `${team}: ${score}`).join(" | ") 
                  : match.status}
              </p>

            </div>
          ))
        ) : (
          <p>No {activeTab} matches.</p>
        )}
      </div>

      <style jsx>{`
        .tabscontainer {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }
        button {
          padding: 10px;
          border: none;
          cursor: pointer;
          background: #ddd;
          border-radius: 5px;
        }
        .active {
          background: #007bff;
          color: white;
        }
        .match-list {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .match-card {
          background: white;
          padding: 15px;
          margin: 10px;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
          width: 300px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Events;
