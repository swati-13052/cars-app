import styled from "styled-components";
import Button from '@mui/material/Button';

export const CarInfoContainer = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    min-height: 400px;
`

export const CarInfo = styled.div`{
 width: 60%;
    .car-name {
        font-size: 32px;
        font-weight: 700;
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        margin-bottom: 24px;
    }
    .car-info {
        font-size: 24px;
        margin-bottom: 24px;
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        font-weight: 500;
    }
    .car-availability-text {
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        font-weight: 500;
        line-height: 24px;
    }
 
}`

export const AddButton = styled(Button)`
    &&& {
        margin-top: 16px;
        text-align: right;
        width:50%;
    }
`


export const AddCarBox = styled.div`
    border: 1px solid ${props => props.pagetheme.COLOURS.GRAY_LIGHT};
    width: 30%;
    padding: 24px;
    max-height: 140px;
    .add-car-text {
        line-height: 24px;
        font-weight: 500;
        color: ${props => props.pagetheme.COLOURS.GRAY_DARK};
    }
`

export const CarImage = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.COLOURS.GRAY_LIGHT};

    .car-image {
        width: 200px;
        height: 200px;
    }
`

export const LoadingCarDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 300px;
    align-items: center;
`

export const CarInfoShimmer = styled.div`
    display: flex;
    flex-direction: column;
`