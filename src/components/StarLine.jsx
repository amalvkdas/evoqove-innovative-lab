
const StarLine = ({ activeStars }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < activeStars) {
      stars.push(<span key={i} style={{ color: '#f39c12' }}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <>{stars}</>;
};

export default StarLine;
