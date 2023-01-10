import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { open } from '../store/sideBarSlice';
import CommonStructure from '../components/layout/structure/commonStructure';

export default function Main() {
  return (
    <CommonStructure>
      제 페이지에 오신 것을 환영합니다! <br />
      다양한 기능이 추가될 예정입니다! Coming Soon! <br />
      기대해 주세요!
    </CommonStructure>
  );
}
