import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, Collapse } from '@mui/material';
import {
  DrawerMenuItemRootView,
  DrawerMenuItemSubView,
} from './DrawerMenuItemView';
import { matchPath } from 'react-router-dom';

export function checkIsActiveRoute(path: any, pathname: any) {
  return path ? !!matchPath({ path, end: true }, pathname) : false;
}

DrawerMenuListRootView.propTypes = {
  isCollapse: PropTypes.bool,
  list: PropTypes.object,
};

export function DrawerMenuListRootView({ list, isCollapse }: any) {
  const { pathname } = useLocation();
  const active = checkIsActiveRoute(list.path, pathname);
  const [open, setOpen] = useState(active);
  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <DrawerMenuItemRootView
          item={list}
          isCollapse={isCollapse}
          active={active}
          open={open}
          onOpen={() => setOpen(!open)}
        />

        {!isCollapse && (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {(list.children || []).map((item: any, index: any) => {
                return <DrawerMenuListSubView key={index} list={item} />;
              })}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <DrawerMenuItemRootView
      item={list}
      active={active}
      isCollapse={isCollapse}
    />
  );
}

DrawerMenuListSubView.propTypes = {
  list: PropTypes.object,
};

function DrawerMenuListSubView({ list }: any) {
  const { pathname } = useLocation();
  const active = checkIsActiveRoute(list.path, pathname);
  const [open, setOpen] = useState(active);
  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <DrawerMenuItemSubView
          item={list}
          onOpen={() => setOpen(!open)}
          open={open}
          active={active}
        />

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding sx={{ pl: 3 }}>
            {(list.children || []).map((item: any, index: any) => (
              <DrawerMenuItemSubView
                key={index}
                item={item}
                active={checkIsActiveRoute(item.path, pathname)}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <DrawerMenuItemSubView item={list} active={active} />;
}
