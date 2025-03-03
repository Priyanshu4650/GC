const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
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

const matchSchema = new mongoose.Schema({
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
});

const Match = mongoose.model("Match", matchSchema);

// const matches = [
//   {
//     teams: ["Rhinos", " Eagles"],
//     time: new Date("2025-02-28T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Rhinos: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Sharks"],
//     time: new Date("2025-02-28T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Lions: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Tigers"],
//     time: new Date("2025-03-01T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Wolves: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Bulls"],
//     time: new Date("2025-03-01T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Panthers: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Rhinos"],
//     time: new Date("2025-03-02T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Lions: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Tigers"],
//     time: new Date("2025-03-02T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Bulls: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", " Eagles"],
//     time: new Date("2025-03-03T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Sharks: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: new Date("2025-03-03T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Rhinos"],
//     time: new Date("2025-03-04T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Sharks: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Bulls"],
//     time: new Date("2025-03-04T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Wolves: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", " Eagles"],
//     time: new Date("2025-03-05T18:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Lions: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Panthers"],
//     time: new Date("2025-03-05T19:30:00"),
//     venue: "Nila Football Ground",
//     sport: "Football",
//     scores: { Tigers: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   // badminton mens
//   {
//     teams: ["Rhinos", " Eagles"],
//     time: new Date("2025-02-28T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Rhinos: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Sharks"],
//     time: new Date("2025-03-01T06:45:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Panthers: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Tigers"],
//     time: new Date("2025-03-01T09:00:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Wolves: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Lions"],
//     time: new Date("2025-03-01T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Rhinos: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Eagles"],
//     time: new Date("2025-03-02T07:00:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Bulls: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Panthers"],
//     time: new Date("2025-03-02T10:35:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Tigers: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Wolves"],
//     time: new Date("2025-03-02T14:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Sharks: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Rhinos"],
//     time: new Date("2025-03-02T17:50:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Bulls: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: [" Eagles", "Lions"],
//     time: new Date("2025-03-03T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Eagles: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Bulls"],
//     time: new Date("2025-03-04T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Lions: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Tigers"],
//     time: new Date("2025-03-05T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Sharks: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Wolves"],
//     time: new Date("2025-03-07T17:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Mens",
//     scores: { Panthers: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   // badminton womens
//   {
//     teams: ["Wolves", "Lions"],
//     time: new Date("2025-02-28T19:30:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Wolves: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: [" Eagles", "Rhinos"],
//     time: new Date("2025-03-01T12:40:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Eagles: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Tigers"],
//     time: new Date("2025-03-02T09:15:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Sharks: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: new Date("2025-03-02T12:50:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: [" Eagles", "Sharks"],
//     time: new Date("2025-03-02T20:05:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Eagles: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: new Date("2025-03-03T19:30:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Lions"],
//     time: new Date("2025-03-04T19:30:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Panthers: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: [" Eagles", "Tigers"],
//     time: new Date("2025-03-06T19:30:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Eagles: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Sharks"],
//     time: new Date("2025-03-07T19:30:00"),
//     venue: "Agora Auditorium",
//     sport: "Badminton Womens",
//     scores: { Rhinos: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Panthers"],
//     time: "2025-03-02T18:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Bulls: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: "2025-03-01T17:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Tigers"],
//     time: "2025-03-01T07:15:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Eagles: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Lions"],
//     time: "2025-03-01T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Bulls: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: "2025-02-28T17:15:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Eagles"],
//     time: "2025-03-02T07:15:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Sharks: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Lions"],
//     time: "2025-03-02T17:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Wolves: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Wolves"],
//     time: "2025-02-28T18:15:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Bulls: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Rhinos"],
//     time: "2025-03-03T18:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Sharks: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Lions"],
//     time: "2025-03-03T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Panthers: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Sharks"],
//     time: "2025-03-04T18:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Tigers: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", " Eagles"],
//     time: "2025-03-05T18:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Mens",
//     scores: { Rhinos: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Tigers"],
//     time: "2025-02-28T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Wolves: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Rhinos"],
//     time: "2025-02-28T20:30:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Lions: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: "2025-03-01T18:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Wolves: "0", "Panthers": "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: "2025-03-01T18:30:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Lions"],
//     time: "2025-03-02T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Wolves: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Tigers"],
//     time: "2025-03-02T20:30:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { "Panthers": "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Wolves"],
//     time: "2025-03-04T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Rhinos: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Panthers"],
//     time: "2025-03-04T20:30:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Lions: "0", "Panthers": "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Tigers"],
//     time: "2025-03-05T20:00:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { Lions: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Rhinos"],
//     time: "2025-03-05T20:30:00",
//     venue: "Sahyadri Court",
//     sport: "Basketball Womens",
//     scores: { "Panthers": "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Tigers"],
//     time: "2025-02-28T17:00:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Panthers: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Wolves"],
//     time: "2025-03-01T06:30:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Tigers: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Eagles"],
//     time: "2025-03-01T08:15:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Panthers: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Rhinos"],
//     time: "2025-03-01T16:30:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Lions: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Rhinos"],
//     time: "2025-03-02T06:30:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Sharks: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Wolves"],
//     time: "2025-03-02T09:00:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Eagles: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Lions"],
//     time: "2025-03-02T16:30:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Bulls: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Bulls"],
//     time: "2025-03-03T06:10:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Sharks: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Eagles"],
//     time: "2025-03-04T06:10:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Tigers: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Lions"],
//     time: "2025-03-05T06:10:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Sharks: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: "2025-03-05T16:30:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Rhinos"],
//     time: "2025-03-06T06:10:00",
//     venue: "Sahyadri Ground",
//     sport: "Cricket",
//     scores: { Bulls: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Eagles"],
//     time: "2025-03-01T09:30:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Wolves: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Sharks"],
//     time: "2025-03-01T10:45:00",
//     venue: "Malhar TT Room Table 2",
//     sport: "Table Tennis Mens",
//     scores: { Panthers: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Bulls"],
//     time: "2025-03-01T12:00:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Tigers: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Lions"],
//     time: "2025-03-01T14:00:00",
//     venue: "Malhar TT Room Table 2",
//     sport: "Table Tennis Mens",
//     scores: { Rhinos: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Wolves"],
//     time: "2025-03-02T09:30:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Sharks: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Eagles"],
//     time: "2025-03-04T17:00:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Panthers: "0", Eagles: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Bulls"],
//     time: "2025-03-02T12:00:00",
//     venue: "Malhar TT Room Table 2",
//     sport: "Table Tennis Mens",
//     scores: { Rhinos: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Lions"],
//     time: "2025-03-02T14:00:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Tigers: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Wolves"],
//     time: "2025-03-03T18:00:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Panthers: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Sharks"],
//     time: "2025-03-03T19:15:00",
//     venue: "Malhar TT Room Table 2",
//     sport: "Table Tennis Mens",
//     scores: { Eagles: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: "2025-03-04T18:00:00",
//     venue: "Malhar TT Room Table 1",
//     sport: "Table Tennis Mens",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Bulls"],
//     time: "2025-03-04T19:15:00",
//     venue: "Malhar TT Room Table 2",
//     sport: "Table Tennis Mens",
//     scores: { Lions: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: "2025-02-28T17:30:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Panthers"],
//     time: "2025-03-01T09:30:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Lions: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Sharks"],
//     time: "2025-03-02T12:00:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Rhinos: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: "2025-03-02T14:00:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Sharks", "Tigers"],
//     time: "2025-03-02T09:30:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Sharks: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Wolves"],
//     time: "2025-03-03T17:30:00",
//     venue: "Saveri TT Room Table 1",
//     sport: "Table Tennis Women's",
//     scores: { Lions: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Tigers"],
//     time: "2025-02-28T19:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Rhinos: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Bulls"],
//     time: "2025-02-28T18:00:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Eagles: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Tigers", "Panthers"],
//     time: "2025-03-01T16:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Tigers: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Sharks"],
//     time: "2025-03-01T17:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Lions: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Wolves"],
//     time: "2025-03-01T18:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Rhinos: "0", Wolves: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Lions"],
//     time: "2025-03-05T17:00:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Eagles: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Tigers"],
//     time: "2025-03-02T17:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Wolves: "0", Tigers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Sharks"],
//     time: "2025-03-02T18:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Bulls: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Panthers"],
//     time: "2025-03-03T18:00:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Wolves: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Eagles", "Sharks"],
//     time: "2025-03-04T18:00:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Eagles: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Panthers"],
//     time: "2025-03-06T19:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Rhinos: "0", Panthers: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Lions", "Bulls"],
//     time: "2025-03-06T20:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Men's",
//     scores: { Lions: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Rhinos"],
//     time: "2025-03-01T06:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Panthers: "0", Lions: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Sharks"],
//     time: "2025-03-01T07:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Wolves: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Wolves", "Bulls"],
//     time: "2025-03-02T06:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Wolves: "0", Bulls: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Panthers", "Lions"],
//     time: "2025-03-02T07:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Panthers: "0", Rhinos: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Bulls", "Sharks"],
//     time: "2025-03-03T06:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Bulls: "0", Sharks: "0" },
//     status: "upcoming",
//   },
//   {
//     teams: ["Rhinos", "Lions"],
//     time: "2025-03-04T06:30:00",
//     venue: "Nila Volleyball Court",
//     sport: "Volleyball Women's",
//     scores: { Rhinos: "0", Lions: "0" },
//     status: "upcoming",
//   },
// ];

// Match.deleteMany({})
//     .then(() => {
//         console.log("All records deleted from the Match collection.");
//         mongoose.connection.close();
//     })
//     .catch(err => console.error("Error deleting records:", err));

// Match.insertMany(matches)
//     .then(() => {
//         console.log("Dummy matches inserted!");
//         mongoose.connection.close();
//     })
//     .catch(err => console.error("Error inserting dummy data:", err));

// // Update match statuses based on current time
// const updateMatchStatuses = async () => {
//     const now = new Date();
//     await Match.updateMany({ time: { $gt: now } }, { status: 'upcoming' });
//     await Match.updateMany({ time: { $lte: now } }, { status: 'live' });
// };

// setInterval(updateMatchStatuses, 60000);

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
