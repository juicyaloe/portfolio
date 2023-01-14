import { useState, useEffect, Fragment, useRef } from 'react';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { Fab } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import GuestStructure from '../components/pages-components/guest/guestStructure';
import SearchedGuestBook from '../components/pages-components/guest/searchedGuestBook';
import { useQuery } from '@tanstack/react-query';
import { fabStyle, fabFixedStyle } from '../components/style/bottomFab';

export interface GuestBookType {
  id: number;
  nickname: string;
  content: string;
  is_show: boolean;
  created_at: string;
  updated_at: string;
}

const fetchGuestBook = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_DOMAIN + '/guestbook/public/'
  );
  return response.json();
};

export default function Guest() {
  const navigate = useNavigate();

  // 글쓰기 화면에서 넘어온 지 판단
  const [searchParams] = useSearchParams();
  const successForm = searchParams.get('n') !== null;

  // 방명록 데이터 불러오기
  const {
    isLoading,
    data: guestBook,
    isError,
  } = useQuery<GuestBookType[]>(['guest-book'], fetchGuestBook);

  // 글이 많으면, 글쓰기 버튼 fixed로 변경
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement | null>(null);

  // 글쓰기 버튼이 화면 밑에 있는지 검사
  useEffect(() => {
    if (listRef.current) {
      const screenwidth = window.innerHeight;
      const listHeight = listRef.current?.clientHeight ?? 0;

      if (screenwidth - listHeight < 250) setScrollFlag(true);
      else setScrollFlag(false);
    }
  }, [guestBook]);

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

      <SearchedGuestBook guestBook={guestBook ?? []} listRef={listRef} />
      {isLoading && (
        <Typography sx={{ marginTop: 3 }} variant="h6">
          방명록을 불러오는 중입니다..
        </Typography>
      )}
      {!isLoading && guestBook?.length === 0 && (
        <Typography sx={{ marginTop: 3 }} variant="h6">
          기록된 방명록이 없습니다.
        </Typography>
      )}
      {isError && (
        <Typography sx={{ marginTop: 3, textAlign: 'center' }} variant="body1">
          일시적인 오류로 방명록을 불러오지 못했습니다. <br />
          잠시 후 시도해주세요.
        </Typography>
      )}

      <div style={{ height: '60px' }}></div>

      <Fab
        sx={scrollFlag ? fabFixedStyle : fabStyle}
        color="secondary"
        onClick={() => navigate('/guest/form')}
      >
        <EditIcon />
      </Fab>
    </GuestStructure>
  );
}
