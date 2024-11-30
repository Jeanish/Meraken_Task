import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import data from "../data/data.json";

const ProductList = () => {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (!filter || product.category === filter) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "low-to-high"
        ? a.price - b.price
        : sortOrder === "high-to-low"
        ? b.price - a.price
        : 0
    );

  return (
    <div>
      <FilterBar
        onSearchChange={(value) => setSearch(value)}
        onFilterChange={(value) => setFilter(value)}
        onSortChange={(value) => setSortOrder(value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
