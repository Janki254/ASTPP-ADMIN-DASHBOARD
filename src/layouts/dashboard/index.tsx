import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { HEADER, NAVBAR } from '../../config';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const APP_BAR_MOBILE = 64;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div', {
    shouldForwardProp: (prop) => prop !== 'collapseClick',
})<any>(({theme, collapseClick}: any) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT,
        paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
        transition: theme.transitions.create('margin-left', {
            duration: theme.transitions.duration.shorter,
        }),
        ...(collapseClick && {
            marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
        }),
    },
}));

export default function DashboardLayout() {
    const [open, setOpen] = useState(false);
    const {
        collapseClick,
        isCollapse = false,
    }: {
        collapseClick: any;
        isCollapse?: boolean;
    } = useCollapseDrawer();

    return (
        <RootStyle>
            <DashboardNavbar
                onOpenSidebar={() => setOpen(true)}
                isCollapse={isCollapse}
            />
            <DashboardSidebar
                isOpenSidebar={open}
                onCloseSidebar={() => setOpen(false)}
            />
            <MainStyle collapseClick={collapseClick}>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
