import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HwangLogin from './pages/hjy/Login/HwangLogin';
import HwangMain from './pages/hjy/Main/HwangMain';
import KilLogin from './pages/kdy/Login/KilLogin';
import KilMain from './pages/kdy/Main/KilMain';
import KimLogin from './pages/ksh/Login/KimLogin';
import KimMain from './pages/ksh/Main/KimMain';
import YangLogin from './pages/yjy/Login/YangLogin';
import YangMain from './pages/yjy/Main/YangMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hwanglogin" element={<HwangLogin />} />
        <Route path="/hwangmain" element={<HwangMain />} />
        <Route path="/yanglogin" element={<YangLogin />} />
        <Route path="/yangmain" element={<YangMain />} />
        <Route path="/killogin" element={<KilLogin />} />
        <Route path="/kilmain" element={<KilMain />} />
        <Route path="/kimlogin" element={<KimLogin />} />
        <Route path="/kimmain" element={<KimMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
