import express from "express";
import { gettrafficData } from "../controllers/trafficController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the traffic data based on the city name
router.get("/:city", validateCityName, gettrafficData);

// We will export the router
export default router;
