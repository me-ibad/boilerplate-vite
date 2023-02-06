import React from 'react';
import history from '../history';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from '@/routes/Main.js';
import Auth from '@/routes/Auth';
import LandingPage from '@/pages/customer/Landingpage';

function Root() {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='auth/*' element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Root;
