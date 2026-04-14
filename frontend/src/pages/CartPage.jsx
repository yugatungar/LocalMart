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

  const shopIds = Object.keys(grouped);
  const isMultiShop = shopIds.length > 1;
  const selectedShopId = shopIds[0]; // MVP: first shop
  const selectedShop = grouped[selectedShopId];
  const shopData = shops.find(s => s.id === selectedShopId);
  const subtotal = selectedShop?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const total = subtotal + (shopData?.deliveryCharge || 0);

  const handleCheckout = () => {
    alert(`Proceeding to checkout for ${selectedShop?.shopName}\nTotal: ₹${total.toFixed(2)}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '1rem', maxWidth: '1024px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#7bb3d4' }}>Your Cart</h2>

      {isMultiShop && (
        <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fef9c3', borderLeft: '4px solid #facc15' }}>
          <p><strong>MVP note:</strong> Checkout is limited to one shop at a time. Showing cart for <strong>{selectedShop?.shopName}</strong>.</p>
        </div>
      )}

      <div className="cart-group">
        <div className="cart-group-header">
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{selectedShop?.shopName}</h3>
        </div>
        {selectedShop?.items.map(item => (
          <CartItem key={item._id} item={item} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />
        ))}
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Delivery charge:</span> <span>₹{shopData?.deliveryCharge.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.125rem' }}>
            <span>Total:</span> <span>₹{total.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Proceed to Checkout</button>
        </div>
      </div>

      {isMultiShop && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Other shops in your cart:</p>
          {shopIds.filter(id => id !== selectedShopId).map(id => (
            <div key={id}>{grouped[id].shopName} ({grouped[id].items.reduce((s,i)=>s+i.quantity,0)} items)</div>
          ))}
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Multi-shop checkout will be available later.</p>
        </div>
      )}
    </div>
  );
}