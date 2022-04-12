import { memo, useContext } from 'react';
import { ThemeContext } from 'constants/theme';
import { logoURL } from 'constants/urls';
import { HeaderContainer, HeaderNavbar } from './HeaderCss';

export const Header = memo(() => {
    const theme = useContext(ThemeContext);
    return (
        <HeaderContainer theme={theme}>
            <img className="logo" src={logoURL}/>
            <HeaderNavbar theme={theme}>
                <p>Purchase</p>
                <p>My Orders</p>
                <p>Sell</p>
            </HeaderNavbar>
        </HeaderContainer>
    )
})