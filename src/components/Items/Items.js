import React from 'react';
import Item from '../Item/Item';
import './Items.css';

function Items(props) {
    return (
        <div>
            {props.items.map(function (value, index) {
                return <Item key={index} item={value} onDeleteItem={props.onDeleteItem} ></Item>;
            })}
        </div>
    );
}

export default Items;
