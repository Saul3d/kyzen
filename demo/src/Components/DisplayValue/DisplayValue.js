import React from 'react';

const DisplayValue = (props) => {
  return (
    <div className="showValue">
      <h2 className="title">{props.children}</h2>
      <h1 className="dValue">{props.currentValue}</h1>
    </div>
  )
}

export default DisplayValue;
