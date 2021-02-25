import React from 'react';

const RangeWidget = (props) => {
   return (
    <div className="range">
      <div className="upper">
        {props.upperLimit}
      </div>
      <div className="lower">
        {props.lowerLimit}
      </div>
    </div>
  )
}

export default RangeWidget;