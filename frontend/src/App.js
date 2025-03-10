import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/Login";
import SportsPointsTable from "./pages/Points";
import Team from "./pages/Team";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/events" element={<Events title="Events" />} />
          <Route
            path="/points-table"
            element={<SportsPointsTable title="Leaderboard" />}
          />
          <Route path="/login" element={<AdminPanel title="Admin Page" />} />
          <Route path="/team" element={<Team title="The Team" />} />
          <Route path="*" element={<Home title="Home" />} />
          <Route path="/results" element={<Results />} />
          {/* <Route path="/previous" element={<PointsTable />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
