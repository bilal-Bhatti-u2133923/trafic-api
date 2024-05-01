import { Request, Response } from "express";
import {
  generateCarGameData,
  generateFlagGameData,
  generateplaneGameData,
  generaterainGameData,
} from "../services/game.js";
import { validationResult } from "express-validator";

/**
 * Gets the Traffic data for a city
 * @param req the request object
 * @param res the response object
 */

export const getGameData = async (req: Request, res: Response) => {


  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }




  try {
    const { usernumber } = req.params;

    let finalGameData: gameData;

    if (usernumber === "1") {
      finalGameData = generateFlagGameData();
    } else if (usernumber === "2") {
      finalGameData = generateCarGameData();
    } else if (usernumber === "3") {
      finalGameData = generaterainGameData();
    } else if (usernumber === "4") {
      finalGameData = generateplaneGameData();
    } else {
      res.status(404).send("question not found puck a number from 1 to 4");
    }

    res.status(200).json(finalGameData);
  } catch (error) {
    console.error("Error fetching game data:", error);
    res.status(500).send("Error in fetching game data");
  }
};
