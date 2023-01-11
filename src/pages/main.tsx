import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { open } from '../store/sideBarSlice';
import CommonStructure from '../components/layout/structure/commonStructure';

export default function Main() {
  return (
    <CommonStructure title="홈">
      제 페이지에 오신 것을 환영합니다. <br />
      다양한 기능이 추가될 예정입니다! Coming Soon! <br />
      <br />
      현재 만들어진 기능(2023.01.10. 기준):
      <br />- 방명록 기능 (상단 MENU 클릭 {'>'} 방명록 클릭)
    </CommonStructure>
  );
}
