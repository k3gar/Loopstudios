import React from 'react';
import { Fragment } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import MyHeader from './components/MyHeader.jsx';

function App() {
  return (
    <Fragment>
      <MyHeader />
      <MainContent />
    </Fragment>
  );
}

export default App;
