import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

const Page = forwardRef(
  ({ children, title = '', ...other }: { children: any; title: any }, ref) => (
    <Box
      ref={ref}
      {...other}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
