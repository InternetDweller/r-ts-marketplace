import { useNavigate } from 'react-router-dom';
import { social } from '../data/socialMedia';
import '../css/style.css';

// FOR RESPONSIVE GRIDS:
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids

export default function Footer() {
    const navigate: Function = useNavigate();

    const socialData: React.ReactElement[] = social.map((item, i) => { // casually mapping data lol
        return (<a key={i} href={social[i].src}><div className='socialImgWrapper'><img alt={social[i].title} src={social[i].icon}/></div></a>);
    });

    return(
        <div className="footer">
            <div className="footerGridWrapper">
                <div className='footerBox box1'>
                    <div className='footerTitle'>Скачать приложение</div>
                    <div id='qrImageWrapper'><img alt="QR-код" src='/assets/qr.svg'/></div>
                </div>
                <div className='footerBox box2'>
                    <div className='footerTitle'>Навигация</div>
                    <div className='hyperlink' onClick={() => navigate('/')}>➤ Главная</div>
                    <div className='hyperlink' onClick={() => navigate('/catalogue')}>➤ Каталог</div>
                    <div className='hyperlink' onClick={() => navigate('/random')}>➤ Ошибка :)</div>
                    <div className='hyperlink' onClick={() => navigate('/page1')}>➤ Ещё страница</div>
                    <div className='hyperlink' onClick={() => navigate('/page2')}>➤ Ещё страница</div>
                </div>
                <div className='footerBox box3'>
                    <div className='footerTitle'>Мы в социальных сетях</div>
                    <div id='socialWrapper'>
                        {socialData}
                    </div>
                </div>
                <div className='footerBox box4'>
                    <div className='footerTitle'>Контакты</div>
                    <div>Горячая линия:<br/>+7 (900) 123-45-67</div>
                    <div><br/></div>
                    <div>Россия, г. N, ул. Пушкина, д. Колотушкина</div>
                    <div><br/></div>
                    <div>☎ 12-34-56</div>
                    <div>Пн-пт 6:00-18:00</div>
                </div>
                <div className='footerBox box5'>InternetDweller © 2025</div>
            </div>
        </div>);
};