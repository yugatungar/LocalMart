import CartItem from '../components/CartItem';
import { shops } from '../data/dummyData';

export default function CartPage({ cartItems, updateCartQuantity, removeFromCart }) {
  // Group items by shopId
  const grouped = cartItems.reduce((acc, item) => {
    if (!acc[item.shopId]) {
      acc[item.shopId] = {
        shopName: item.shopName,
        shopId: item.shopId,
        items: [],
      };
    }
    acc[item.shopId].items.push(item);
    return acc;
  }, {});

  // EMPTY CART MESSAGE (like Amazon)
  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '4rem' }}>🛒</div>
        <h2 style={{ fontSize: '1.8rem', margin: '1rem 0', color: '#333' }}>Your cart is empty</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Add something to your cart — you'll find great deals here! 🎉</p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="btn-primary" 
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
        >
          Continue Shopping 🛍️
        </button>
      </div>
    );
  }

  // Cart has items – show them grouped by shop
  return (
    <div className="container" style={{ padding: '1rem', maxWidth: '1024px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#7bb3d4' }}>
        🛒 Your Cart
      </h2>

      {Object.values(grouped).map(shopGroup => (
        <div key={shopGroup.shopId} className="cart-group" style={{ marginBottom: '1.5rem' }}>
          <div className="cart-group-header">
            <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>📦 {shopGroup.shopName}</h3>
          </div>
          {shopGroup.items.map(item => (
            <CartItem key={item._id} item={item} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />
          ))}
        </div>
      ))}

      <div style={{ textAlign: 'right', marginTop: '1rem' }}>
        <button 
          className="btn-primary" 
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          onClick={() => alert('Proceed to checkout page (already built separately)')}
        >
          Proceed to Checkout → 💳
        </button>
      </div>
    </div>
  );
}