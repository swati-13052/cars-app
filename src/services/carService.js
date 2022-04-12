import { getAllCarsURL, getAllColoursURL, getAllManufacturerURL, getCarDetails } from "constants/urls";


function fetchAllCars(payload) {
    return fetch(getAllCarsURL(payload))
    .then(response => response.json())
    .then(response => response);
}

function getAllColours() {
    return fetch(getAllColoursURL)
    .then(response => response.json())
    .then(response => response);
}

function getAllManufacturer() {
    return fetch(getAllManufacturerURL)
    .then(response => response.json())
    .then(response => response);
}

function getCarDetailsForStockNumber(stockNumber) {
    return fetch(getCarDetails(stockNumber), {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(response => response);
};

export const carService = {
    fetchAllCars,
    getAllColours,
    getAllManufacturer,
    getCarDetailsForStockNumber
};