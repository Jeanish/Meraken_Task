import React, { useState } from "react";

const FilterBar = ({ onSearchChange, onFilterChange, onSortChange }) => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <div className="filter-bar-container">
      <input
        className="search-box"
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button
        className="toggle-panel-btn"
        onClick={() => setIsPanelVisible(!isPanelVisible)}
      >
        Filters
      </button>
      {isPanelVisible && (
        <div className="filter-panel">
          <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Accessories">Accessories</option>
            <option value="Furniture">Furniture</option>
            <option value="Stationery">Stationery</option>
            <option value="Travel">Travel</option>
          </select>
          <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
