import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { products, getFreshnessDaysLeft } from '../data/dummyData';

export default function ProductListingPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    category: '',
    availableOnly: false,
    minFreshnessDays: 0,
  });

  const filteredProducts = products.filter(product => {
    if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;
    if (filters.category && product.category !== filters.category) return false;
    if (filters.availableOnly && !product.available) return false;
    const freshness = getFreshnessDaysLeft(product.expiryDate);
    if (freshness < filters.minFreshnessDays) return false;
    return true;
  });

  return (
    <div className="container" style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7bb3d4' }}>
          🛍️ All Products
        </h1>
        <div className="view-toggle">
          <button onClick={() => setViewMode('grid')} className={`view-btn ${viewMode === 'grid' ? 'view-btn-active' : 'view-btn-inactive'}`}>
            🔲 Grid
          </button>
          <button onClick={() => setViewMode('list')} className={`view-btn ${viewMode === 'list' ? 'view-btn-active' : 'view-btn-inactive'}`}>
            📋 List
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ width: '100%' }}>
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
        <div style={{ flex: 1 }}>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <span style={{ fontSize: '3rem' }}>🔍</span>
              <p style={{ color: '#6b7280', marginTop: '1rem' }}>No products match your filters. Try adjusting them!</p>
            </div>
          ) : (
            viewMode === 'grid' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                {filteredProducts.map(product => <ProductCard key={product._id} product={product} viewMode={viewMode} />)}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredProducts.map(product => <ProductCard key={product._id} product={product} viewMode={viewMode} />)}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}