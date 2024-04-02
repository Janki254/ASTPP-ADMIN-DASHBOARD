import PropTypes from 'prop-types';
import { FaRegMoon } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';

import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import Iconify from '../../components/Iconify';
import { HEADER, NAVBAR } from '../../config';
import cssStyles from '../../utils/cssStyles';
import AccountPopover from './AccountPopover';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'isCollapse',
})(({theme, isCollapse}: {theme?: any; isCollapse: boolean}) => ({
    ...cssStyles(theme).bgBlur({}),
    boxShadow: 'none',
    height: HEADER.MOBILE_HEIGHT,
    zIndex: theme.zIndex.appBar + 1,
    transition: theme.transitions.create(['width', 'height'], {
        duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up('lg')]: {
        height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
        ...(isCollapse && {
            width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
        }),
    },
}));

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

const DashboardNavbar = ({
    onOpenSidebar,
    isCollapse,
}: {
    onOpenSidebar: any;
    isCollapse: boolean;
}) => {
    return (
        <RootStyle isCollapse={isCollapse}>
            <ToolbarStyle>
                <IconButton
                    onClick={onOpenSidebar}
                    sx={{
                        mr: 1,
                        color: 'text.primary',
                        display: {lg: 'none'},
                    }}
                >
                    <Iconify icon='eva:menu-2-fill' />
                </IconButton>
                <Box sx={{flexGrow: 1}} />
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={{xs: 0.5, sm: 1.5}}
                >
                    <IconButton sx={{color: 'text.primary'}}>
                        <FaRegMoon />
                    </IconButton>
                    <IconButton sx={{color: 'text.primary'}}>
                        <RxDashboard />
                    </IconButton>
                    <AccountPopover />
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

DashboardNavbar.propTypes = {
    onOpenSidebar: PropTypes.func,
};
export default DashboardNavbar;
