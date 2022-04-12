import { useState, useEffect, useContext } from 'react';
import { carService } from 'services/carService';
import CarsList from 'components/CarsList/CarsList';
import CarFilter from 'components/CarFilter/CarFilter';
import { CarsDisplaycontainer, CarsContainer } from './AllCardDisplayCss';
import { ThemeContext } from 'constants/theme';
import Pagination from 'components/Pagination/Pagination';
import CarListSkeleton from 'components/CarsList/CarListSkeleton';

function AllCarsDisplayContainer() {
    const [allCars, setAllCars ] = useState([]);
    const [pageNumber, setPageNumber ] = useState(1);
    const [carCountInfo, setCarCountInfo ] = useState({});
    const theme = useContext(ThemeContext);
    const [filters, setFilters ] = useState({});
    const [allColours, setAllColours] = useState([]);
    const [allManufacturer, setAllManufacturer] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        carService.getAllColours()
        .then(coloursData => {
            setAllColours(coloursData.colors);
        });

        carService.getAllManufacturer()
        .then(manufacturerData => {
            setAllManufacturer(manufacturerData.manufacturers);
        });
    }, [])

    useEffect(() => {
        setIsLoading(true);
        const payload = {
            page: pageNumber,
            ...filters
        }
        carService.fetchAllCars(payload)
        .then(carData => {
            setAllCars(carData.cars);
            setCarCountInfo({
                totalPageCount:carData.totalPageCount,
                totalCarsCount: carData.totalCarsCount
            });
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [pageNumber, filters]);

    const handleFilterChange = (filters) => {
        setFilters({ ...filters });
        setPageNumber(1);
    }

    const handlePageNumber = (pageNumber) => {
        setPageNumber(pageNumber);
    }

    return (
        <div>
            <CarsDisplaycontainer>
                <CarFilter filters={filters} allColours={allColours} allManufacturer={allManufacturer} handleFilterChange={handleFilterChange}/>
                <CarsContainer theme={theme}>
                    <div className="available-car-text">Available Cars</div>
                    <div className="total-car-text">Showing {allCars.length} of {carCountInfo?.totalCarsCount || ''}</div>
                    {isLoading ? 
                         <CarListSkeleton/>  :
                         <CarsList allCars={allCars} />
                    }
                    <Pagination totalPageCount={carCountInfo.totalPageCount} pageNumber={pageNumber} handlePageNumber={handlePageNumber}/>
                </CarsContainer>
            </CarsDisplaycontainer>
        </div>
    )
}

export default AllCarsDisplayContainer;
