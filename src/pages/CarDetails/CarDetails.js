import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../constants/theme";
import { carService } from "../../services/carService";
import { firstCharUpperCase } from "../../utils/util";
import { CarInfoContainer, CarInfo, AddButton, AddCarBox, CarImage } from './CarDetailsCss';
import CircularProgress from '@mui/material/CircularProgress';
import CarDetailsSkeleton from "./CarDetailsSkeleton";

function CarDetails() {

    const [carDetails, setCarDetails] = useState({});
    const { stockNumber } = useParams();
    const theme = useContext(ThemeContext);
    const [favouriteCollections, setFavouriteCollections] = useState([]);
    const [isAddingCar, setIsAddingCar] = useState(false);
    const [isLoadingCarDetails, setIsLoadingCarDetails] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setIsLoadingCarDetails(true);
        carService.getCarDetailsForStockNumber(stockNumber)
            .then(data => {
                setCarDetails(data?.car || {});
            })
            .catch(error => {
                if (error.message === 404) {
                    navigate('*')
                }
            })
            .finally(() => {
                setIsLoadingCarDetails(false);
            })

        let addedCars = localStorage.getItem('favouriteCollections');
        if (addedCars) {
            setFavouriteCollections(JSON.parse(addedCars));
        }
    }, [stockNumber, navigate]);

    useEffect(() => {
        localStorage.setItem('favouriteCollections', JSON.stringify(favouriteCollections));
    }, [favouriteCollections]);

    const getCarInfo = () => {
        if (Object.keys(carDetails).length) {
            const carInfo = [`Stock # ${carDetails?.stockNumber}`, `${carDetails?.mileage?.number} ${carDetails?.mileage?.unit}`, `${carDetails?.fuelType}`, `${firstCharUpperCase(carDetails?.color || '')}`];
            return carInfo.join(" - ");
        } else {
            return '-'
        }
    };

    const handleSaveCar = () => {
        setIsAddingCar(true);
        setTimeout(() => {
            let carsAdded = [...favouriteCollections];
            const carIndexInFavourites = carsAdded.findIndex(car => car.stockNumber === carDetails.stockNumber);
            if (carIndexInFavourites >= 0) {
                carsAdded.splice(carIndexInFavourites, 1);
            } else {
                carsAdded = [...carsAdded, carDetails];
            }
            setFavouriteCollections(carsAdded);
            setIsAddingCar(false);
        }, 2000)

    }

    const isCarAddedToFavourite = () => {
        const carIndexInFavourites = favouriteCollections.findIndex(car => car.stockNumber === carDetails?.stockNumber);
        return carIndexInFavourites >= 0 ? 'Remove' : 'Save';
    }

    return (
        <div>
            <CarImage theme={theme}>
                <img className="car-image" src={carDetails?.pictureUrl} alt="Loading.." />
            </CarImage>

            {isLoadingCarDetails ?
                <CarDetailsSkeleton/>
                :
                <CarInfoContainer>
                    <CarInfo theme={theme}>
                        <div data-testid="car-name-detail-page" className="car-name">{carDetails?.manufacturerName} {carDetails?.modelName}</div>
                        <div data-testid="car-info" className="car-info">{getCarInfo()}</div>
                        <div className="car-availability-text">This car is currently available and can be delivereds soon as tomorrow morning. Please be aware that delivery imes shown n this page are not definitive and may change ue to bad weather conditions</div>
                    </CarInfo>
                    <AddCarBox pagetheme={theme}>
                        <div className="add-car-text">If you like this car, click the button and save it in your collection of favourite items</div>
                        <AddButton disabled={isAddingCar} color="primary" onClick={() => handleSaveCar()} pagetheme={theme} variant="contained">
                            {isAddingCar && <CircularProgress size={20} />}
                            {!isAddingCar && isCarAddedToFavourite()}
                        </AddButton>
                    </AddCarBox>
                </CarInfoContainer>
            }
        </div>
    )
}

export default CarDetails;