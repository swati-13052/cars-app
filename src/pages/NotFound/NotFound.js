import { useContext } from "react";
import { ThemeContext } from "../../constants/theme";
import { logoURL } from "../../constants/urls";
import { NotFoundContainer } from "./NotFoundCss";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

function NotFound() {
    const theme = useContext(ThemeContext);
    return (
        <NotFoundContainer theme={theme}>
            <img className="logo" src={logoURL}/>
            <div className="not-found-text">404 - Not Found</div>
            <div className="page-not-found-text">Sorry, the page you are looking for does not exist</div>
            <div className="page-not-found-text">You can always go back to the<Link component={RouterLink} to={`/`} theme={theme} underline="hover" color="#EA7F28"> homepage.</Link> </div>
        </NotFoundContainer>
    )
}

export default NotFound;