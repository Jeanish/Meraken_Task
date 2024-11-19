import React, { useState } from "react";
import ProductCard from "./ProductCard";
import data from "../data/data.json";

const ProductList = () => {
  const [product, setProducts] = useState(data);
  const [search, setSearch] = useState("");


  return (
    <div>
      <div className="product-grid">
      {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
