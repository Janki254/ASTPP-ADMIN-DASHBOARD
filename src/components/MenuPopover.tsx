import PropTypes from 'prop-types';
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme }: { theme: any }) => ({
    [theme.breakpoints.up('sm')]: {
        top: -7,
        zIndex: 1,
        width: 12,
        right: 20,
        height: 12,
        content: "''",
        position: 'absolute',
        borderRadius: '0 0 4px 0',
        transform: 'rotate(-135deg)',
        background: theme.palette.background.paper,
        borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    },
}));

MenuPopover.propTypes = {
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

export default function MenuPopover({
    children,
    sx,
    open,
    onClose,
    anchorEl,
    ...other
}: {
    children: any;
    sx?: object;
    open: boolean;
    onClose: () => void;
    anchorEl: any;
}) {
    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: 'inherit',
                    boxShadow: (theme: any) => theme.customShadows.z20,
                    border: (theme: any) =>
                        `solid 1px ${theme.palette.grey[500_8]}`,
                    width: 200,
                    ...sx,
                },
            }}
            {...other}
        >
            <ArrowStyle className='arrow' />

            {children}
        </Popover>
    );
}
