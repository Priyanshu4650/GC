const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;
console.log(process.env.MONGO_URL);

if (!MONGO_URL) {
    console.error("MongoDB connection error: MONGO_URL is not defined in environment variables.");
    process.exit(1);
}

mongoose.connect(MONGO_URL).then(() => console.log("Connected to MongoDB"))
  .catch(err => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
  });

const matchSchema = new mongoose.Schema({
    teams: { type: [String], required: true },
    time: { type: Date, required: true },
    venue: { type: String, required: true },
    sport: { type: String, required: true },
    scores: { type: Map, of: Number, default: {} },
    status: { type: String, enum: ['upcoming', 'live', 'past'], default: 'upcoming' }
});

const Match = mongoose.model('Match', matchSchema);

const dummyMatches = [
    {
      teams: ["Rhinos", "Sharks"],
	  time: new Date("2025-02-28T17:15:00"), 
	  venue: "Agora Badminton Court",
      sport: "Badminton Mens",
	  scores: { "Rhinos": "0", "Sharks": "0" },
	  status: "upcoming"
    },
    {
      teams: [
        "Panthers",
        "Eagles"
      ],
      time: new Date("2025-03-01T06:45:00"),
      venue: "Agora Badminton Court",
      sport: "Badminton Mens",
      scores: {
        "Rhinos" : "0", "Sharks": "0"
      },
      status: "upcoming"
    },
    {
        teams: [
          "Wolves",
          "Bulls"
        ],
        time: new Date("2025-03-01T09:00:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Wolves" : "0", "Bulls": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Tigers"
        ],
        time: new Date("2025-03-01T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Lions" : "0", "Tigers": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Panthers",
          "Rhinos"
        ],
        time: new Date("2025-03-02T07:00:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Rhinos" : "0", "Panthers": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Sharks",
          "Eagles"
        ],
        time: new Date("2025-03-02T10:35:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Eagles" : "0", "Sharks": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Wolves"
        ],
        time: new Date("2025-03-02T14:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Lions" : "0", "Wolves": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Tigers",
          "Bulls"
        ],
        time: new Date("2025-03-02T17:45:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Tigers" : "0", "Bulls": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Panthers",
          "Sharks"
        ],
        time: new Date("2025-03-03T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Panthers" : "0", "Sharks": "0"
        },
        status: "upcoming"
      },{
        teams: [
          "Rhinos",
          "Eagles"
        ],
        time: new Date("2025-03-04T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Rhinos" : "0", "Eagles": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Bulls"
        ],
        time: new Date("2025-03-05T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Bulls" : "0", "Lions": "0"
        },
        status: "upcoming"
      }
      ,{
        teams: [
          "Tigers",
          "Wolves"
        ],
        time: new Date("2025-03-07T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Tigers" : "0", "Wolves": "0"
        },
        status: "upcoming"
    },
    {
      teams: ["Rhinos", "Sharks"],
	  time: new Date("2025-02-28T17:15:00"), 
	  venue: "Agora Badminton Court",
      sport: "Badminton Mens",
	  scores: { "Rhinos": "0", "Sharks": "0" },
	  status: "upcoming"
    },
    {
      teams: [
        "Panthers",
        "Eagles"
      ],
      time: new Date("2025-03-01T06:45:00"),
      venue: "Agora Badminton Court",
      sport: "Badminton Mens",
      scores: {
        "Rhinos" : "0", "Sharks": "0"
      },
      status: "upcoming"
    },
    {
        teams: [
          "Wolves",
          "Bulls"
        ],
        time: new Date("2025-03-01T09:00:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Wolves" : "0", "Bulls": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Tigers"
        ],
        time: new Date("2025-03-01T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Lions" : "0", "Tigers": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Panthers",
          "Rhinos"
        ],
        time: new Date("2025-03-02T07:00:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Rhinos" : "0", "Panthers": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Sharks",
          "Eagles"
        ],
        time: new Date("2025-03-02T10:35:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Eagles" : "0", "Sharks": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Wolves"
        ],
        time: new Date("2025-03-02T14:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Lions" : "0", "Wolves": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Tigers",
          "Bulls"
        ],
        time: new Date("2025-03-02T17:45:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Tigers" : "0", "Bulls": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Panthers",
          "Sharks"
        ],
        time: new Date("2025-03-03T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Panthers" : "0", "Sharks": "0"
        },
        status: "upcoming"
      },{
        teams: [
          "Rhinos",
          "Eagles"
        ],
        time: new Date("2025-03-04T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Rhinos" : "0", "Eagles": "0"
        },
        status: "upcoming"
      },
      {
        teams: [
          "Lions",
          "Bulls"
        ],
        time: new Date("2025-03-05T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Bulls" : "0", "Lions": "0"
        },
        status: "upcoming"
      }
      ,{
        teams: [
          "Tigers",
          "Wolves"
        ],
        time: new Date("2025-03-07T17:15:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Mens",
        scores: {
          "Tigers" : "0", "Wolves": "0"
        },
        status: "upcoming"
    },
    {
        teams: ["Wolves", "Bulls"],
        time: new Date("2025-02-28T19:30:00"), 
        venue: "Agora Badminton Court",
        sport: "Badminton Womens",
        scores: { "Wolves": "0", "Bulls": "0" },
        status: "upcoming"
      },
      {
        teams: [
          "Panthers",
          "Lions"
        ],
        time: new Date("2025-03-01T16:30:00"),
        venue: "Agora Badminton Court",
        sport: "Badminton Womens",
        scores: {
          "Lions" : "0", "Panthers": "0"
        },
        status: "upcoming"
      },
      {
          teams: [
            "Eagles",
            "Rhinos"
          ],
          time: new Date("2025-03-01T12:40:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Eagles" : "0", "Rhinos": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Sharks",
            "Tigers"
          ],
          time: new Date("2025-03-02T09:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Sharks" : "0", "Tigers": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Panthers",
            "wolves"
          ],
          time: new Date("2025-03-02T12:50:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Wolves" : "0", "Panthers": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Bulls",
            "Lions"
          ],
          time: new Date("2025-03-02T16:35:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Bulls" : "0", "Lions": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Eagles",
            "Sharks"
          ],
          time: new Date("2025-03-02T20:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Eagles" : "0", "Sharks": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Tigers",
            "Rhinos"
          ],
          time: new Date("2025-03-03T19:30:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Tigers" : "0", "Rhinos": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Lions",
            "Wolves"
          ],
          time: new Date("2025-03-04T19:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Wolves" : "0", "Lions": "0"
          },
          status: "upcoming"
        },{
          teams: [
            "Bulls",
            "Panthers"
          ],
          time: new Date("2025-03-05T19:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Bulls" : "0", "Panthers": "0"
          },
          status: "upcoming"
        },
        {
          teams: [
            "Eagles",
            "Tigers"
          ],
          time: new Date("2025-03-06T19:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Eagles" : "0", "Tigers": "0"
          },
          status: "upcoming"
        }
        ,{
          teams: [
            "Rhinos",
            "Sharks"
          ],
          time: new Date("2025-03-07T19:15:00"),
          venue: "Agora Badminton Court",
          sport: "Badminton Womens",
          scores: {
            "Rhinos" : "0", "Sharks": "0"
          },
          status: "upcoming"
      }
];

// Match.insertMany(dummyMatches)
//     .then(() => {
//         console.log("Dummy matches inserted!");
//         mongoose.connection.close();
//     })
//     .catch(err => console.error("Error inserting dummy data:", err));

// Update match statuses based on current time
// const updateMatchStatuses = async () => {
//     const now = new Date();
//     await Match.updateMany({ time: { $gt: now } }, { status: 'upcoming' });
//     await Match.updateMany({ time: { $lte: now } }, { status: 'live' });
// };

// setInterval(updateMatchStatuses, 60000);

// const updateMatchStatuses = async () => {
//     const now = new Date();

//     try {
//         // Update "upcoming" → "live" if match time has started
//         await Match.updateMany(
//             { time: { $lte: now }, status: "upcoming" },
//             { $set: { status: "live" } }
//         );

//         // Update "live" → "past" if match ended (assuming 2-hour duration)
//         const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
//         await Match.updateMany(
//             { time: { $lte: twoHoursAgo }, status: "live" },
//             { $set: { status: "past" } }
//         );

//         console.log("Match statuses updated at ", now);
//     } catch (error) {
//         console.error("Error updating match statuses:", error);
//     }
// };

// // Run status updates every minute
// setInterval(updateMatchStatuses, 60000);


// Create a new match
app.post('/matches', async (req, res) => {
    try {
        const match = new Match(req.body);
        await match.save();
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all matches categorized
app.get('/matches', async (req, res) => {
    try {
        const matches = await Match.find();
        const categorized = {
            upcoming: matches.filter(m => m.status === 'upcoming'),
            live: matches.filter(m => m.status === 'live'),
            past: matches.filter(m => m.status === 'past')
        };
        // console.log("Matches : ", categorized); // Log full object
        res.json(categorized);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update match scores in real-time
app.put('/matches/:id/score', async (req, res) => {
    try {
        const { id } = req.params;
        const { scores } = req.body;
        const match = await Match.findByIdAndUpdate(id, { scores }, { new: true });
        io.emit('scoreUpdate', match);
        res.json(match);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Socket.io connection for live updates
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 8000;

if(!PORT) {
    console.log("PORT not present in environment variables");
}
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));