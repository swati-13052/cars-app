import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export const CarsFilterContainer = styled.div`
    width: 25%;
    height: 230px;
    border: 1px solid;
    border-color: ${(props) => props.theme.COLOURS.GRAY_LIGHT};
    padding: 24px;

    .filter-button-container {
        display: flex;
        justify-content: end;
    }
`

export const StyledInputLabel = styled(InputLabel)`
&&&{
    margin-bottom: 8px;
    font-size: 14px;
}
`

export const FilterButton = styled(Button)`
    &&& {
        margin-top: 16px;
        text-align: right;
        width:40%;

    }
`
