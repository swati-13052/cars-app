import { CarInfoContainer, AddCarBox, CarInfoShimmer } from './CarDetailsCss';
import Shimmer from "../../components/Shimmer/Shimmer";
import { useContext } from 'react';
import { ThemeContext } from '../../constants/theme';

function CarDetailsSkeleton() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <CarInfoContainer>
                <CarInfoShimmer theme={theme}>
                    <Shimmer theme={theme} width={400} height={50} />
                    <Shimmer theme={theme} width={500} height={20} />
                    <Shimmer theme={theme} width={500} height={200} />
                </CarInfoShimmer>
                <AddCarBox pagetheme={theme}>
                    <Shimmer theme={theme} width={300} height={40} />
                    <Shimmer theme={theme} width={100} height={20} />
                </AddCarBox>
            </CarInfoContainer>
        </div>
    )
}

export default CarDetailsSkeleton;