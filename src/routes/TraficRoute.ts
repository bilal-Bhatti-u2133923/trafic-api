import express from "express";
import { getTraficData } from "../controllers/TraficController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the Trafic data based on the city name
router.get("/:city", validateCityName, getTraficData);

// We will export the router
export default router;
