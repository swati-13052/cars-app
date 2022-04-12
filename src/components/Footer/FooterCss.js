import styled from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.COLOURS.GRAY_LIGHT};
    color: ${props => props.theme.COLOURS.GRAY_DARK};
    height: 80px;
    align-items: center;
    margin-top: 24px;
`