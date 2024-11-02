import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults, toggleSearchBox } from '../store/searchSlice';
import "../styles/SearchBox.scss"
const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/search?keyword=${keyword}`);
      const data = await response.json();
      dispatch(setSearchResults(data));
      dispatch(toggleSearchBox());
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search items..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="search-input"      />
        <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBox;
