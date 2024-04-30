import { storeGameData } from "../helpers/helpers.js";

export const generateFlagGameData = (): gameData => {
  // Generate random Traffic data
  const generatedgamedata = {
    icon:'<FaFlag />',
  iconName:"flag",
  };

  storeGameData(generatedgamedata).catch(console.error);

  // Return Traffic data
  return generatedgamedata;
};

export const generateCarGameData = (): gameData => {
  // Generate random Traffic data
  const generatedgamedata = {
    icon:'<FaCarSide />',
  iconName:"car",
  };

  storeGameData(generatedgamedata).catch(console.error);

  // Return Traffic data
  return generatedgamedata;
};

export const generaterainGameData = (): gameData => {
  // Generate random Traffic data
  const generatedgamedata = {
    icon:'<FaCloudShowersWater />',
  iconName:"rain",
  };

  storeGameData(generatedgamedata).catch(console.error);

  // Return Traffic data
  return generatedgamedata;
};

export const generateplaneGameData = (): gameData => {
  // Generate random Traffic data
  const generatedgamedata = {
    icon:'<FaPlaneDeparture />',
  iconName:"plane",
  };

  storeGameData(generatedgamedata).catch(console.error);

  // Return Traffic data
  return generatedgamedata;
};
