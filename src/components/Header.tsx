import '../css/style.css';

export default function Header() {
    return(
        <div className='header'>
            <ul id='headerRibbon'>
                <li><a href='/'><img alt='logo' src='/favicon.ico' /></a></li>
                <li>Каталог</li>
                <li>Корзина</li>
                <li>Профиль</li>
            </ul>
        </div>);
};