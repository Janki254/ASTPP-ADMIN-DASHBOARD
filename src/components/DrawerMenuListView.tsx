import PropTypes from 'prop-types';
import { Box, List, ListSubheader } from '@mui/material';
import { DrawerMenuListRootView } from './DrawerRootMenuListView';
import { styled } from '@mui/material/styles';

export const ListSubheaderStyle = styled((props) => (
  <ListSubheader
    disableSticky
    disableGutters
    {...props}
  />
))(({ theme }) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));
DrawerMenuListView.propTypes = {
  menuConfig: PropTypes.array,
};

export default function DrawerMenuListView({
  menuConfig,
  isCollapse = false,
  ...other
}: {
  menuConfig: any;
  isCollapse: boolean;
}) {
  return (
    <Box {...other}>
      {menuConfig &&
        menuConfig.map((group: any, index: any) => (
          <List
            key={`${index}-${group?.subheader}`}
            disablePadding
            sx={{ px: 2 }}
          >
            {group.items.map((list: any, index: any) => (
              <DrawerMenuListRootView
                key={`${index}-${list.title}`}
                list={list}
                isCollapse={isCollapse}
              />
            ))}
          </List>
        ))}
    </Box>
  );
}
