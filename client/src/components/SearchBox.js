import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults, toggleSearchBox } from '../store/searchSlice';

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
    <div style={{ position: 'relative', top: '30px', left: '40px', background: '#fff', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '4px' }}>
      <input
        type="text"
        placeholder="Search items..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
