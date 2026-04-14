import { useState } from 'react';

// Dummy user data
const userData = {
  name: "Tanmayi Kulkarni",
  email: "tanmayi@example.com",
  phone: "+91 98765 43210",
  dob: "2003-05-14",
  memberSince: "January 2025",
};

// Dummy order history
const orderHistory = [
  {
    id: "ORD001",
    date: "2026-04-10",
    total: 282,
    status: "Delivered",
    items: [
      { name: "🥚 Eggs (12 pcs)", quantity: 2, price: 94 },
      { name: "🥛 Fresh Milk", quantity: 1, price: 94 },
    ],
  },
  {
    id: "ORD002",
    date: "2026-04-05",
    total: 94,
    status: "Delivered",
    items: [{ name: "🥚 Eggs (12 pcs)", quantity: 1, price: 94 }],
  },
];

// Dummy saved addresses (improved with emojis)
const savedAddresses = [
  { id: 1, label: "🏠 Home", address: "123 Main Street, Apartment 4B, Mumbai - 400001" },
  { id: 2, label: "🏢 Office", address: "Tech Park, 5th Floor, Bangalore - 560001" },
];

// Dummy favorite shops
const favoriteShops = [
  { id: "69db7a23855dbff02a961073", name: "Fresh Mart", rating: 4.5, image: "🥬" },
  { id: "69db7a23855dbff02a961077", name: "Dairy Delight", rating: 4.8, image: "🧀" },
];

// Dummy reviews given
const reviewsGiven = [
  {
    id: 1,
    productName: "🥚 Eggs (12 pcs)",
    shopName: "Fresh Mart",
    rating: 5,
    comment: "Very fresh eggs, delivered quickly! 🚚💨",
    date: "2026-04-12",
  },
  {
    id: 2,
    productName: "🥛 Fresh Milk",
    shopName: "Daily Needs Store",
    rating: 4,
    comment: "Good value for money. 👍",
    date: "2026-04-08",
  },
];

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");
  const [editingAddress, setEditingAddress] = useState(null); // interactive edit

  return (
    <div className="container" style={{ padding: '1rem', maxWidth: '1024px', margin: '0 auto' }}>
      {/* Profile Header with more details and edit icon */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        padding: '1.5rem', 
        marginBottom: '1.5rem', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7bb3d4' }}>👤 My Profile</h1>
          <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>✏️ Edit</button>
        </div>
        <p><strong>👋 {userData.name}</strong></p>
        <p style={{ color: '#6b7280' }}>📧 {userData.email}</p>
        <p style={{ color: '#6b7280' }}>📞 {userData.phone}</p>
        <p style={{ color: '#6b7280' }}>🎂 {new Date(userData.dob).toLocaleDateString()}</p>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>📅 Member since {userData.memberSince}</p>
      </div>

      {/* Tab Navigation with emojis */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #e5e7eb', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { key: "orders", label: "📦 Order History" },
          { key: "addresses", label: "📍 Saved Addresses" },
          { key: "favorites", label: "❤️ Favorite Shops" },
          { key: "reviews", label: "⭐ Reviews Given" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '0.6rem 1.2rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === tab.key ? 'bold' : 'normal',
              color: activeTab === tab.key ? '#7bb3d4' : '#6b7280',
              borderBottom: activeTab === tab.key ? '3px solid #a0d1f2' : 'none',
              marginBottom: '-2px',
              transition: 'all 0.2s',
              borderRadius: '8px 8px 0 0',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.key) e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content with hover effects and interactive elements */}
      <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        {activeTab === "orders" && (
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📋 Order History <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>({orderHistory.length})</span>
            </h2>
            {orderHistory.length === 0 ? (
              <p>🛍️ No orders yet. Start shopping!</p>
            ) : (
              orderHistory.map(order => (
                <div key={order.id} style={{ 
                  borderBottom: '1px solid #e5e7eb', 
                  paddingBottom: '1rem', 
                  marginBottom: '1rem',
                  transition: 'background 0.2s',
                  borderRadius: '8px',
                  padding: '1rem',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span><strong>🧾 Order #{order.id}</strong></span>
                    <span>📅 {new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    {order.items.map((item, idx) => (
                      <div key={idx} style={{ fontSize: '0.9rem' }}>{item.quantity} × {item.name} – ₹{item.price * item.quantity}</div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>💰 Total: <strong>₹{order.total}</strong></span>
                    <span style={{ 
                      color: order.status === 'Delivered' ? '#10b981' : '#f59e0b',
                      backgroundColor: order.status === 'Delivered' ? '#d1fae5' : '#fef3c7',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      {order.status === 'Delivered' ? '✅ Delivered' : '⏳ Pending'}
                    </span>
                  </div>
                  <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', marginTop: '0.5rem' }}>🔍 View Details</button>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "addresses" && (
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📍 Saved Addresses <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>({savedAddresses.length})</span>
            </h2>
            {savedAddresses.length === 0 ? (
              <p>🏠 No saved addresses. Add one now!</p>
            ) : (
              savedAddresses.map(addr => (
                <div key={addr.id} style={{ 
                  borderBottom: '1px solid #e5e7eb', 
                  paddingBottom: '1rem', 
                  marginBottom: '1rem',
                  transition: 'background 0.2s',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <p><strong>{addr.label}</strong></p>
                  <p style={{ color: '#6b7280' }}>📌 {addr.address}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button 
                      className="btn-primary" 
                      style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}
                      onClick={() => setEditingAddress(addr.id)}
                    >
                      ✏️ Edit
                    </button>
                    <button style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', padding: '0.2rem 0.6rem', fontSize: '0.7rem', cursor: 'pointer' }}>
                      🗑️ Delete
                    </button>
                  </div>
                  {editingAddress === addr.id && (
                    <div style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: '#fef9c3', borderRadius: '4px' }}>
                      <input type="text" defaultValue={addr.address} style={{ width: '100%', padding: '0.3rem' }} />
                      <button className="btn-primary" style={{ fontSize: '0.7rem', marginTop: '0.3rem' }}>Save</button>
                    </div>
                  )}
                </div>
              ))
            )}
            <button className="btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              ➕ Add New Address
            </button>
          </div>
        )}

        {activeTab === "favorites" && (
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ❤️ Favorite Shops <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>({favoriteShops.length})</span>
            </h2>
            {favoriteShops.length === 0 ? (
              <p>🏪 No favorite shops yet. Start adding!</p>
            ) : (
              favoriteShops.map(shop => (
                <div key={shop.id} style={{ 
                  borderBottom: '1px solid #e5e7eb', 
                  paddingBottom: '1rem', 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  transition: 'background 0.2s',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div>
                    <p><strong>{shop.image} {shop.name}</strong></p>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>⭐ {shop.rating} / 5</p>
                  </div>
                  <button className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>🔍 Visit Shop</button>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⭐ Reviews Given <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>({reviewsGiven.length})</span>
            </h2>
            {reviewsGiven.length === 0 ? (
              <p>✍️ No reviews yet. Share your experience!</p>
            ) : (
              reviewsGiven.map(review => (
                <div key={review.id} style={{ 
                  borderBottom: '1px solid #e5e7eb', 
                  paddingBottom: '1rem', 
                  marginBottom: '1rem',
                  transition: 'background 0.2s',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                    <span><strong>{review.productName}</strong> from {review.shopName}</span>
                    <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>📅 {new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <div style={{ marginBottom: '0.3rem' }}>⭐ {review.rating}/5 {'⭐'.repeat(review.rating)}</div>
                  <p style={{ color: '#4b5563', fontStyle: 'italic' }}>“{review.comment}”</p>
                  <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', marginTop: '0.3rem' }}>✏️ Edit Review</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}