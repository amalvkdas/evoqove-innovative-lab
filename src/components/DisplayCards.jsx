import { useState } from 'react';
import ProductCard from './ProductCard';
import PaginationComponent from './PaginationComponent';
import SortBy from './SortBy';
import DataFetcher from './DataFetcher';

const DisplayCards = ({ searchQuery, selectedProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [sortOption, setSortOption] = useState("");

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = currentPage * postsPerPage;

  const handleSort = (option) => {
    setSortOption(option);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const url = "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter";
  const requestBody = {
    "page_num": 1,
    "text": "test"
  };

  return (
    <div>
      <DataFetcher url={url} requestBody={requestBody}>
        {products => {
          let filteredProducts = [...products];
          if (selectedProducts.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
              selectedProducts.includes(product.id)
            );
          }

          let sortedProducts = [...filteredProducts];
          switch (sortOption) {
            case "name":
              sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
              break;
            case "newly_added":
              sortedProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
              break;
            case "top_rated":
              sortedProducts.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
              break;
            case "top_performing":
              sortedProducts.sort((a, b) => parseInt(b.review_count) - parseInt(a.review_count));
              break;
            case "price_low_to_high":
              sortedProducts.sort((a, b) => a.price - b.price);
              break;
            case "price_high_to_low":
              sortedProducts.sort((a, b) => b.price - a.price);
              break;
            default:
              break;
          }

          if (searchQuery) {
            sortedProducts = sortedProducts.filter(product => 
              product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }

          return (
            <>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <SortBy handleSort={handleSort} />
              </div>
              <div className="row">
                {sortedProducts.length === 1 ? (
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-flex-start mb-4">
                        <ProductCard key={sortedProducts[0].id} product={sortedProducts[0]} />
                    </div>
                ) : (
                    sortedProducts.slice(startIndex, endIndex).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
              </div>
              {sortedProducts.length > postsPerPage && (
                <div className="row">
                  {sortedProducts.slice(endIndex, endIndex + postsPerPage).map(product => (
                      <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
              <PaginationComponent
                totalPosts={sortedProducts.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                paginate={paginate}
              />
            </>
          );
        }}
      </DataFetcher>
    </div>
  );
};

export default DisplayCards;
