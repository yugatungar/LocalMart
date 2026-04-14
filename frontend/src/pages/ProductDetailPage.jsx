import { useParams, useNavigate } from 'react-router-dom';
import { products, shops, getFreshnessDaysLeft } from '../data/dummyData';

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p._id === id);
  const shop = shops.find(s => s.id === product?.shopId);

  if (!product) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '3rem' }}>🔍</span>
        <p>Product not found</p>
        <button onClick={() => navigate('/')} className="btn-primary">Go Back Home</button>
      </div>
    );
  }

  const freshnessDaysLeft = getFreshnessDaysLeft(product.expiryDate);
  
  let expiryClass = '';
  let expiryEmoji = '';
  if (freshnessDaysLeft <= 1) {
    expiryClass = 'expiry-urgent';
    expiryEmoji = '⚠️';
  } else if (freshnessDaysLeft <= 3) {
    expiryClass = 'expiry-warning';
    expiryEmoji = '⏰';
  } else {
    expiryClass = 'expiry-fresh';
    expiryEmoji = '✅';
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate('/cart');
  };

  return (
    <div className="container" style={{ padding: '1rem', maxWidth: '1024px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ color: '#7bb3d4', marginBottom: '1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
        ← Back
      </button>
      <div className="product-detail">
        <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#7bb3d4', marginBottom: '0.5rem' }}>₹{product.price}</p>
          <div className={`expiry-badge ${expiryClass}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
            {expiryEmoji} Expires on {product.expiryDate} ({freshnessDaysLeft <= 0 ? 'Expired' : `${freshnessDaysLeft} days left`})
          </div>
          <div style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            <p><strong>🏷️ Batch / Source:</strong> {product.batchInfo || 'Not specified'}</p>
            <p><strong>📦 Last restocked:</strong> {product.lastRestocked ? new Date(product.lastRestocked).toLocaleString() : 'Unknown'}</p>
            <p><strong>🏪 Shop:</strong> {product.shopName}</p>
            {shop && <p><strong>🚚 Delivery charge:</strong> ₹{shop.deliveryCharge}</p>}
          </div>
          <button onClick={handleAddToCart} className="btn-primary" disabled={!product.available || freshnessDaysLeft <= 0} style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}>
            {product.available && freshnessDaysLeft > 0 ? '🛒 Add to Cart' : '❌ Out of Stock / Expired'}
          </button>
        </div>
      </div>
    </div>
  );
}