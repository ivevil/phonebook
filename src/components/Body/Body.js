import React from 'react';
import './Body.css';
import Items from '../Items/Items';

const Body = (props) => {
  return (
    <div id="app-body">
        <div id="all-items" className="items-container">
            <div id="all-items-container">
                <span className="no-items-message">No Items</span>
                <div className="phonebook-item-top">
                    <span className="phonebook-top name">NAME</span>
                    <span className="phonebook-top number">NUMBER</span>
                    <span className="phonebook-top number"> </span>
                </div>
                <Items items={props.items} onDeleteItem={props.onDeleteItem}></Items>
            </div>
        </div>
    </div>
  );
}

export default Body;
