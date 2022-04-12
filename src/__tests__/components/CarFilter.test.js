import React from 'react'
import { render, cleanup, screen, fireEvent, within } from '@testing-library/react'
import CarFilter from './../../components/CarFilter/CarFilter';
import { theme, ThemeContext } from './../../constants/theme';
import { colors } from '../../mockData/color';
import { manufacturers } from '../../mockData/manufacturer';

const renderWithContext = (
    component) => {
    return {
        ...render(
            <ThemeContext.Provider value={theme}>
                {component}
            </ThemeContext.Provider>)
    }
}

afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment } = renderWithContext(<CarFilter />)
    expect(asFragment(<CarFilter />)).toMatchSnapshot()
});

it('should display correct tex for the labels', () => {
    const { getByTestId } = renderWithContext(<CarFilter />)
    expect(getByTestId('color-label')).toHaveTextContent('Color');
    expect(getByTestId('manufacturer-label')).toHaveTextContent('Manufacturer');
})

it('should display color dropdown and change value on clicking any option', async () => {
    const { getByTestId } = renderWithContext(<CarFilter allColours={colors}/>);
    const dropdown = getByTestId('color-select');
    const defaultOption = dropdown.children[0];
    expect(dropdown).toHaveTextContent(defaultOption.textContent);
    
    fireEvent.mouseDown(screen.getByRole('button', {name: 'Color'}));

    const listbox = within(screen.getByRole('listbox'));
    const listBoxItems = listbox.getAllByRole('option');
    expect(listBoxItems.length).toBe(8);

    fireEvent.click(listbox.getByText(/Red/i));
    expect(getByTestId('color-select')).toHaveTextContent(/Red/i); 
})

it('should display manufacturer dropdown and change value on clicking any option', async () => {
    const { getByTestId } = renderWithContext(<CarFilter allManufacturer={manufacturers}/>);
    const dropdown = getByTestId('manufacturer-select');
    const defaultOption = dropdown.children[0];
    expect(dropdown).toHaveTextContent(defaultOption.textContent);
    
    fireEvent.mouseDown(screen.getByRole('button', { name: 'Manufacturer'}));

    const listbox = within(screen.getByRole('listbox'));
    const listBoxItems = listbox.getAllByRole('option');
    expect(listBoxItems.length).toBe(2);

    fireEvent.click(listbox.getByText(/Audi/i));
    expect(getByTestId('manufacturer-select')).toHaveTextContent(/Audi/i); 
})


