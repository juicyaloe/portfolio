import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import type { RootState } from '../../store/store';
import { close } from '../../store/sideBarSlice';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ImageIcon from '@mui/icons-material/Image';
import QuizIcon from '@mui/icons-material/Quiz';

interface SideBarDataType {
  icon: ReactNode;
  text: string;
}

export default function SideBar() {
  const isActive = useSelector((state: RootState) => state.sideBar.isActive);
  const dispatch = useDispatch();

  const sideBarData: SideBarDataType[] = [
    { icon: <ImageIcon />, text: '사진' },
    { icon: <QuizIcon />, text: '테스트' },
  ];

  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    dispatch(close());
  };

  return (
    <Drawer anchor="left" open={isActive} onClose={closeDrawer}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <List>
          {sideBarData.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => {}}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
