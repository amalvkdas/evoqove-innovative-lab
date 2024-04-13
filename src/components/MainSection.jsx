import React, { useState } from 'react';
import DisplayCards from './DisplayCards';
import FilterSection from './FilterSection';
import './MainSection.css';
import { BsFilter } from 'react-icons/bs';
import SearchBox from './SearchBox';

const MainSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (selectedProducts) => {
    setSelectedProducts(selectedProducts);
  };

  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <div className="showSearch m-auto" style={{ width: "80%" }}>
          <SearchBox setSearchQuery={setSearchQuery} />
        </div>
        <div className="filter-icon" onClick={toggleFilter}>
          <BsFilter size={30} />
        </div>
      </div>

      <div className="main-section-container">
        <div className={`filterSection ${isFilterOpen ? 'open' : ''}`}>
          {/* Pass onFilterChange to FilterSection */}
          <FilterSection onFilterChange={handleFilterChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
        <div className="vertical-line"></div>

        <div className="displayCards">
          <DisplayCards searchQuery={searchQuery} selectedProducts={selectedProducts} />
        </div>
      </div>
    </>
  );
};

export default MainSection;
