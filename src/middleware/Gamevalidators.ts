import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:city",
 * validateCityName,
 * getTrafficData
 * );
 */
export const validateGameNum = param("usernumber")
  // We will use the isString method to check if the city param is a string
  .isNumeric()
  // We will use the withMessage method to set a custom error message
  .withMessage("anser must be an number");
