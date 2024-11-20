import React from "react";

const FilterBar = ({ onSearchChange, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <input className="search-box"
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Stationery">Stationery</option>
        <option value="Travel">Travel</option>
      </select>
    </div>
  );
};

export default FilterBar;
