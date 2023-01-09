import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Main from './pages/main';
import SideBar from './components/layout/sideBar';
import Test from './pages/test';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
