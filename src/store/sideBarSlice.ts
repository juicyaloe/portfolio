import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Action이 있으면 PayloadAction<any> 타입 주기

interface SideBarState {
  isActive: boolean;
}

const initialState = { isActive: false } as SideBarState;

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    open(state) {
      state.isActive = true;
    },
    close(state) {
      state.isActive = false;
    },
  },
});

export const { open, close } = sideBarSlice.actions;
export default sideBarSlice.reducer;
