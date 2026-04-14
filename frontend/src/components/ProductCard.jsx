import { Link } from 'react-router-dom';
import { getFreshnessDaysLeft } from '../data/dummyData';

export default function ProductCard({ product, viewMode }) {
  const freshnessDaysLeft = getFreshnessDaysLeft(product.expiryDate);
  
  let expiryClass = '';
  let expiryText = '';
  let expiryEmoji = '';
  if (freshnessDaysLeft <= 1) {
    expiryClass = 'expiry-urgent';
    expiryText = freshnessDaysLeft <= 0 ? 'Expired' : `Expires in ${freshnessDaysLeft} day`;
    expiryEmoji = freshnessDaysLeft <= 0 ? '❌' : '⚠️';
  } else if (freshnessDaysLeft <= 3) {
    expiryClass = 'expiry-warning';
    expiryText = `Expires in ${freshnessDaysLeft} days`;
    expiryEmoji = '⏰';
  } else {
    expiryClass = 'expiry-fresh';
    expiryText = `${freshnessDaysLeft} days left`;
    expiryEmoji = '✅';
  }

  if (viewMode === 'list') {
    return (
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '0.75rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <img src={product.imageUrl} alt={product.name} style={{ width: '96px', height: '96px', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{product.name}</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#7bb3d4' }}>₹{product.price}</p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>🏪 {product.shopName}</p>
          <span className={`expiry-badge ${expiryClass}`}>{expiryEmoji} {expiryText}</span>
        </div>
        <Link to={`/product/${product._id}`} className="btn-primary">👁️ View</Link>
      </div>
    );
  }

  // Grid mode
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">₹{product.price}</p>
      <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>🏪 {product.shopName}</p>
      <span className={`expiry-badge ${expiryClass}`}>{expiryEmoji} {expiryText}</span>
      <Link to={`/product/${product._id}`} className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '0.5rem' }}>
        🔍 View Details
      </Link>
    </div>
  );
}