import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px;
    justify-content: center;

    .not-found-text {
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        font-size: 32px;
        font-weight: 700;
        margin: 24px 0;
    }

    .logo {
        width: 200px;
    }

    .page-not-found-text {
        font-size: 24px;
        font-weight: 500;
        color: ${props => props.theme.COLOURS.GRAY_DARK};
        margin: 12px 0;
    }
`