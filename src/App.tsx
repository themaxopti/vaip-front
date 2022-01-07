import React, { useEffect, useState } from 'react';
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
import { IsEighteen } from './components/IsEighteen/IsEighteen';
import { Animation } from './components/Animation/Animation';
import { useAppDispatch } from './redux/redux-toolkit-store';
import { auth } from './redux/user-reducer';
import { Politic } from './components/politic/Politic';
import {СontractOferta} from './components/Contract/Contract'
import { Thanks } from './components/ThanksPage/ThanksPage';
import { PageNotFound } from './components/404/PageNotFound';


const MainTitleWith = SettingsHoc(MainTitle)
const PlusMinusWith = SettingsHoc(PlusMinus)
const ProductsWith = SettingsHoc(Products)
const CategoriesOfWith = SettingsHoc(CategoriesOf)
const RegisterWith = SettingsHoc(Register)
const LoginWith = SettingsHoc(Login)
const UserPageWith = SettingsHoc(UserPage)
const ProductWith = SettingsHoc(Product)
const PoliticWith = SettingsHoc(Politic)
const СontractWith = SettingsHoc(СontractOferta)
const ThanksWith = SettingsHoc(Thanks)
const PageNotFoundWith = SettingsHoc(PageNotFound)

const App: React.FC = () => {
  // @ts-ignore
  let hide = JSON.parse(localStorage.getItem('hide') || false)

  const [animation, setAnimation] = useState(hide)

  const dispatch = useAppDispatch()

  // @ts-ignore
  useEffect(async () => {
    dispatch(auth())
  }, [])


  return (
    <div>

      <IsEighteen animation={animation} setAnimation={setAnimation} />

      {hide && <Animation />}

      <Routes>
        <Route path="/" element={<MainTitleWith />} />
        <Route path="/plusMinus" element={<PlusMinusWith />} />
        <Route path="/products" element={<ProductsWith />} />
        <Route path="/categories" element={<CategoriesOfWith />} />
        <Route path="/register" element={<RegisterWith />} />
        <Route path="/login" element={<LoginWith />} />
        <Route path="/userPage" element={<UserPageWith />} />
        <Route path="/product/:id" element={<ProductWith />} />
        <Route path="/politic" element={<PoliticWith />} />
        <Route path="/contract" element={<СontractWith />} />
        <Route path="/thanks" element={<ThanksWith />} />
        <Route path="*" element={<PageNotFoundWith />} />
      </Routes>
    </div>
  );
}
// PageNotFoundWith
export default App;
