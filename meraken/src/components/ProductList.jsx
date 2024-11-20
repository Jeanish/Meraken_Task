import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import data from "../data/data.json";

const ProductList = () => {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (!filter || product.category === filter) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <FilterBar
        onSearchChange={(value) => setSearch(value)}
        onFilterChange={(value) => setFilter(value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
