import React from 'react';
import { Fragment } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import MyHeader from './components/MyHeader.jsx';
import OurCreation from './components/OurCreation';

function App() {
  return (
    <Fragment>
      <MyHeader />
      <main>
        <MainContent />
        <OurCreation />
      </main>
    </Fragment>
  );
}

export default App;
