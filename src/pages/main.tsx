import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Body from '../components/layout/body';
import Container from '../components/layout/container';
import Header from '../components/layout/header';
import { open } from '../store/sideBarSlice';

export default function Main() {
  const [data, setdata] = useState<any>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.juicyaloe.com/api/')
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        제 페이지에 오신 것을 환영합니다! <br />
        다양한 기능이 추가될 예정입니다! Coming Soon! <br />
        기대해 주세요!{' '}
        {data.map((e: any) => (
          <div>{e.title}</div>
        ))}
      </Body>
    </Container>
  );
}
