import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/style.css';

export default function Home() {
    return(
        <div className='mainContent'>
            <Header />
            <div>This is the <b>Home</b> page</div>
            <a href="/catalogue">В каталог</a>
            <Footer />
        </div>
    );
};