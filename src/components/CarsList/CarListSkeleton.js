import Shimmer from '../Shimmer/Shimmer';
import { Card, CardContainer, CardImageContainer, CardSectionContainer } from './CarListCss';

function CarListSkeleton() {
    return (
        <CardContainer>
            {[...Array(10)].map((car, index) => {
                return (
                    <Card key={index}>
                        <CardImageContainer>
                            <Shimmer  width={50} height={50}/>
                        </CardImageContainer>
                        <CardSectionContainer>
                            <Shimmer width={200} height={10}/>
                            <Shimmer width={300} height={10}/>
                            <Shimmer width={100} height={10}/>
                        </CardSectionContainer>
                    </Card>
                )
            })}
        </CardContainer>
    )
};
export default CarListSkeleton;