import express from "express";
import { getTrafficData } from "../controllers/TrafficController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the Traffic data based on the city name
router.get("/:city", validateCityName, getTrafficData);

// We will export the router
export default router;
