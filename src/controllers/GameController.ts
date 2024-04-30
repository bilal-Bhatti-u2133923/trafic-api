import { Request, Response } from "express";
import {
  generateCarGameData,
  generateFlagGameData,
  generateplaneGameData,
  generaterainGameData,
} from "../services/game.js";

// ...  Other controller functions you may have ...

export const getGameData = async (req: Request, res: Response) => {
  try {
    const { usernumber } = req.params;

    let finalGameData;

    if (usernumber === "1") {
      finalGameData = generateFlagGameData();
    } else if (usernumber === "2") {
      finalGameData = generateCarGameData();
    } else if (usernumber === "3") {
      finalGameData = generaterainGameData();
    } else if (usernumber === "4") {
      finalGameData = generateplaneGameData();
    } else {
      res.status(404).send("question not found");
    }

    res.status(200).json(finalGameData);
  } catch (error) {
    console.error("Error fetching game data:", error);
    res.status(500).send("Error in fetching game data");
  }
};
