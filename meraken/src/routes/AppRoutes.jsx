import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;
