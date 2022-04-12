import styled from "styled-components";

export const CarsDisplaycontainer = styled.div`
    display: flex;
    width: 95%;
    margin: 16px auto;
    justify-content: space-between;

`

export const CarsContainer = styled.div`
    width: 68%;
    .available-car-text {
        font-weight: 700;
        font-size: 18px;
        color: ${props => props.theme.COLOURS.GRAY_DARK}
    }
    .total-car-text {
        font-size: 18px;
        padding 16px 0;
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        font-weight: 500px
    }
`