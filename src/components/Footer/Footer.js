import { useContext } from "react"
import { ThemeContext } from "../../constants/theme"
import { StyledFooter } from "./FooterCss"

export const Footer = () => {
    const theme = useContext(ThemeContext);
    return (
        <StyledFooter theme={theme}>
            <div>©&nbsp;</div>
            <div>Cars App&nbsp;</div>
            <div>2022&nbsp;</div>
        </StyledFooter>
    )
}
