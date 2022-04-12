import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    align-items: center;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.COLOURS.GRAY_LIGHT};
    height: 80px;
    .logo {
        width: 200px
    }
`;

export const HeaderNavbar = styled.div`
    display:flex;
    width: 250px;
    justify-content: space-between;
    color: ${props => props.theme.COLOURS.GRAY_DARK};
    font-weight: 600;
`
