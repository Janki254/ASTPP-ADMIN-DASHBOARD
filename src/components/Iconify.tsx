import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default function Iconify({
  icon,
  sx,
  ...other
}: {
  icon: string;
  sx?: object;
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ ...sx }}
      {...other}
    />
  );
}
