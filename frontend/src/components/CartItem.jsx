export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 style={{ fontWeight: '600' }}>{item.name}</h4>
        <p style={{ color: '#7bb3d4' }}>₹{item.price}</p>
        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.shopName}</p>
      </div>
      <div className="quantity-control">
        <button onClick={() => onUpdateQuantity(item._id, item.quantity - 1)} className="quantity-btn" disabled={item.quantity <= 1}>-</button>
        <span style={{ width: '2rem', textAlign: 'center' }}>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item._id, item.quantity + 1)} className="quantity-btn">+</button>
      </div>
      <button onClick={() => onRemove(item._id)} className="remove-btn">Remove</button>
    </div>
  );
}