import { styled } from '@mui/material/styles';

const DrawerWrapper = styled('div')(({ theme }: { theme: any }) => ({
    [theme.breakpoints.up('xs')]: {
        width: 250,
    },
    [theme.breakpoints.up('sm')]: {
        width: 250,
    },
    [theme.breakpoints.up('md')]: {
        width: 500,
    },
    [theme.breakpoints.up('lg')]: {
        width: 500,
    },
}));

export default DrawerWrapper;
