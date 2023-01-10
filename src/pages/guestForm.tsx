import { useState } from 'react';

import CommonStructure from '../components/layout/structure/commonStructure';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const buttonStyle = {
  marginTop: 3,
  marginLeft: 'auto',
  marginRight: '2.5%',
};

async function postGuestForm(nickname: string, content: string) {
  return await fetch(process.env.REACT_APP_API_DOMAIN + '/guestbook/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nickname,
      content,
    }),
  });
}

export default function GuestForm() {
  const navigate = useNavigate();

  const [currentNickname, setNickname] = useState<string>('익명');
  const [currentContent, setContent] = useState<string>('');

  const [isNicknameError, setNicknameError] = useState<boolean>(false);
  const [isContentError, setContentError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const checkValidation = async () => {
    if (currentNickname.length < 1) {
      setNicknameError(true);
      setErrorMsg('닉네임을 입력해주세요.');
      return;
    }

    if (currentContent.length < 1) {
      setContentError(true);
      setErrorMsg('글을 입력해주세요.');
      return;
    }

    const response = await postGuestForm(currentNickname, currentContent);

    if (response.status !== 201) {
      setContentError(true);
      setErrorMsg(
        '요청이 정상적으로 이루어지지 않았습니다. 잠시 후에 시도해주세요.'
      );
      return;
    }

    navigate('/guest', { replace: true });
  };

  return (
    <CommonStructure>
      <Box
        component="form"
        sx={{
          marginTop: 2,

          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',

          '& .MuiTextField-root': { width: '95%' },
        }}
        autoComplete="off"
      >
        <TextField
          error={isNicknameError}
          helperText={isNicknameError ? errorMsg : ''}
          id="nickname-form"
          label="닉네임(수정 가능)"
          variant="standard"
          defaultValue="익명"
          onChange={(e: any) => {
            setNicknameError(false);
            setNickname(e.target.value);
          }}
        />
        <TextField
          error={isContentError}
          helperText={isContentError ? errorMsg : ''}
          id="content-form"
          label="글"
          multiline
          variant="standard"
          minRows={10}
          onChange={(e: any) => {
            setContentError(false);
            setContent(e.target.value);
          }}
        />
        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={checkValidation}
          endIcon={<SendIcon />}
        >
          전송
        </Button>
      </Box>
    </CommonStructure>
  );
}
