import { faker } from "@faker-js/faker";
import { storetrafficData } from "../helpers/helpers.js";

export const generateLondontrafficData = (): trafficData => {
  // Generate random traffic data
  const generatedtrafficData = {
    city: "London",
    traffic: faker.number.int({ min: 0, max: 100 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storetrafficData(generatedtrafficData).catch(console.error)

  // Return traffic data
  return generatedtrafficData;
};

export const generateDublintrafficData = (): trafficData => {
  // Generate random traffic data
  const generatedtrafficData: trafficData = {
    city: "Dublin",
    traffic: faker.number.int({ min: 0, max: 100 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storetrafficData(generatedtrafficData).catch(console.error)

  // Return traffic data
  return generatedtrafficData;
};
