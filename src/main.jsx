import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import AllProducts from './pages/allProducts.jsx';
import Signin from './pages/signin.jsx';
import Signup from './pages/signup.jsx';
import Product from './pages/product.jsx';
import Dashboard from './pages/dashboard.jsx';
import ProductManage from './pages/ProductManage.jsx';
import OrderManage from './pages/OrderManage.jsx';
import MyProvider from './Context/MyProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productmanage" element={<ProductManage />} />
      <Route path="/order-manage" element={<OrderManage />} />
    </Routes>
    </BrowserRouter>
    </MyProvider>
  </StrictMode>,
)
