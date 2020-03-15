import React from 'react';
import './App.css';

import AnimalList from './pages/animal-list/animal-list.component';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Welcome to Nobert's Zookeeper</h2>
        <AnimalList />
      </div>
      <div>
        <h2>More Details?</h2>
      </div>
    </div>
  );
}

export default App;
