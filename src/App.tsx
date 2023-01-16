import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import './app.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PreviewGallery from './components/PreviewGallery/PreviewGallery';
import SingleProduct from './components/SingleProduct/SingleProduct';
import ComparePage from './components/ComparePage/ComparePage';
import { useAppDispatch } from './Hooks/useDispatch_Selector';
import { fetchClothes,  } from './Slices/PreviewGallerySlice';
import { fetchClothesForMan, fetchClothesForWoman } from './Slices/ProductSlice';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';

function App() {
  const dispatch = useAppDispatch();


useEffect(()=> {
  dispatch(fetchClothes());
  dispatch(fetchClothesForMan());
  dispatch(fetchClothesForWoman());

}, []);

  return (
    <div className="app">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route element={
            <>
              <PreviewGallery />
              <Content />
              <Footer />
            </>
          } path='/' />

          <Route element={<SingleProduct />} path={'/product/:productId'} />
          <Route element={<ComparePage />} path={'/compare'} />
          <Route element={<FavoritesPage />} path={'/favorites'}/>
          <Route element={<div>Error</div>} path={'*'} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
