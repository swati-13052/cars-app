import { useContext } from 'react';
import { ThemeContext } from 'constants/theme';
import { StyledShimmer } from './ShimmerCss';

function Shimmer(props) {
    const theme = useContext(ThemeContext);
    return (
        <StyledShimmer 
            width={`${props.width}px`} 
            height={`${props.height}px`}
            theme={theme}
        />
    )
}

export default Shimmer;