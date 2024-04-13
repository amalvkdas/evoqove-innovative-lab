import RatingFilter from './RatingFilter';
import SearchBox from './SearchBox';
import "./FilterSection.css"
import DevelopedByFilter from './DevelopedByFilter';
import ApplicationTypeFilter from './ApplicationTypeFilter';
import DataFetcher from './DataFetcher';

const FilterSection = ({ onFilterChange,searchQuery, setSearchQuery}) => {
  
  
  const requestBody = {
    "page_num": 1,
    "filter_id": null,
    "segment_id": null,
    "price_type": null,
    "rating_by": null,
    "application_type": null,
    "min_price_limit": 0,
    "max_price_limit": 29500000,
    "min_investment_limit": 0,
    "max_investment_limit": 100000000,
    "sort_by": null
  };

  const url = "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter";

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '2rem' }} className='searchBoxInside'>
        <SearchBox setSearchQuery={setSearchQuery}/>
      </div>
      <DataFetcher url={url} requestBody={requestBody}>
        {products => (
          <>
            <DevelopedByFilter products={products} onFilterChange={onFilterChange} />
            <RatingFilter />
            <ApplicationTypeFilter />
          </>
        )}
      </DataFetcher>
    </div>
  );
};

export default FilterSection;
