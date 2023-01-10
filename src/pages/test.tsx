import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Body from '../components/layout/body';
import Container from '../components/layout/container';
import Header from '../components/layout/header';
import CommonStructure from '../components/layout/structure/commonStructure';

export default function Test() {
  const navigate = useNavigate();

  return (
    <CommonStructure>
      이 페이지는 테스트 중입니다! <br />
      <br />
      <Button onClick={() => navigate('/')} variant="outlined">
        메인으로 돌아가기
      </Button>
    </CommonStructure>
  );
}
