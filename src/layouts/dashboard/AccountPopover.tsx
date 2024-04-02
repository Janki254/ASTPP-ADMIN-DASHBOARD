import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import {
  Button,
  Box,
  Divider,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
} from '@mui/material';
import MenuPopover from '../../components/MenuPopover';
import { MENU_OPTIONS } from '../../constants';
import Iconify from '../../components/Iconify';

const AccountPopover = () => {
  const [menuOptions, setMenuOptions] = useState([...MENU_OPTIONS]);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === '/organizations') {
      const arrayIndex = menuOptions.findIndex(
        (x: { label: string }) => x.label === 'label.switch_organization'
      );
      if (arrayIndex >= 0) {
        menuOptions.splice(arrayIndex, 1);
        setMenuOptions(menuOptions);
      }
    }
  }, [location]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar
           src='/static/mock-images/avatars/avatar_default.jpg'
           alt={'dav'}
         />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography
            variant='subtitle1'
            noWrap
          >
            Demo
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary' }}
            noWrap
          >
            demo@user.com
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
          <MenuItem
            key={'sad'}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Iconify
              icon={''}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />
            Profile
          </MenuItem>

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color='inherit'
            variant='outlined'
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
};
export default AccountPopover;
