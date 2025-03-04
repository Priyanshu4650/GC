const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { type } = require("os");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;
console.log(process.env.MONGO_URL);

if (!MONGO_URL) {
  console.error(
    "MongoDB connection error: MONGO_URL is not defined in environment variables."
  );
  process.exit(1);
}

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// const matchSchema = new mongoose.Schema({
//   teams: { type: [String], required: true },
//   time: { type: Date, required: true },
//   venue: { type: String, required: true },
//   sport: { type: String, required: true },
//   scores: { type: Map, of: Number, default: {} },
//   status: {
//     type: String,
//     enum: ["upcoming", "live", "past"],
//     default: "upcoming",
//   },
// });

const matchSchema = new mongoose.Schema({
  title: {type: String, required: false },
  teams: { type: [String], required: true },
  time: { type: Date, required: true },
  venue: { type: String, required: true },
  sport: { type: String, required: true },
  scores: { type: Map, of: Number, default: {} },
  status: {
    type: String,
    enum: ["upcoming", "live", "past"],
    default: "upcoming",
  },
  livelink: {type: String, required: false},
});

const Match = mongoose.model("Match", matchSchema);
// const KnockOut = mongoose.model("KnockOut", knockOut);

const updateMatchStatuses = async () => {
    const now = new Date();

    try {
        // Update "upcoming" → "live" if match time has started
        await Match.updateMany(
            { time: { $lte: now }, status: "upcoming" },
            { $set: { status: "live" } }
        );

        // Update "live" → "past" if match ended (assuming 2-hour duration)
        const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
        await Match.updateMany(
            { time: { $lte: twoHoursAgo }, status: "live" },
            { $set: { status: "past" } }
        );

        console.log("Match statuses updated at ", now);
    } catch (error) {
        console.error("Error updating match statuses:", error);
    }
};

// Run status updates every minute
setInterval(updateMatchStatuses, 60000);

// Create a new match
app.post("/matches", async (req, res) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all matches categorized
app.get("/matches", async (req, res) => {
  try {
    const matches = await Match.find();
    const categorized = {
      upcoming: matches.filter((m) => m.status === "upcoming"),
      live: matches.filter((m) => m.status === "live"),
      past: matches.filter((m) => m.status === "past"),
    };
    // console.log("Matches : ", categorized); // Log full object
    res.json(categorized);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/matches/update-match/:id", async (req, res) => {
  const matchId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedMatch = await Match.findByIdAndUpdate(matchId, updatedData, { new: true });

    if (!updatedMatch) return res.status(404).json({ error: "Match not found" });

    res.json({ message: "Match updated successfully", match: updatedMatch });
  } catch (error) {
    res.status(500).json({ error: "Error updating match" });
  }
});

// Update match scores in real-time
app.put("/matches/:id/score", async (req, res) => {
  try {
    const { id } = req.params;
    const { scores } = req.body;
    const match = await Match.findByIdAndUpdate(id, { scores }, { new: true });
    io.emit("scoreUpdate", match);
    res.json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Socket.io connection for live updates
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 8000;

if (!PORT) {
  console.log("PORT not present in environment variables");
}
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
