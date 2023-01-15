import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CommonStructure from '../components/structure/commonStructure';

export default function Test() {
  const navigate = useNavigate();

  return (
    <CommonStructure title="테스트">
      이 페이지는 테스트 중입니다! <br />
      <br />
      <Button onClick={() => navigate('/')} variant="outlined">
        메인으로 돌아가기
      </Button>
    </CommonStructure>
  );
}
