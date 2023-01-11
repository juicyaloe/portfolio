import { useState, useEffect, Fragment } from 'react';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { Fab } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import GuestStructure from '../components/pages-components/guest/guestStructure';
import SearchedGuestBook from '../components/pages-components/guest/searchedGuestBook';

const fabStyle = {
  marginTop: 3,
  marginLeft: 'auto',
  marginBottom: 5,
};

export interface GuestBookType {
  id: number;
  nickname: string;
  content: string;
  is_show: boolean;
  created_at: string;
  updated_at: string;
}

async function getGuestBookAPI() {
  return await fetch(process.env.REACT_APP_API_DOMAIN + '/guestbook/public/');
}

export default function Guest() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 글쓰기 화면에서 넘어온 지 판단
  const successForm = searchParams.get('n') !== null;

  const [guestBook, setGuestBook] = useState<GuestBookType[]>([]);
  const [stateMsg, setStateMsg] = useState<any>('방명록을 불러오는 중입니다..');

  useEffect(() => {
    GetGuestBook();
  }, []);

  const GetGuestBook = async () => {
    const response = await getGuestBookAPI();

    if (response.status !== 200) {
      setStateMsg('오류가 발생했습니다. 잠시 후에 시도해주세요.');
      return;
    }

    const tempData: GuestBookType[] = await response.json();

    if (tempData.length < 1) {
      setStateMsg('기록된 방명록이 없습니다.');
      return;
    }

    setGuestBook([...tempData]);
  };

  return (
    <GuestStructure>
      {successForm && (
        <Fragment>
          <Typography
            sx={{ marginRight: 'auto', marginLeft: '2.5%' }}
            color="darkblue"
            variant="subtitle2"
          >
            글 작성이 완료되었습니다! 검토 후 반영될 예정입니다.
          </Typography>
          <Divider sx={{ width: '95%' }} />
        </Fragment>
      )}
      {!successForm && (
        <Fragment>
          <Typography
            sx={{ marginRight: 'auto', marginLeft: '2.5%' }}
            variant="subtitle2"
          >
            우측 하단 글쓰기 버튼을 눌려 방명록을 작성해주세요.
          </Typography>
          <Divider sx={{ width: '95%' }} />
        </Fragment>
      )}

      {guestBook.length !== 0 && <SearchedGuestBook guestBook={guestBook} />}
      {guestBook.length === 0 && (
        <Typography sx={{ marginTop: 3 }} variant="h6">
          {stateMsg}
        </Typography>
      )}

      <Fab
        sx={fabStyle}
        color="secondary"
        onClick={() => navigate('/guest/form')}
      >
        <EditIcon />
      </Fab>
    </GuestStructure>
  );
}
