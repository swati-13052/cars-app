import Link from '@mui/material/Link';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../constants/theme';
import { PaginationContainer, StyledLink } from './PaginationCss';

function Pagination(props) {
    const theme = useContext(ThemeContext);

    const handlePageNumber = (pageNumber) => {
        props.handlePageNumber(pageNumber);
    }

    return (
        <PaginationContainer theme={theme}>
            <StyledLink disabled={props.pageNumber === 1} onClick={() => handlePageNumber(1)} component="button" theme={theme} underline="hover" color="#EA7F28">First</StyledLink>
            <StyledLink disabled={props.pageNumber === 1} onClick={() => handlePageNumber(props.pageNumber - 1)} component="button" theme={theme} underline="hover" color="#EA7F28">Previous</StyledLink>
            <p className="page-number-info">Page {props.pageNumber} of {props.totalPageCount}</p>
            <StyledLink disabled={props.pageNumber === props.totalPageCount} onClick={() => handlePageNumber(props.pageNumber + 1)} component="button" theme={theme} underline="hover" color="#EA7F28">Next</StyledLink>
            <StyledLink onClick={() => handlePageNumber(props.totalPageCount)} component="button" theme={theme} underline="hover" color="#EA7F28">Last</StyledLink>
        </PaginationContainer>
    )
}

export default Pagination;