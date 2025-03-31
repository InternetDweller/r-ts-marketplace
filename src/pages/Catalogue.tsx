import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import '../css/style.css';

export default function Catalogue() {
    return(
        <div className='mainContent'>
            <Header />
            <div className="cat">This is the <b>Catalogue</b> page</div>
            <ProductList />
            <Footer />
        </div>
    );
};