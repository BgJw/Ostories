import './app.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PreviewGallery from './components/PreviewGallery/PreviewGallery';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {

  return (
    <div className="app">
        <Header />
        <PreviewGallery />
        <Content />
        <Footer />
        <SingleProduct />
    </div>
  );
}

export default App;
