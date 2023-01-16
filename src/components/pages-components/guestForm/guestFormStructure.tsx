import { ReactNode } from 'react';
import CommonStructure from '../../structure/commonStructure';
import Box from '@mui/material/Box';

interface GuestFormStructureType {
  children: ReactNode;
}

export default function GuestFormStructure({
  children,
}: GuestFormStructureType) {
  return (
    <CommonStructure title="글 쓰기">
      <Box
        component="form"
        sx={{
          marginTop: 2,

          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',

          '& .MuiTextField-root': { width: '95%' },
        }}
        autoComplete="off"
      >
        {children}
      </Box>
    </CommonStructure>
  );
}
