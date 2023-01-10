import { useState, useEffect, Fragment } from 'react';
import CommonStructure from '../components/layout/structure/commonStructure';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';

import moment from 'moment';
import 'moment/locale/ko';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const fabStyle = {
  marginTop: 3,
  marginLeft: 'auto',
};

const GuestBookWrap = styled.div`
  padding-top: 10px;

  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40;
  align-items: center;
`;
interface GuestBookType {
  id: number;
  nickname: string;
  content: string;
  is_show: boolean;
  created_at: string;
  updated_at: string;
}

async function getGuestBook() {
  return await fetch(process.env.REACT_APP_API_DOMAIN + '/guestbook/');
}

export default function Guest() {
  const navigate = useNavigate();
  const [guestBook, setGuestBook] = useState<GuestBookType[]>([]);

  useEffect(() => {
    getGuestBook()
      .then(async (response) => {
        const apiData: GuestBookType[] = await response.json();
        setGuestBook(apiData.filter((data) => data.is_show));
      })
      .catch((err) => {});
  }, []);

  // fallback
  if (guestBook.length < 1) {
    return (
      <CommonStructure>
        <Typography variant="h6">기록된 방명록</Typography>
        <Typography variant="subtitle1">
          방명록을 불러오는 중입니다..
        </Typography>
      </CommonStructure>
    );
  }

  return (
    <CommonStructure>
      <GuestBookWrap>
        <Typography variant="h6">기록된 방명록</Typography>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {guestBook.map((item, i) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={item.nickname}
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.content}
                      </Typography>
                      {' - ' +
                        moment(item.created_at).format(
                          'YY년 MM월 DD일, HH:mm:ss'
                        )}
                    </Fragment>
                  }
                />
              </ListItem>
              {guestBook.length !== i + 1 && (
                <Divider variant="inset" component="li" />
              )}
            </>
          ))}
        </List>
        <Fab
          sx={fabStyle}
          color="secondary"
          onClick={() => navigate('/guest/form')}
        >
          <EditIcon />
        </Fab>
      </GuestBookWrap>
    </CommonStructure>
  );
}
