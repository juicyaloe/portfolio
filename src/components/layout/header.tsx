import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from 'react-redux';
import { open } from '../../store/sideBarSlice';
import { useNavigate } from 'react-router-dom';

const HeaderWrap = styled.div`
  width: 95%;
  height: 50px;
  position: fixed;

  background-color: white;
  border-bottom: 1px solid #eff5f5;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 769px) {
    width: 70%;
  }
`;

const CustomButton = styled(Button)`
  color: #404258;

  padding: 5px 25px;
  border-radius: 10px;

  display: flex;
  gap: 3px;
`;

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <CustomButton onClick={() => dispatch(open())}>
        <FormatListBulletedIcon /> MENU
      </CustomButton>
      <CustomButton onClick={() => navigate('/')}>
        <HomeIcon /> 메인 화면으로
      </CustomButton>
    </HeaderWrap>
  );
}
