import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults, setKeyword  } from '../store/searchSlice';
import "../styles/SearchBox.scss"
const SearchBox = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.keyword);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/search?keyword=${keyword}`);
      const data = await response.json();
      dispatch(setSearchResults(data));
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
        onChange={(e) => dispatch(setKeyword(e.target.value))}
        className="search-input"      />
        <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBox;
