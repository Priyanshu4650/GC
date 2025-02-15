import React from "react";

const SportsPointsTable = () => {
  const teams = [
    "BRAVE BULLS",
    "FEROCIOUS TIGERS",
    "MAJESTIC EAGLES",
    "MIGHTY LIONS",
    "SAVAGE SHARKS",
    "STALWART RHINOS",
    "STEALTHY PANTHERS",
    "WILD WOLVES",
  ];

  const sports = [
    "ATHLETICS",
    "BADMINTON - MENS",
    "BADMINTON - WOMENS",
    "BASKETBALL - MENS",
    "BASKETBALL - WOMENS",
    "CHESS",
    "CRICKET",
    "FOOTBALL",
    "TABLE TENNIS - MEN",
    "TABLE TENNIS - WOMEN",
    "VOLLEYBALL - MEN",
    "VOLLEYBALL - WOMEN",
    "MARCH PAST",
    "TOTAL",
    "PENALTIES",
    "GRAND TOTAL*",
  ];

  return (
    <div className="container flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="overflow-auto w-full max-w-5xl bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border border-black text-center">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-2">Sport</th>
              {teams.map((team, index) => (
                <th key={index} className="border border-black p-2">{team}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sports.map((sport, rowIndex) => (
              <tr key={rowIndex} className="border border-black">
                <td className="border border-black p-2 font-bold">{sport}</td>
                {teams.map((_, colIndex) => (
                  <td key={colIndex} className="border border-black p-2"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-center mt-4">*In case of tie, March Past Standings would be considered (as informed in the Board Meetings)</p>
      </div>
    </div>
  );
};

export default SportsPointsTable;
