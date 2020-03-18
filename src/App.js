import React from 'react';
import './App.css';

import AnimalList from './components/animal-list/animal-list.component';
import AnimalDetail from './components/animal-detail/animal-detail.component';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Welcome to Nobert's Zookeeper</h2>
        <AnimalList />
      </div>
      <div>
        <h2>More Details?</h2>
        <AnimalDetail />
      </div>
    </div>
  );
}

export default App;
