import React from "react";
import "../styles/PreviousYear.css"; // External CSS
import Footer from "../components/Footer";

const PointsTable = () => {
  const teams = [
    "BRAVE BULLS",
    "FEROCIOUS TIGERS",
    "MAJESTIC EAGLES",
    "MIGHTY LIONS",
    "SAVAGE SHARKS",
    "STAWWART RHINOS",
    "STEALTHY PANTHERS",
    "WILD WOLVES",
  ];

  const data = [
    // { sport: "ATHLETICS", scores: ["", "", "", "", "", "", "", ""] },
    { sport: "BADMINTON", scores: ["-", "6", "-", "-", "-", "10", "4", "2"] },
    {
      sport: "BASKETBALL - MEN",
      scores: ["2", "-", "-", "4", "10", "-", "-", "6"],
    },
    {
      sport: "BASKETBALL - WOMEN",
      scores: ["-", "2", "-", "10", "-", "-", "4", "6"],
    },
    { sport: "CHESS", scores: ["-", "2", "-", "6", "10", "-", "-", "4"] },
    { sport: "CRICKET", scores: ["-", "-", "4", "2", "-", "10", "6", "-"] },
    { sport: "FOOTBALL", scores: ["10", "-", "2", "-", "-", "6", "4", "-"] },
    {
      sport: "TABLE TENNIS",
      scores: ["4", "2", "-", "-", "10", "6", "-", "-"],
    },
    {
      sport: "VOLLEYBALL - MEN",
      scores: ["-", "-", "6", "-", "2", "4", "-", "10"],
    },
    {
      sport: "VOLLEYBALL - WOMEN",
      scores: ["-", "-", "-", "4", "2", "6", "-", "10"],
    },
  ];

  const total = ["16", "12", "12", "22", "36", "38", "24", "38"];
  const penalties = ["2", "2", "4", "-", "-", "-", "-", "-"];
  const grandTotal = ["14", "10", "8", "22", "36", "38", "24", "38"];

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="highlight">SPORTS</th>
              {teams.map((team, index) => (
                <th key={index}>{team}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={row.sport === "ATHLETICS" ? "highlight" : ""}>
                  {row.sport}
                </td>
                {row.scores.map((score, colIndex) => (
                  <td key={colIndex}>{score}</td>
                ))}
              </tr>
            ))}
            <tr className="bold-row">
              <td>TOTAL</td>
              {total.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
            </tr>
            <tr className="bold-row">
              <td>PENALTIES</td>
              {penalties.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
            </tr>
            <tr className="bold-row">
              <td>GRAND TOTAL</td>
              {grandTotal.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default PointsTable;
