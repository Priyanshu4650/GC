const express = require("express");
const router = express.Router();
const TeamStanding = require("../models/TeamStanding");

// Get all results
router.get("/", async (req, res) => {
  try {
    const results = await TeamStanding.find();

    // Formatting data in the structure expected by the frontend
    const formattedData = {};

    results.forEach((result) => {
      if (!formattedData[result.sport]) {
        formattedData[result.sport] = {};
      }

      if (!formattedData[result.sport][result.pool]) {
        formattedData[result.sport][result.pool] = [];
      }

      formattedData[result.sport][result.pool].push({
        team: result.team,
        MP: result.MP,
        W: result.W,
        L: result.L,
        D: result.D,
        Pts: result.Pts,
      });
    });

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching results", error });
  }
});

// Add or update a sport's results
router.post("/update", async (req, res) => {
  const { sportName, pools } = req.body;

  try {
    // Iterate over pools and update each team’s standing
    for (const poolName in pools) {
      const teams = pools[poolName];

      for (const teamData of teams) {
        await TeamStanding.findOneAndUpdate(
          { sport: sportName, pool: poolName, team: teamData.team },
          { ...teamData }, // Updating all values (MP, W, L, etc.)
          { upsert: true, new: true }
        );
      }
    }

    res.json({ message: "Results updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating results", error });
  }
});

module.exports = router;
