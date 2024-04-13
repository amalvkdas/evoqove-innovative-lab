import OfferOverlay from './OfferOverlay';
import StarLine from './StarLine';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="card h-100" style={{ maxWidth: '350px', maxHeight: '400px', minWidth: '350px',minHeight:"400px", width: '100%' }}>
                <OfferOverlay product={product} />
                <img src={product.logo} className="card-img-top" alt={product.product_name} style={{ height: '150px', objectFit: 'contain', padding: '10px' }} />
                <div className="star-line-overlay d-flex" style={{ position: 'absolute', top: '130px', left: '10px', zIndex: 1 }}>
                    <StarLine activeStars={product.rating} />
                    <p style={{ marginLeft: '5px' }}>({product.rating} reviews)</p>
                </div>
                <div className="card-body d-flex flex-column">
                    <div className="flex-grow-1">
                        <h5 className="card-title" style={{ fontSize: '1.2rem' }}>{product.product_name}</h5>
                    </div>
                    <div className="mt-auto">
                        <p className="card-text" style={{ fontSize: '0.7rem', maxHeight: '60px'}}>{product.description}</p>
                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Price: ₹{product.price} per month</p>
                        <p className="card-text" style={{ fontSize: '0.8rem' }}>Offer Price: <span style={{ color: 'green' }}>₹{product.offer_price}</span> for customers</p>
                        <button className="btn btn-primary" type="submit" style={{ fontSize: '0.8rem', margin: "0 10px 0 0" }}>View More Details</button>
                        <button type="button" className="btn btn-outline-primary" style={{ fontSize: '0.8rem' }}>Open an Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
