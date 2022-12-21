import './app.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PreviewGallery from './components/PreviewGallery/PreviewGallery';

function App() {

  return (
    <div className="app">
        <Header />
        <PreviewGallery />
        <Content>
          Menu
        </Content>
        <Footer />

    </div>
  );
}

export default App;
