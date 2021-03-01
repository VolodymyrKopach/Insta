import './App.scss';

import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import store from './redux/store';

const App: FC = () => (
  <Provider store={store}>
    <div className='app-container'>
      <Header/>
      <Content/>
    </div>
  </Provider>

);

export default App;
