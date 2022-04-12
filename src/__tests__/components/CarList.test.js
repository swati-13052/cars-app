import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { theme, ThemeContext } from '../../constants/theme';
import CarsList from '../../components/CarsList/CarsList';
import { allCars } from '../../mockData/allCars';
import { MemoryRouter } from 'react-router-dom';
import { firstCharUpperCase } from '../../utils/util';

const renderWithContext = (
    component) => {
    return {
        ...render(
            <ThemeContext.Provider value={theme}>
                {component}
            </ThemeContext.Provider>, {wrapper: MemoryRouter})
    }
}

afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment } = renderWithContext(<CarsList />)
    expect(asFragment(<CarsList />)).toMatchSnapshot()
});

test('It should display details of car', () => {
    const { getByTestId } = renderWithContext(<CarsList allCars={allCars}/>);
    const carInfo = [`Stock # ${allCars[0].stockNumber}`, `${allCars[0].mileage.number} ${allCars[0].mileage.unit}`, `${allCars[0].fuelType}`, `${firstCharUpperCase(allCars[0].color)}`]
    expect(getByTestId('car-name')).toHaveTextContent(`${allCars[0].manufacturerName} ${allCars[0].modelName}`);
    expect(getByTestId('car-info')).toHaveTextContent(`${carInfo.join(" - ")}`);
    expect(getByTestId('car-image').src).toContain(`${allCars[0].pictureUrl}`);
});


