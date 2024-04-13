import StarLine from './StarLine';

const RatingFilter = () => {
  const generateStars = (rating) => {
    return <StarLine activeStars={rating} />;
  };

  return (
    <div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }} className='hanken-grotesk-500'>Rating by</h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '0.9rem' }}>
        {[4, 3, 2, 1].map((rating) => (
          <li key={rating} className='hanken-grotesk-300' style={{lineHeight:"2.5"}}>
            <input type="checkbox" style={{ borderRadius: '50%', marginRight: '5px' }} />
            {generateStars(rating)}
            &nbsp; & &nbsp;  above
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default RatingFilter;
