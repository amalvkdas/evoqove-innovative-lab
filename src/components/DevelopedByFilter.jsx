import { useState } from 'react';

const DevelopedByFilter = ({ products, onFilterChange }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    let updatedProducts = [...selectedProducts];
    if (updatedProducts.includes(productId)) {
      updatedProducts = updatedProducts.filter(id => id !== productId);
    } else {
      updatedProducts.push(productId);
    }
    setSelectedProducts(updatedProducts);
    onFilterChange(updatedProducts);
  };

  return (
    <div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }} className='hanken-grotesk-500'>Developed by</h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '.9rem' }}>
        {products.map(product => (
          <li key={product.id} className='poppins-300' style={{lineHeight:"2.5"}}>
            <input 
              type="checkbox" 
              style={{ borderRadius: '50%', marginRight: '5px' }} 
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            {product.product_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopedByFilter;
