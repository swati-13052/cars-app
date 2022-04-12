import { allCars } from "../../mockData/allCars"
import { carDetails } from "../../mockData/carDetails"
import { colors } from "../../mockData/color"
import { manufacturers } from "../../mockData/manufacturer"
import { carService } from "../../services/carService"

test('If all car list are fetched', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(allCars)})
      )

    const allFetchedCars = await carService.fetchAllCars();
    expect(Array.isArray(allFetchedCars)).toEqual(true)
    expect(allFetchedCars.length).toEqual(1);
});

test('If all colours are fetched', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(colors)})
      )

    const allFetchedColours = await carService.getAllColours();
    expect(Array.isArray(allFetchedColours)).toEqual(true)
    expect(allFetchedColours.length).toEqual(7);
});

test('If all manufacturers are fetched', async() => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(manufacturers)})
      )

    const allFetchedManufacturers = await carService.getAllManufacturer();
    expect(Array.isArray(allFetchedManufacturers)).toEqual(true)
    expect(allFetchedManufacturers.length).toEqual(1);
});

test('If car details are fetched', async() => {
    jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(carDetails), ok: true})
    )
    const fetchedCarDetails = await carService.getCarDetailsForStockNumber(41400);
    expect(typeof fetchedCarDetails === 'object').toEqual(true);
    expect(carDetails.stockNumber).toBe(carDetails.stockNumber);
});