import express from "express";
import { getGameData } from "../controllers/GameController.js";
import { validateGameNum } from "../middleware/Gamevalidators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the Traffic data based on the city name
router.get("/:usernumber", validateGameNum , getGameData);

// We will export the router
export default router;
