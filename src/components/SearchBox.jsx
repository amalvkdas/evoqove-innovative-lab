import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBox = ({ setSearchQuery}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQuery(value);
  };

  return (
    <div style={{ position: 'relative' }} className='searchBox'>
      <BsSearch style={{ color: '#666', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }} />
      <input
        type="text"
        placeholder="Search for products"
        value={inputValue}
        onChange={handleChange}
        style={{ width: '100%', borderRadius: '5px', padding: '8px 30px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SearchBox;
