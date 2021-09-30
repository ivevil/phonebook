
import React from 'react';
import './Item.css';


function Item(props) {
    return (
      <div className="addnew-item">
            <div className="phonebook-item-content">
              <span className="lastname">{props.item.lastname} </span>
              <span className="firstname">{props.item.firstname} </span>
            </div>
            <div className="phonebook-item-content">
              <span className="number">{props.item.number}</span>
            </div>
          <span className="delete-btn" title="delete" onClick={(e) => {
              e.stopPropagation();
              props.onDeleteItem(props.item);
          }}></span>
      </div>
    );
}

export default Item;
