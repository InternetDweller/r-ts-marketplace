import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import '../css/style.css';

export default function Catalogue() {
    return(
        <div className='mainContent'>
            <Header />
            <div className='pageTitle'>Каталог товаров</div>
            <ProductList />
            <Footer />
        </div>
    );
};