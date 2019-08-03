import React from 'react';
import './css/main.css';

import Sections from './components/Sections'

import data from './data/data';

function App() {
  return (
    <div id="accordion">
      <main className="main">
        <h2 className="title">React</h2>
        <Sections data={data} />
      </main>
    </div>
  );
}

export default App;
