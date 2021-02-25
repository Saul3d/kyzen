import React, { useState } from 'react';

import DisplayValue from './Components/DisplayValue/DisplayValue';
import RangeWidget from './Components/RangeWidget/RangeWidget';

import Keyboard from 'react-simple-keyboard';

import 'simple-keyboard/build/css/index.css';
import './App.scss';

const App = props => {
  const [ dataState, setDataState ] = useState({
    data: [
      {
        Conc: 15,
        Temp: 38,
        TempLimit: {
          Upper: 75,
          Lower: 35
        },
        ConcLimit: {
          Upper: 20,
          Lower: 10
        }
      }
    ]
  });

  const changeTempValue = (newTemp) => {
    setDataState({
      data: [
        {
          Conc: 15,
          Temp: newTemp,
          TempLimit: {
            Upper: 75,
            Lower: 35
          },
          ConcLimit: {
            Upper: 20,
            Lower: 10
          }
        }
      ]
    })
  }
  const convertToCelciusHandler = () => {
    let convertedTemp = ((dataState.data[0].Temp - 32) /1.8).toFixed(2);
    changeTempValue(convertedTemp);
  }

  const convertToFehrenhietHandler = () => {
    let convertedTemp = ((dataState.data[0].Temp * 1.8) + 32).toFixed(0);
    changeTempValue(convertedTemp);
  }

  const onChange = (input) => {
    console.log("Input changed", input);
  }

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  }
  return (
    <div className="App">
      <main>
        <section>
          <div className="display">
            <DisplayValue currentValue={dataState.data[ 0 ].Conc}>Concentration</DisplayValue>
          </div>
          <div className="widget">
            <RangeWidget upperLimit={dataState.data[ 0 ].ConcLimit.Upper} lowerLimit={dataState.data[ 0 ].ConcLimit.Lower} />
            <button
              onClick={() => { console.log('hello world') }}
            >Range</button>
          </div>
        </section>
        <section>
          <div className="display">
            <DisplayValue currentValue={dataState.data[ 0 ].Temp}>Temperature</DisplayValue>
            <button
              onClick={convertToCelciusHandler}
            >Celcius</button>
            <button
              onClick={convertToFehrenhietHandler}
            >Fahrenhiet</button>
          </div>
          <div className="widget">
            <RangeWidget upperLimit={dataState.data[ 0 ].TempLimit.Upper} lowerLimit={dataState.data[ 0 ].TempLimit.Lower} />
            <button
              onClick={() => { console.log('hello world') }}
            >Range</button>
          </div>

        </section>

      </main>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
