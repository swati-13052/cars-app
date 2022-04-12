import { payloadToQueryParams } from './../utils/util';

export const getAllCarsURL = (queryParams) => `https://auto1-mock-server.herokuapp.com/api/cars${payloadToQueryParams(queryParams)}`;
export const getAllColoursURL = `https://auto1-mock-server.herokuapp.com/api/colors`;
export const getAllManufacturerURL = `https://auto1-mock-server.herokuapp.com/api/manufacturers`;
export const getCarDetails = (stockNumber) => `https://auto1-mock-server.herokuapp.com/api/cars/${stockNumber}`;
export const logoURL = `https://auto1-js-task-api--mufasa71.repl.co/images/logo.png`;