import express from "express";
import { gaeaadata, getTrafficData } from "../controllers/TrafficController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the Traffic data based on the city name
router.get("/aa/:city", validateCityName, getTrafficData);
router.get("/co", validateCityName, gaeaadata);
router.get("/:city", validateCityName, getTrafficData);

// We will export the router
export default router;
