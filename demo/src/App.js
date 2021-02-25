import React, { useState } from 'react';

import DisplayValue from './Components/DisplayValue/DisplayValue';
import RangeWidget from './Components/RangeWidget/RangeWidget';

import './App.scss';

const App = (props) => {
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

  const convertToCelciusHandler = () => {
    // setDataState({
    //   data: [
    //     {
    //       Conc: 15,
    //       Temp: 3.33,
    //       TempLimit: {
    //         Upper: 75,
    //         Lower: 35
    //       },
    //       ConcLimit: {
    //         Upper: 20,
    //         Lower: 10
    //       }
    //     }
    //   ]
    // });
  //   console.log('Celcius');
  }

  const convertToFehrenhietHandler = () => {
    console.log('Fahrenhiet')
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
              onClick={convertToCelciusHandler()}
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
    </div>
  );
}

export default App;
