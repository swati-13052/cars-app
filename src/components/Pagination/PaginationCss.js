import { Link } from "@mui/material";
import styled from "styled-components";

export const PaginationContainer = styled.section`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    .page-number-info {
        font-size: 12px;
        color: ${props => props.theme.COLOURS.GRAY_DARK};
    }
`

export const StyledLink = styled(Link)`
    &&&{
        font-size: 14px;
        cursor: pointer;
        color: ${props => props.disabled ? props.theme.COLOURS.GRAY_DARK : props.theme.COLOURS.ORANGE_LIGHT};
        pointer-events: ${props => props.disabled ? 'none' : ''}
    }
`