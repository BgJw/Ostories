import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import './app.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PreviewGallery from './components/PreviewGallery/PreviewGallery';
import SingleProduct from './components/SingleProduct/SingleProduct';
import ClothesService from './services/ClothesService';

function App() {

const {getClothesForMan} = ClothesService();


useEffect(()=> {
  getClothesForMan()
}, [])
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

          <Route element={<SingleProduct />} path={'/product'} />
          <Route element={<div>Error</div>} path={'*'} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
