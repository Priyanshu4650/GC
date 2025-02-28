import React, { useEffect, useState, useRef } from "react";
import "../styles/Events.css"; // Import external CSS

const Events = (props) => {
  const [matches, setMatches] = useState({ upcoming: {}, live: {}, past: {} });
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeSport, setActiveSport] = useState("Football");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true); // Loader state
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // const response = await fetch(`https://gc-backend-s3lk.onrender.com/matches`);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch matches");
        // }
        const data = [
          {
            teams: ["Rhinos", " Eagles"],
            time: new Date("2025-02-28T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Rhinos: "2", Eagles: "1" },
            status: "past",
          },
          {
            teams: ["Lions", "Sharks"],
            time: new Date("2025-02-28T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Lions: "1", Sharks: "0" },
            status: "past",
          },
          {
            teams: ["Wolves", "Tigers"],
            time: new Date("2025-03-01T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Wolves: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Bulls"],
            time: new Date("2025-03-01T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Panthers: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Rhinos"],
            time: new Date("2025-03-02T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Lions: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Tigers"],
            time: new Date("2025-03-02T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Bulls: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", " Eagles"],
            time: new Date("2025-03-03T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Sharks: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: new Date("2025-03-03T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Rhinos"],
            time: new Date("2025-03-04T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Sharks: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Bulls"],
            time: new Date("2025-03-04T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Wolves: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", " Eagles"],
            time: new Date("2025-03-05T18:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Lions: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Panthers"],
            time: new Date("2025-03-05T19:30:00"),
            venue: "Nila Football Ground",
            sport: "Football",
            scores: { Tigers: "0", Panthers: "0" },
            status: "upcoming",
          },
          // badminton mens
          {
            teams: ["Rhinos", " Eagles"],
            time: new Date("2025-02-28T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Rhinos: "3", Eagles: "2" },
            status: "past",
          },
          {
            teams: ["Panthers", "Sharks"],
            time: new Date("2025-03-01T06:45:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Panthers: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Tigers"],
            time: new Date("2025-03-01T09:00:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Wolves: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Lions"],
            time: new Date("2025-03-01T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Rhinos: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Eagles"],
            time: new Date("2025-03-02T07:00:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Bulls: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Panthers"],
            time: new Date("2025-03-02T10:35:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Tigers: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Wolves"],
            time: new Date("2025-03-02T14:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Sharks: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Rhinos"],
            time: new Date("2025-03-02T17:50:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Bulls: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: [" Eagles", "Lions"],
            time: new Date("2025-03-03T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Eagles: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Bulls"],
            time: new Date("2025-03-04T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Lions: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Tigers"],
            time: new Date("2025-03-05T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Sharks: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Wolves"],
            time: new Date("2025-03-07T17:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Mens",
            scores: { Panthers: "0", Wolves: "0" },
            status: "upcoming",
          },
          // badminton womens
          {
            teams: ["Wolves", "Lions"],
            time: new Date("2025-02-28T19:30:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Wolves: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: [" Eagles", "Rhinos"],
            time: new Date("2025-03-01T12:40:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Eagles: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Tigers"],
            time: new Date("2025-03-02T09:15:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Sharks: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: new Date("2025-03-02T12:50:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: [" Eagles", "Sharks"],
            time: new Date("2025-03-02T20:05:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Eagles: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: new Date("2025-03-03T19:30:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Rhinos: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Lions"],
            time: new Date("2025-03-04T19:30:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Panthers: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: [" Eagles", "Tigers"],
            time: new Date("2025-03-06T19:30:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Eagles: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Sharks"],
            time: new Date("2025-03-07T19:30:00"),
            venue: "Agora Auditorium",
            sport: "Badminton Womens",
            scores: { Rhinos: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Panthers"],
            time: "2025-03-02T18:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Bulls: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: "2025-03-01T17:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Eagles", "Tigers"],
            time: "2025-03-01T07:15:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Eagles: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Lions"],
            time: "2025-03-01T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Bulls: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: "2025-02-28T17:15:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Rhinos: "15", Tigers: "33" },
            status: "past",
          },
          {
            teams: ["Sharks", "Eagles"],
            time: "2025-03-02T07:15:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Sharks: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Lions"],
            time: "2025-03-02T17:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Wolves: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Wolves"],
            time: "2025-02-28T18:15:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Bulls: "37", Wolves: "52" },
            status: "past",
          },
          {
            teams: ["Sharks", "Rhinos"],
            time: "2025-03-03T18:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Sharks: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Lions"],
            time: "2025-03-03T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Panthers: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Sharks"],
            time: "2025-03-04T18:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Tigers: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", " Eagles"],
            time: "2025-03-05T18:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Mens",
            scores: { Rhinos: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Tigers"],
            time: "2025-02-28T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Wolves: "2", Tigers: "3" },
            status: "past",
          },
          {
            teams: ["Lions", "Rhinos"],
            time: "2025-02-28T20:30:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Lions: "11", Rhinos: "0" },
            status: "past",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: "2025-03-01T18:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Wolves: "0", "Panthers": "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: "2025-03-01T18:30:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Rhinos: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Lions"],
            time: "2025-03-02T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Wolves: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Tigers"],
            time: "2025-03-02T20:30:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { "Panthers": "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Wolves"],
            time: "2025-03-04T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Rhinos: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Panthers"],
            time: "2025-03-04T20:30:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Lions: "0", "Panthers": "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Tigers"],
            time: "2025-03-05T20:00:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { Lions: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Rhinos"],
            time: "2025-03-05T20:30:00",
            venue: "Sahyadri Court",
            sport: "Basketball Womens",
            scores: { "Panthers": "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Tigers"],
            time: "2025-02-28T17:00:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Panthers: "61/2", Tigers: "60/7" },
            status: "past",
          },
          {
            teams: ["Tigers", "Wolves"],
            time: "2025-03-01T06:30:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Tigers: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Eagles"],
            time: "2025-03-01T08:15:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Panthers: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Rhinos"],
            time: "2025-03-01T16:30:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Lions: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Rhinos"],
            time: "2025-03-02T06:30:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Sharks: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Eagles", "Wolves"],
            time: "2025-03-02T09:00:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Eagles: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Lions"],
            time: "2025-03-02T16:30:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Bulls: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Bulls"],
            time: "2025-03-03T06:10:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Sharks: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Eagles"],
            time: "2025-03-04T06:10:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Tigers: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Lions"],
            time: "2025-03-05T06:10:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Sharks: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: "2025-03-05T16:30:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Rhinos"],
            time: "2025-03-06T06:10:00",
            venue: "Sahyadri Ground",
            sport: "Cricket",
            scores: { Bulls: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Eagles"],
            time: "2025-03-01T09:30:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Wolves: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Sharks"],
            time: "2025-03-01T10:45:00",
            venue: "Malhar TT Room Table 2",
            sport: "Table Tennis Mens",
            scores: { Panthers: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Bulls"],
            time: "2025-03-01T12:00:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Tigers: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Lions"],
            time: "2025-03-01T14:00:00",
            venue: "Malhar TT Room Table 2",
            sport: "Table Tennis Mens",
            scores: { Rhinos: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Wolves"],
            time: "2025-03-02T09:30:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Sharks: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Eagles"],
            time: "2025-03-04T17:00:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Panthers: "0", Eagles: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Bulls"],
            time: "2025-03-02T12:00:00",
            venue: "Malhar TT Room Table 2",
            sport: "Table Tennis Mens",
            scores: { Rhinos: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Tigers", "Lions"],
            time: "2025-03-02T14:00:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Tigers: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Wolves"],
            time: "2025-03-03T18:00:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Panthers: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Eagles", "Sharks"],
            time: "2025-03-03T19:15:00",
            venue: "Malhar TT Room Table 2",
            sport: "Table Tennis Mens",
            scores: { Eagles: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: "2025-03-04T18:00:00",
            venue: "Malhar TT Room Table 1",
            sport: "Table Tennis Mens",
            scores: { Rhinos: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Bulls"],
            time: "2025-03-04T19:15:00",
            venue: "Malhar TT Room Table 2",
            sport: "Table Tennis Mens",
            scores: { Lions: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: "2025-02-28T17:30:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Rhinos: "2", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Panthers"],
            time: "2025-03-01T09:30:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Lions: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Sharks"],
            time: "2025-03-02T12:00:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Rhinos: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: "2025-03-02T14:00:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Sharks", "Tigers"],
            time: "2025-03-02T09:30:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Sharks: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Wolves"],
            time: "2025-03-28T17:30:00",
            venue: "Saveri TT Room Table 1",
            sport: "Table Tennis Women's",
            scores: { Lions: "0", Wolves: "2" },
            status: "past",
          },
          {
            teams: ["Rhinos", "Tigers"],
            time: "2025-02-28T19:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Rhinos: "2", Tigers: "0" },
            status: "past",
          },
          {
            teams: ["Eagles", "Bulls"],
            time: "2025-02-28T18:00:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Eagles: "2", Bulls: "0" },
            status: "past",
          },
          {
            teams: ["Tigers", "Panthers"],
            time: "2025-03-01T16:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Tigers: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Sharks"],
            time: "2025-03-01T17:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Lions: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Wolves"],
            time: "2025-03-01T18:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Rhinos: "0", Wolves: "0" },
            status: "upcoming",
          },
          {
            teams: ["Eagles", "Lions"],
            time: "2025-03-05T17:00:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Eagles: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Tigers"],
            time: "2025-03-02T17:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Wolves: "0", Tigers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Sharks"],
            time: "2025-03-02T18:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Bulls: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Panthers"],
            time: "2025-03-03T18:00:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Wolves: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Eagles", "Sharks"],
            time: "2025-03-04T18:00:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Eagles: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Panthers"],
            time: "2025-03-06T19:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Rhinos: "0", Panthers: "0" },
            status: "upcoming",
          },
          {
            teams: ["Lions", "Bulls"],
            time: "2025-03-06T20:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Men's",
            scores: { Lions: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Rhinos"],
            time: "2025-03-01T06:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Panthers: "0", Lions: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Sharks"],
            time: "2025-03-01T07:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Wolves: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Wolves", "Bulls"],
            time: "2025-03-02T06:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Wolves: "0", Bulls: "0" },
            status: "upcoming",
          },
          {
            teams: ["Panthers", "Lions"],
            time: "2025-03-02T07:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Panthers: "0", Rhinos: "0" },
            status: "upcoming",
          },
          {
            teams: ["Bulls", "Sharks"],
            time: "2025-03-03T06:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Bulls: "0", Sharks: "0" },
            status: "upcoming",
          },
          {
            teams: ["Rhinos", "Lions"],
            time: "2025-03-04T06:30:00",
            venue: "Nila Volleyball Court",
            sport: "Volleyball Women's",
            scores: { Rhinos: "0", Lions: "0" },
            status: "upcoming",
          },
        ];

        const categorized = {
          upcoming: data.filter((m) => m.status === "upcoming"),
          live: data.filter((m) => m.status === "live"),
          past: data.filter((m) => m.status === "past"),
        };

        const categorizedMatches = { upcoming: {}, live: {}, past: {} };
        ["upcoming", "live", "past"].forEach((status) => {
          categorized[status]?.forEach((match) => {
            if (!categorizedMatches[status][match.sport]) {
              categorizedMatches[status][match.sport] = [];
            }
            categorizedMatches[status][match.sport].push(match);
          });
        });

        setMatches(categorizedMatches);
        console.log(categorizedMatches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    document.title = "GC 2.0 - " + props.title;
    fetchMatches();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => setShowDropdown(false), 150);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props]);

  return (
    <div className="events-container">
      {/* Show Loader While Fetching Data */}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading schedule...</p>
        </div>
      ) : (
        <>
          {/* Tabs Section */}
          <div className="tabs-container">
            {["upcoming", "live", "past"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? "active" : ""}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Sports Selection (Button or Dropdown) */}
          {matches[activeTab] && Object.keys(matches[activeTab]).length > 0 && (
            <div className="sports-tabs">
              {isMobile ? (
                <div className="dropdown" ref={dropdownRef}>
                  <button className="dropdown-btn" onClick={(e) => {
                      e.stopPropagation();
                      setShowDropdown((prev) => !prev);
                  }}>
                    Select Sport ⌄
                  </button>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      {Object.keys(matches[activeTab])
                        .sort()
                        .map((sport) => (
                          <button
                            key={sport}
                            onClick={() => {
                              setActiveSport(sport);
                              setShowDropdown(false);
                            }}
                          >
                            {sport}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                Object.keys(matches[activeTab])
                  .sort()
                  .map((sport) => (
                    <button key={sport} onClick={() => setActiveSport(sport)} className={activeSport === sport ? "active" : ""}>
                      {sport}
                    </button>
                  ))
              )}
            </div>
          )}

          {/* Match List */}
          <div className="match-list">
            {matches[activeTab] && activeSport && matches[activeTab][activeSport]?.length > 0 ? (
              matches[activeTab][activeSport].map((match) => (
                <div key={match._id} className="match-card">
                  <h3>{match.teams.join(" vs ")}</h3>
                  <p><strong>Venue:</strong> {match.venue}</p>
                  <p><strong>Sport:</strong> {match.sport}</p>
                  <p><strong>Time:</strong> {new Date(match.time).toLocaleString()}</p>
                  <p><strong>Scores:</strong> {JSON.stringify(match.scores)}</p>
                  <p><strong>Status:</strong> {match.status === "past" 
                    ? Object.entries(match.scores).map(([team, score]) => `${team}: ${score}`).join(" | ") 
                    : match.status}
                  </p>
                </div>
              ))
            ) : (
              <p className="no-matches">No {activeTab} matches available for {activeSport || "this category"}.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
