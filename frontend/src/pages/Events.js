import React, { useEffect, useState } from 'react';

const Events = (props) => {
  const [matches, setMatches] = useState({ upcoming: {}, live: {}, past: {} });
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activeSport, setActiveSport] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`http://localhost:8000/matches`);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();

        const categorizedMatches = { upcoming: {}, live: {}, past: {} };
        ['upcoming', 'live', 'past'].forEach(status => {
          data[status]?.forEach(match => {
            if (!categorizedMatches[status][match.sport]) {
              categorizedMatches[status][match.sport] = [];
            }
            categorizedMatches[status][match.sport].push(match);
          });
        });

        setMatches(categorizedMatches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    document.title += ' - ' + props.title;
    fetchMatches();
  }, [props]);

  return (
    <div>
      <div className="tabscontainer">
        {['upcoming', 'live', 'past'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'active' : ''}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
        ))}
      </div>

      {matches[activeTab] && Object.keys(matches[activeTab]).length > 0 && (
        <div className="sports-tabs">
          {Object.keys(matches[activeTab]).map(sport => (
            <button key={sport} onClick={() => setActiveSport(sport)} className={activeSport === sport ? 'active' : ''}>{sport}</button>
          ))}
        </div>
      )}

      <div className="match-list">
        {matches[activeTab] && activeSport && matches[activeTab][activeSport] && matches[activeTab][activeSport].length > 0 ? (
          matches[activeTab][activeSport].map(match => (
            <div key={match._id} className="match-card">
              <h3>{match.teams.join(" vs ")}</h3>
              <p>Venue: {match.venue}</p>
              <p>Sport: {match.sport}</p>
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
          <p>No {activeTab} matches available for {activeSport || 'this category'}.</p>
        )}
      </div>

      <style jsx>{`
        .tabscontainer, .sports-tabs {
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
