import styled from '@emotion/styled';
import { ReactNode } from 'react';

const ContainerWrap = styled.div`
  width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    width: 70%;
  }
`;

interface ContainerType {
  children: ReactNode;
}

export default function Container({ children }: ContainerType) {
  return <ContainerWrap>{children}</ContainerWrap>;
}
