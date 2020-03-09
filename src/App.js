import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1 className= 'App-title'>Counter Example</h1>
        < Counter fontSize={'25px'} color={'red'}/>
        < Counter fontSize={'20px'} color={'blue'}/>
    </div>
  );
}

export default App;
