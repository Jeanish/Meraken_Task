import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <div className="product-detail">
      {product ? (
        <>
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
