import styled from 'styled-components';
import Link from '@mui/material/Link';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Card = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #ededed;
    margin-bottom: 16px;
    padding: 8px 0;
`

export const CardImage = styled.img`
    width: 50px;
    height: 50px;
`

export const CardImageContainer = styled.div`
    width: 50px;
    height: 50px;
    padding: 8px;
    margin-right: 24px;
`

export const CarName = styled.div`
    margin-bottom: 0;
    color: ${(props) => props.theme?.COLOURS?.GRAY_DARK};
    font-weight: 700;
    font-size: 18px
`;

export const CarInfo = styled.p`
    margin: 8px 0;
    font-size: 14px;
`;

export const CardSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    .shimmer {
        margin: 8px 0;
    }
`;

export const CarDetailsLink = styled(Link)`
    color: ${(props) => props.theme?.COLOURS?.ORANGE_LIGHT};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
`