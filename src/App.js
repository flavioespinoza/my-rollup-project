import React from 'react';
import _d from 'datedash';
import { Exemplar } from 'authnet-app';
import './App.scss';

const _yarnTest = _d.yarnTest();
console.log(_yarnTest);

function App() {
  const dateToday = _d.date();
  const yarnTest2 = _d.yarnTest2();
  console.log('yarnTest2', yarnTest2);
  return (
    <section className="App">
      <div className={'App-header'}>
        <h1>Hello Flavio the date is: {dateToday}</h1>
				<Exemplar._BallsHook title={'Exemplar._BallsHook'} />
				<Exemplar._ExportHook title={'Exemplar._ExportHook'} />
      </div>
    </section>
  );
}

export default App;
