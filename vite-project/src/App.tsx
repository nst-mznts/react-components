import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cards from './pages/Cards';
import CardDetail from './pages/CardDetail';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Cards />}>
          <Route path="/posts/details" element={<CardDetail />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
export default App;
