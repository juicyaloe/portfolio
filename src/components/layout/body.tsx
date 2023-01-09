import styled from '@emotion/styled';
import { ReactNode } from 'react';

const BodyWrap = styled.div`
  padding-top: 52px;
`;

interface BodyType {
  children: ReactNode;
}

export default function Body({ children }: BodyType) {
  return <BodyWrap>{children}</BodyWrap>;
}
