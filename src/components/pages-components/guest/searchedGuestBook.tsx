import { Fragment } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import 'moment/locale/ko';

import type { GuestBookType } from '../../../pages/guest';

interface SearchedGuestBookType {
  guestBook: GuestBookType[];
  listRef: React.MutableRefObject<HTMLUListElement | null>;
}

export default function SearchedGuestBook({
  guestBook,
  listRef,
}: SearchedGuestBookType) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} ref={listRef}>
      {guestBook.map((item, i) => (
        <Fragment key={i}>
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
                    moment(item.created_at).format('YY년 MM월 DD일 작성')}
                </Fragment>
              }
            />
          </ListItem>
          {guestBook.length !== i + 1 && (
            <Divider variant="inset" component="li" />
          )}
        </Fragment>
      ))}
    </List>
  );
}
