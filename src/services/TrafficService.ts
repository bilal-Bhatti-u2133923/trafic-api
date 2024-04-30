import { faker } from "@faker-js/faker";
import { storeTrafficData } from "../helpers/helpers.js";

export const generateLondonTrafficData = (): TrafficData => {
  // Generate random Traffic data
  const generatedTrafficData = {
    city: "London",
    Traffic: faker.number.int({ min: 0, max: 100 }),
    rain: faker.number.int({ min: 0, max: 90 }),
    wind: faker.number.int({ min: 2, max: 30 }),
    sun: faker.number.int({ min: 1, max: 11 }),
  };

  storeTrafficData(generatedTrafficData).catch(console.error);

  // Return Traffic data
  return generatedTrafficData;
};

export const generateDublinTrafficData = (): TrafficData => {
  // Generate random Traffic data
  const generatedTrafficData = {
    city: "Dublin",
    Traffic: faker.number.int({ min: 0, max: 100 }),
    rain: faker.number.int({ min: 0, max: 90 }),
    wind: faker.number.int({ min: 2, max: 30 }),
    sun: faker.number.int({ min: 1, max: 11 }),
  };

  storeTrafficData(generatedTrafficData).catch(console.error);

  // Return Traffic data
  return generatedTrafficData;
};
