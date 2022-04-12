import { memo, useContext } from 'react';
import { Card, CardContainer, CardImage, CardImageContainer, CardSectionContainer, CarName, CarInfo, CarDetailsLink } from './CarListCss';
import { ThemeContext } from '../../constants/theme';
import { firstCharUpperCase } from '../../utils/util';
import { Link as RouterLink } from "react-router-dom";

const CarsList = memo((props) => {
    const theme = useContext(ThemeContext);
    return (
        <CardContainer>
            {props.allCars?.map((car, index) => {
                const carInfo = [`Stock # ${car.stockNumber}`, `${car.mileage.number} ${car.mileage.unit}`, `${car.fuelType}`, `${firstCharUpperCase(car.color)}`]
                return (
                    <Card key={index}>
                        <CardImageContainer>
                            <CardImage data-testid="car-image" src={car.pictureUrl} />
                        </CardImageContainer>
                        <CardSectionContainer>
                            <CarName data-testid="car-name" theme={theme}>{car.manufacturerName} {car.modelName}</CarName>
                            <CarInfo data-testid="car-info">{carInfo.join(" - ")}</CarInfo>
                            <CarDetailsLink data-testid="car-details-page" component={RouterLink} to={`/car-details/${car.stockNumber}`} theme={theme} underline="hover" color="#EA7F28">View Details</CarDetailsLink>
                        </CardSectionContainer>
                    </Card>
                )
            })}
        </CardContainer>
    )
});

export default CarsList;