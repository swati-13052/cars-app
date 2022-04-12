import { createTheme } from "@mui/material";
import { createContext } from "react";

export const theme = {
    COLOURS: {
        GRAY_LIGHT: '#EDEDED',
        GRAY_DARK: '#4A4A4A',
        ORANGE_LIGHT: '#EA7F28',
        ORANGE_DARK: '#D37324'
    },
    SPACING: {
        SMALL: '8px',
        MEDIUM: '12px',
        LARGE: '32px',
    }
}

export const ThemeContext = createContext();

export const ButtonTheme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#EA7F28',
            dark: '#D37324',
            contrastText: '#fff'
        },
        action: {
            hover: '#D37324'
        }
    }
})