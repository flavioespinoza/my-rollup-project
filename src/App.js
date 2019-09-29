import React from 'react';
import _d from 'datedash';
import './App.scss';

const _yarnTest = _d.yarnTest();
console.log(_yarnTest);

function App() {
  const today = new Date();
  const dateToday = _d.date(today, 'MMM DD YYYY');
  const yarnTest2 = _d.yarnTest2();
  console.log('yarnTest2', yarnTest2);
  return (
    <section className="App">
      <div className={'App-header'}>
        <h1>Hello Flavio the date is: {dateToday}</h1>
      </div>
    </section>
  );
}

export default App;
