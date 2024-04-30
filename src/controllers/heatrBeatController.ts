
import { Request, Response } from "express";

export const getHeart = async (_req: Request, res: Response) => {
    // We will use the validationResult function to check if there are any validation errors
    res.send("API is alive").status(200)
  };