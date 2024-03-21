import { faker } from "@faker-js/faker";
import { storeTrafficData } from "../helpers/helpers.js";

export const generateLondonTrafficData = (): TrafficData => {
  // Generate random Traffic data
  const generatedTrafficData = {
    city: "London",
    Traffic: faker.number.int({ min: 0, max: 100 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeTrafficData(generatedTrafficData).catch(console.error)

  // Return Traffic data
  return generatedTrafficData;
};

export const generateDublinTrafficData = (): TrafficData => {
  // Generate random Traffic data
  const generatedTrafficData: TrafficData = {
    city: "Dublin",
    Traffic: faker.number.int({ min: 0, max: 100 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeTrafficData(generatedTrafficData).catch(console.error)

  // Return Traffic data
  return generatedTrafficData;
};
