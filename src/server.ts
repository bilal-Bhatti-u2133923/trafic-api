import express from "express";
import TrafficRoute from "./routes/TrafficRoute.js";
import heatrBeat from "./routes/heatrBeat.js"
import gameRoute from "./routes/gameRoute.js"
import cors from "cors";

// We will create an express app
const app = express();
app.use(cors());

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());

// We define our first route
app.use("/api/traffic", TrafficRoute);
app.use("/api/heartbeat", heatrBeat);
app.use("/api/game", gameRoute);


// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
