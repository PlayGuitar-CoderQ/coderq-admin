import React from 'react';

import './App.css';

const App = () => {
  const test = () => {
    return new Promise((resolve, resject) => {
      resolve(123);
      resject(new Error());
    });
  };

  test().then((res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <span>12312</span>
    </div>
  );
};

export default App;
