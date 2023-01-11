import { ReactNode } from 'react';
import Container from '../container';
import Header from '../header';
import Body from '../body';

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
