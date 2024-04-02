import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Box, Link, ListItemText } from '@mui/material';
import { ListItemButton, ListItemIcon, Collapse, List } from '@mui/material';
import { NAVBAR } from '../utils/utils';
import Iconify from './Iconify';
import { checkIsActiveRoute } from './DrawerRootMenuListView';

export const DrawerListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem',
})<any>(({ activeRoot, activeSub, subItem, theme, isNested = false }: any) => ({
  ...theme.typography.body2,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ROOT_NAVBAR_ITEM_HEIGHT,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  // activeRoot
  ...(activeRoot && {
    ...theme.typography.subtitle2,
    color: theme.palette.primary.main,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  }),
  // activeSub
  ...(activeSub && {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
  }),
  // subItem
  ...(subItem && {
    height: NAVBAR.DASHBOARD_NAVBAR_SUB_ITEM_HEIGHT,
  }),
  ...(isNested && {
    paddingLeft: '35px',
  }),
}));

export const DrawerListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})<any>(({ isCollapse, theme }: any) => ({
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}));

export const DrawerMenuListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%' },
});

function isExternalRouteLink(path: any) {
  return path.includes('http');
}

DrawerMenuItemRootView.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  isCollapse: PropTypes.bool,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    info: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export function DrawerMenuItemRootView({
  item,
  isCollapse,
  open = false,
  active,
  onOpen,
}: any) {
  const { title, path, icon, info, children } = item;

  const renderContent = (
    <>
      {icon && (
        <DrawerMenuListItemIconStyle>{icon}</DrawerMenuListItemIconStyle>
      )}
      <DrawerListItemTextStyle
        disableTypography
        primary={title}
        isCollapse={isCollapse}
      />
      {!isCollapse && (
        <>
          {info && info}
          {children && <DrawerRootMenuIcon isOpen={open} />}
        </>
      )}
    </>
  );

  if (children) {
    return (
      <DrawerListItemStyle onClick={onOpen} activeRoot={active}>
        {renderContent}
      </DrawerListItemStyle>
    );
  }

  return isExternalRouteLink(path) ? (
    <DrawerListItemStyle
      component={Link}
      href={path}
      target='_blank'
      rel='noopener'
    >
      {renderContent}
    </DrawerListItemStyle>
  ) : (
    <DrawerListItemStyle component={RouterLink} to={path} activeRoot={active}>
      {renderContent}
    </DrawerListItemStyle>
  );
}

DrawerMenuItemSubView.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    children: PropTypes.array,
    info: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export function DrawerMenuItemSubView({ item, active = false }: any) {
  const { title, path, info, children, icon } = item;
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const renderContent = (
    <>
      <DotIcon active={active} />
      <ListItemText disableTypography primary={title} />
      {info && info}
      {children && <DrawerRootMenuIcon isOpen={open} />}
    </>
  );

  if (children) {
    return (
      <>
        <DrawerListItemStyle onClick={() => setOpen(!open)} isNested>
          <DrawerMenuListItemIconStyle>{icon}</DrawerMenuListItemIconStyle>
          <DrawerListItemTextStyle disableTypography primary={title} />
          <DrawerRootMenuIcon isOpen={open} />
        </DrawerListItemStyle>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {children?.map((item: any, index: number) => (
            <List component='div' disablePadding key={index}>
              <DrawerListItemStyle
                component={RouterLink}
                to={item?.path}
                activeSub={checkIsActiveRoute(item.path, pathname)}
                subItem
                isNested
              >
                <DotIcon active={checkIsActiveRoute(item.path, pathname)} />
                <DrawerListItemTextStyle
                  disableTypography
                  primary={item.title}
                />
              </DrawerListItemStyle>
            </List>
          ))}
        </Collapse>
      </>
    );
  }

  return isExternalRouteLink(path) ? (
    <DrawerListItemStyle
      component={Link}
      href={path}
      target='_blank'
      rel='noopener'
      subItem
    >
      {renderContent}
    </DrawerListItemStyle>
  ) : (
    <DrawerListItemStyle
      component={RouterLink}
      to={path}
      activeSub={active}
      subItem
    >
      {renderContent}
    </DrawerListItemStyle>
  );
}

DotIcon.propTypes = {
  active: PropTypes.bool,
};

export function DotIcon({ active }: any) {
  return (
    <DrawerMenuListItemIconStyle>
      <Box
        component='span'
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </DrawerMenuListItemIconStyle>
  );
}

DrawerRootMenuIcon.propTypes = {
  isOpen: PropTypes.bool,
};

export function DrawerRootMenuIcon({ isOpen }: any) {
  return (
    <Iconify
      icon={
        isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'
      }
      sx={{ width: 16, height: 16, ml: 1 }}
    />
  );
}
