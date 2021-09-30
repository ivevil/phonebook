import React from 'react';
import './Dividers.css';
import Divider from '../Divider/Divider';

const Dividers = (props, handleClick) => {
  return (
    <div className="dividers">
      {props.dividers.map(function (value, index) {
          return <Divider divider={value} handleClick={handleClick} key={index} onDividerClick={props.onDividerClick}></Divider>;
      })}
    </div>
  );
}

export default Dividers;
