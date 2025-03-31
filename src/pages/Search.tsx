import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductFilteredList from '../components/ProductFilteredList';
import '../css/style.css';

export default function Search() {
    return(
        <div className='mainContent'>
            <Header />
            <div className='pageTitle'>Результаты поиска</div>
            <ProductFilteredList />
            <Footer />
        </div>
    );
};