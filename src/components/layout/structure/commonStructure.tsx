import { ReactNode } from 'react';
import Container from '../container';
import Header from '../header';
import Body from '../body';

interface CommonType {
  children: ReactNode;
}

export default function CommonStructure({ children }: CommonType) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
}
