import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='search-box-container'>
      <div className='search-box'>
        <input
          type='search'
          placeholder='search phonebook'
          onChange={searchChange}
        />
      </div>
    </div>
  );
}

export default SearchBox;
