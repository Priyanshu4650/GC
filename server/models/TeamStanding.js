const mongoose = require("mongoose");

const teamStandingSchema = new mongoose.Schema({
  sport: { type: String, required: true },
  pool: { type: String, required: true },
  team: { type: String, required: true },
  MP: { type: Number, default: 0 },
  W: { type: Number, default: 0 },
  L: { type: Number, default: 0 },
  D: { type: Number, default: 0 },
  Pts: { type: Number, default: 0 },
});

module.exports = mongoose.model("TeamStanding", teamStandingSchema);
