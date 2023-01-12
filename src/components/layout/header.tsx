import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from 'react-redux';
import { open } from '../../store/sideBarSlice';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const HeaderWrap = styled.div`
  width: 95%;
  height: 50px;
  position: fixed;

  background-color: white;
  border-bottom: 1px solid #eff5f5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 100;

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

interface HeaderType {
  title: string;
}

export default function Header({ title }: HeaderType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <CustomButton onClick={() => dispatch(open())}>
        <FormatListBulletedIcon /> MENU
      </CustomButton>

      <Typography>{title}</Typography>
      <CustomButton onClick={() => navigate('/')}>
        <HomeIcon /> HOME
      </CustomButton>
    </HeaderWrap>
  );
}
