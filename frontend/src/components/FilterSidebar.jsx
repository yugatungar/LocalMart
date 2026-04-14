export default function FilterSidebar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">Price Range</h3>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="number"
          name="minPrice"
          placeholder="Min ₹"
          value={filters.minPrice}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.25rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max ₹"
          value={filters.maxPrice}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.25rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
        />
      </div>

      <h3 className="filter-title">Category</h3>
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
      >
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        {/* Add more categories if needed */}
      </select>

      <h3 className="filter-title">Availability</h3>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input type="checkbox" name="availableOnly" checked={filters.availableOnly} onChange={handleChange} style={{ marginRight: '0.5rem' }} />
        Only in stock
      </label>

      <h3 className="filter-title">Freshness (min days left)</h3>
      <input
        type="number"
        name="minFreshnessDays"
        value={filters.minFreshnessDays}
        onChange={handleChange}
        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
        min="0"
      />
    </div>
  );
}