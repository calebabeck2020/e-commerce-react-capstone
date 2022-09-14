import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Cart } from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import { DisplayProducts } from "../components/display-products/DisplayProducts";
import { EditProductPage } from '../components/edit-products/EditProductPage';
import { EditProducts } from '../components/edit-products/EditProducts';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<DisplayProducts />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/admin/products/:page" element={<EditProducts />} />
    <Route path="/admin/product/:id" element={<EditProductPage />} />
  </Routes>
)