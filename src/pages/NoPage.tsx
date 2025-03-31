import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/style.css';

function NoPage() {
    return(
        <div className='mainContent' id='errorPage'>
            <Header />
            <div id='errorPageContentWrapper'>
                <h1>Ошибка 404</h1>
                <h2>Страница не найдена</h2>
                <div id='frog'><img alt='Frog with glasses gif' src='https://media1.tenor.com/m/oLEPrSPKT3oAAAAC/nouns-nounish.gif'/></div>
            </div>
            <Footer />
        </div>
    );
};

export default NoPage;