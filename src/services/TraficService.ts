import { faker } from "@faker-js/faker";
import { storeTraficData } from "../helpers/helpers.js";

export const generateLondonTraficData = (): TraficData => {
  // Generate random Trafic data
  const generatedTraficData = {
    city: "London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeTraficData(generatedTraficData).catch(console.error)

  // Return Trafic data
  return generatedTraficData;
};

export const generateDublinTraficData = (): TraficData => {
  // Generate random Trafic data
  const generatedTraficData: TraficData = {
    city: "Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeTraficData(generatedTraficData).catch(console.error)

  // Return Trafic data
  return generatedTraficData;
};
