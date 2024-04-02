import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Box } from '@mui/material';

Logo.propTypes = {
    sx: PropTypes.object,
    isCollapse: PropTypes.bool,
};

export default function Logo({
    sx,
    isCollapse,
}: {
    sx?: object;
    isCollapse: boolean;
}) {
    return (
        <RouterLink to='/'>
            {isCollapse ? (
                <Box
                    component='img'
                    src='static/astpp_logo.png'
                    sx={{width: 50, height: 50, ...sx}}
                />
            ) : (
                <Box
                    component='img'
                    src='/static/astpp_full_logo.png'
                    sx={{width: 140, height: 50, ...sx}}
                />
            )}
        </RouterLink>
    );
}
