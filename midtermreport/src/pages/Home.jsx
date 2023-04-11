import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';
// import products from "../json/products.json"



function Home() {
    return (
      <div className="container main-layout">
        <Header className="layout-header"/>
        <ProductList className="layout-content"/>
        <Footer className="layoutFooter"/>
      </div>
    );
  }
  export default Home;
  
  
  
  