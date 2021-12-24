import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import { MainTitle } from './components/MainTitle/MainTitle';
import { PlusMinus } from './components/PlusMinus/PlusMinus';
import { SettingsHoc } from './hoc/SettingsHoc';
import { Products } from './components/products/Products';
import { CategoriesOf } from './components/Categories/CategoriesOf';
import { Register } from './components/LoginAndRegister/Register';
import { Login } from './components/LoginAndRegister/Login';
import { UserPage } from './components/UserPage/UserPage';
import { Product } from './components/Product/Product';
import { Store } from './usableComponents/Store';

const MainTitleWith = SettingsHoc(MainTitle)
const PlusMinusWith = SettingsHoc(PlusMinus)
const ProductsWith = SettingsHoc(Products)
const CategoriesOfWith = SettingsHoc(CategoriesOf)
const RegisterWith = SettingsHoc(Register)
const LoginWith = SettingsHoc(Login)
const UserPageWith = SettingsHoc(UserPage)
const ProductWith = SettingsHoc(Product)

// Login Product

const App: React.FC = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MainTitleWith />} />
        <Route path="/plusMinus" element={<PlusMinusWith />} />
        <Route path="/products" element={<ProductsWith />} />
        <Route path="/categories" element={<CategoriesOfWith />} />
        <Route path="/register" element={<RegisterWith />} />
        <Route path="/login" element={<LoginWith />} />
        <Route path="/userPage" element={<UserPageWith />} />
        <Route path="/product/:id" element={<ProductWith />} />
      </Routes>
    </div>
  );
}

export default App;
