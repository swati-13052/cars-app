import React from 'react'
import { render, act } from '@testing-library/react';
import { theme, ThemeContext } from '../../constants/theme';
import { MemoryRouter } from 'react-router-dom';
import CarDetails from '../../pages/CarDetails/CarDetails';
import { carDetails } from '../../mockData/carDetails';

const renderWithContext = (
    component) => {
    return {
        ...render(
            <ThemeContext.Provider value={theme}>
                {component}
            </ThemeContext.Provider>, { wrapper: MemoryRouter })
    }
}

let originFetch;

beforeEach(() => {
    originFetch = global.fetch;
});

afterEach(() => {
    global.fetch = originFetch;
});

it('getCarDetails should have been called', async () => {
  const carDetailsResponse = carDetails;
  const mRes = { json: jest.fn().mockResolvedValueOnce(carDetailsResponse) };
  const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
  global.fetch = mockedFetch;
  await act( async () => renderWithContext(<CarDetails/>));
  expect(mockedFetch).toHaveBeenCalled();
});

it('should take a snapshot', () => {
    const { asFragment } = renderWithContext(<CarDetails />)
    expect(asFragment(<CarDetails />)).toMatchSnapshot()
});