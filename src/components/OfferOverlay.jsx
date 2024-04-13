import "./OfferOverlay.css"

const OfferOverlay = ({ product }) => {
  return (
    <div className="card-overlay">
      <p className="card-text">
        {product.free ? 'Free' : (product.offer ? 'On offer' : '')}
      </p>
    </div>
  );
};

export default OfferOverlay;

