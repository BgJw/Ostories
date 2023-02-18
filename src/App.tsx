import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SingleProduct from './pages/SingleProductPage/SingleProduct';
import ComparePage from './pages/ComparePage/ComparePage';
import { useAppDispatch } from './Hooks/useDispatch_Selector';
import { fetchClothesForMan, fetchClothesForWoman } from './Slices/ProductSlice';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FilterPage from './pages/FilterPage/FilterPage';
import HomePage from './pages/HomePage/HomePage';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CartPage from './pages/CartPage/CartPage';
import { isCheckLocalStorage } from './Slices/BadgeSlice';


import './app.scss';

function App() {
  const dispatch = useAppDispatch();


useEffect(()=> {
  dispatch(fetchClothesForMan());
  dispatch(fetchClothesForWoman());
  dispatch(isCheckLocalStorage());
}, []);

  return (
    <div className="app">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<SingleProduct />} path={'/product/:productId'} />
          <Route element={<FilterPage />} path={'/filter'} />
          <Route element={<ComparePage />} path={'/compare'} />
          <Route element={<FavoritesPage />} path={'/favorites'}/>
          <Route element={<CartPage />} path={'/cart'}/>
          <Route element={<NotFoundPage />} path={'*'} />
        </Routes>
        
        <Footer />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
