import '../css/style.css';

export default function Footer() {
    return(
        <div className="footer">
            <div className="footerGridWrapper">
                <div className='footerBox box1'>
                    <div id='qrImageWrapper'><img alt="QR-код" src='/assets/отсутствует.jpg'/></div>
                </div>
                <div className='footerBox box2'>
                    <div>Навигация</div>
                    <div><a href='/'>Главная</a></div>
                    <div><a href='/catalogue'>Каталог</a></div>
                    <div><a href='/random'>Ошибка :)</a></div>
                    <div><a href='/page1'>Ещё страница</a></div>
                    <div><a href='/page2'>Ещё страница</a></div>
                </div>
                <div className='footerBox box3'>Мы в социальных сетях</div>
                <div className='footerBox box4'>Контакты</div>
                <div className='footerBox box5'>Дубинина Д. С. © 2025</div>
            </div>
        </div>);
};