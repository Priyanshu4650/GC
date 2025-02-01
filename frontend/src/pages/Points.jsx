import React from "react";

const PointsTable = () => {
  const columns = [
    "Rank", "Team", "Matches", "Wins", "Losses", "Draws", "Points", "Goals For", "Goals Against", "Goal Difference", "Form"
  ];
  
  const teams = [
    { rank: 1, name: "Team A", matches: 10, wins: 8, losses: 1, draws: 1, points: 25, gf: 20, ga: 5, gd: 15, form: "WWDWW" },
    { rank: 2, name: "Team B", matches: 10, wins: 7, losses: 2, draws: 1, points: 22, gf: 18, ga: 7, gd: 11, form: "WLWDW" },
    { rank: 3, name: "Team C", matches: 10, wins: 6, losses: 2, draws: 2, points: 20, gf: 15, ga: 8, gd: 7, form: "DWWLL" },
    { rank: 4, name: "Team D", matches: 10, wins: 6, losses: 3, draws: 1, points: 19, gf: 17, ga: 10, gd: 7, form: "WWLWL" },
    { rank: 5, name: "Team E", matches: 10, wins: 5, losses: 4, draws: 1, points: 16, gf: 12, ga: 10, gd: 2, form: "LWWLD" },
    { rank: 6, name: "Team F", matches: 10, wins: 4, losses: 5, draws: 1, points: 13, gf: 10, ga: 12, gd: -2, form: "WLWDL" },
    { rank: 7, name: "Team G", matches: 10, wins: 3, losses: 6, draws: 1, points: 10, gf: 8, ga: 15, gd: -7, form: "LLLWW" },
    { rank: 8, name: "Team H", matches: 10, wins: 2, losses: 7, draws: 1, points: 7, gf: 6, ga: 18, gd: -12, form: "LWLLL" }
  ];
  
  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr className="bg-gray-800 text-white">
            {columns.map((col, index) => (
              <th key={index} className="border border-gray-300 p-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-gray-200">
              {Object.values(team).map((value, i) => (
                <td key={i} className="border border-gray-300 p-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
