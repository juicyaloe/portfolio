import { ReactNode } from 'react';
import CommonStructure from '../../layout/structure/commonStructure';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const GuestBookWrap = styled.div`
  padding-top: 10px;

  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40;
  align-items: center;
`;

interface GuestStructureType {
  children: ReactNode;
}

export default function GuestStructure({ children }: GuestStructureType) {
  return (
    <CommonStructure title="방명록">
      <GuestBookWrap>{children}</GuestBookWrap>
    </CommonStructure>
  );
}
