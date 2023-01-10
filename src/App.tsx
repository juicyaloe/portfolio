import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './components/layout/sideBar';

import Main from './pages/main';
import Guest from './pages/guest';
import Test from './pages/test';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
