import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import { CAR_FILTERS } from 'constants/constants';
import { ThemeContext } from 'constants/theme';
import { CarsFilterContainer, FilterButton, StyledInputLabel } from './CarFilterCss';
import { firstCharUpperCase } from 'utils/util';

function CarFilter(props) {
    const theme = useContext(ThemeContext);
    const [filters, setFilters] = useState({});

    const setFilter = (event, filterName) => {
        setFilters({ ...filters, [filterName]: event.target.value });
    }

    const handleFilterChange = () => {
        props.handleFilterChange(filters);
    }

    useEffect(() => {
        setFilters({ ...props.filters })
    }, [props.filters])

    return (
        <CarsFilterContainer theme={theme}>
            <StyledInputLabel data-testid="color-label" id="color-label">Color</StyledInputLabel>
            <Select
                labelId="color-label"
                value={filters?.color || ''}
                data-testid="color-select"
                onChange={(event) => setFilter(event, CAR_FILTERS.color)}
                displayEmpty
                sx={{
                    width: '100%',
                    marginBottom: '8px'
                }}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">All car colors</MenuItem>
                {props.allColours?.map((color, index) => {
                    return (
                        <MenuItem value={color} key={index}>{firstCharUpperCase(color)}</MenuItem>
                    )
                })}
            </Select>

            <StyledInputLabel data-testid="manufacturer-label" id="manufacturer-label">Manufacturer</StyledInputLabel>
            <Select
                labelId="manufacturer-label"
                value={filters?.manufacturer || ''}
                data-testid="manufacturer-select"
                onChange={(event) => setFilter(event, CAR_FILTERS.manufacturer)}
                displayEmpty
                sx={{
                    width: '100%'
                }}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">All Manufacturers</MenuItem>
                {props.allManufacturer?.map((manufacturer, index) => {
                    return (
                        <MenuItem value={manufacturer.name} key={index}>{manufacturer.name}</MenuItem>
                    )
                })}
            </Select>
            <div className="filter-button-container">
                <FilterButton onClick={() => handleFilterChange()} color="primary" pagetheme={theme} variant="contained">Filter</FilterButton>
            </div>
        </CarsFilterContainer>
    )
}

export default CarFilter;