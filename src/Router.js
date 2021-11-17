import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hwanglogin' />
        <Route path='hwangmain' />
        <Route path='/yanglogin' />
        <Route path='/yangmain' />
        <Route path='/killogin' />
        <Route path='/kilmain' />
        <Route path='/kimlogin' />
        <Route path='/kimmain' />
      </Routes>
    </BrowserRouter>
  )
}