import express from "express";
import { getHeart } from "../controllers/heatrBeatController.js"; 

// We will create a router object
const router = express.Router();

// We will create a route for the Traffic data based on the city name
router.get("/", getHeart);


// We will export the router
export default router;
