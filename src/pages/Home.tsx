import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopProducts from '../components/TopProducts';
import '../css/style.css';

export default function Home() {
    const navigate: Function = useNavigate();

    return(
        <div className='mainContent homePage'>
            <Header />
            <div id='promoWrapper'><div><img alt='Акция' src='/assets/акция.jpg' onClick={() => navigate('/promo')} /></div></div>
            <TopProducts />
            <div id='couponGridWrapper'>
                <div id='couponGrid'>
                    <div id='couponGridBox1'><img alt='Карта лояльности' src='/assets/карта.jpg' /></div>
                    <div id='couponGridBox2'><img alt='Абстрактный жёлтый фон' src='/assets/abstract-yellow.jpg' /></div>
                    <div id='couponGridBox3'><img alt='Абстрактный фиолетовый фон' src='/assets/abstract-purple.jpg' /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};