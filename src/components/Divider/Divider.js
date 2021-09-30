import React from 'react';

const Divider = (props) => {
  return (
      <div className="divider" onClick={(e) => {
          e.stopPropagation();
          props.onDividerClick(props, e);
      }}>{props.divider}</div>
  );
}

export default Divider;
