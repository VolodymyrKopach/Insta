import './App.scss';

import React, { FC } from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App: FC = () => (
    <div className='app-container'>
      <Header/>
      <Content/>
    </div>
);

export default App;
