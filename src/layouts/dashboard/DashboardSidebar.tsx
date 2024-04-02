import PropTypes from 'prop-types';
import { useEffect, forwardRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { m } from 'framer-motion';
import { NAVBAR } from '../../config';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, Stack, IconButton } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import DrawerMenuListView from '../../components/DrawerMenuListView';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
import cssStyles from '../../utils/cssStyles';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { isValidArray } from '../../utils/valid';

// ICONS
import GroupIcon from '@mui/icons-material/Group';
import { RiWechatLine } from "react-icons/ri";
import { LuGroup } from "react-icons/lu";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { LuLayoutPanelLeft } from "react-icons/lu";
import { TiContacts } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

const IconButtonAnimate = forwardRef(
  ({ children, size = 'medium', ...other }: any, ref) => (
    <AnimateWrap size={size}>
      <IconButton
        size={size}
        ref={ref}
        {...other}
      >
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

IconButtonAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'inherit',
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

function AnimateWrap({ size, children }: { size: any; children: any }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  );
}

function CollapseButton({
  onToggleCollapse,
  collapseClick,
}: {
  onToggleCollapse?: any;
  collapseClick?: any;
}) {
  return (
    <IconButtonAnimate onClick={onToggleCollapse}>
      <Box
        sx={{
          lineHeight: 0,
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(collapseClick && {
            transform: 'rotate(180deg)',
          }),
        }}
      >
        <KeyboardDoubleArrowLeftIcon />
      </Box>
    </IconButtonAnimate>
  );
}

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}) {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg', 'as', 'as');

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  }: any = useCollapseDrawer();
  const [sidebarItemState, setSidebarItemState] = useState<any>();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname, isDesktop]);

  useEffect(() => {
    (async () => {
      const parentItems = [];
      const noParentItems = [];
      const allItems: any = await handleRenderSidebarConfig();
      for await (const item of allItems) {
        if (item?.items && isValidArray(item?.items)) {
          for await (const element of item.items) {
            if (element && !element?.path && isValidArray(element?.children)) {
              if (
                element.title === 'Account' &&
                isValidArray(element?.children)
              ) {
                for await (const account of element.children) {
                  if (
                    account.title === 'Reports' &&
                    isValidArray(account?.children)
                  ) {
                    parentItems.push(item);
                  }
                }
              } else {
                parentItems.push(item);
              }
            }
            if (element && element.path) {
              noParentItems.push(element);
            }
          }
        }
      }
      const noParentCombinedItems = [{ items: [...noParentItems] }];
      setSidebarItemState(noParentCombinedItems?.concat(parentItems));
    })();
  }, []);

  const handleRenderSidebarConfig = () => {
      return [
        {
          items: [
            {
              title: 'Team',
              path: '/',
              icon: <GroupIcon fontSize='small' />,
            },
            {
              title: 'Chat',
              path: '/chat',
              icon: <RiWechatLine fontSize='small' />,
            },
            {
              title: 'Meet',
              path: '/meet',
              icon: <LuGroup fontSize='small' />,
            },
            {
              title: 'Call',
              path: '/call',
              icon: <ScheduleIcon fontSize='small' />,
            },
            {
              title: 'Panel',
              path: '/panel',
              icon: <LuLayoutPanelLeft fontSize='small' />,
            },
            {
              title: 'Contact',
              path: '/contact',
              icon: <TiContacts fontSize='small' />,
            },
            {
              title: 'Voicemail',
              path: '/voicemail',
              icon: <CiMail fontSize='small' />,
            },
            {
              title: 'Settings',
              path: '/settings',
              icon: <CiSettings fontSize='small' />,
            },
          ],
        },
      ];
    return [];
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center' }),
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Logo isCollapse={isCollapse} />

          {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )}
        </Stack>
      </Stack>

      <DrawerMenuListView
        menuConfig={sidebarItemState}
        isCollapse={isCollapse}
      />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems='center'
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        ></Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant='persistent'
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'dashed',
              bgcolor: 'background.default',
              transition: (theme: any) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur({}),
                boxShadow: (theme: any) => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
