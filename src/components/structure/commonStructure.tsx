import { ReactNode } from 'react';
import Container from '../layout/container';
import Header from '../layout/header';
import Body from '../layout/body';

interface CommonType {
  children: ReactNode;
  title: string;
}

export default function CommonStructure({ children, title }: CommonType) {
  return (
    <Container>
      <Header title={title} />
      <Body>{children}</Body>
    </Container>
  );
}
