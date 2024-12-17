import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/MainPage/MainPage';
import Details from './pages/Details';
import Lists from './pages/Lists';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </Provider>
  );
};

export default App;
