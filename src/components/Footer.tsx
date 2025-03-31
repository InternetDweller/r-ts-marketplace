import '../css/style.css';
import { social } from '../data/socialMedia';

// FOR RESPONSIVE GRIDS:
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids

export default function Footer() {
    return(
        <div className="footer">
            <div className="footerGridWrapper">
                <div className='footerBox box1'>
                    <div className='footerTitle'>Скачать приложение</div>
                    <div id='qrImageWrapper'><img alt="QR-код" src='/assets/qr.svg'/></div>
                </div>
                <div className='footerBox box2'>
                    <div className='footerTitle'>Навигация</div>
                    <div><a className='hyperlink' href='/'>➤ Главная</a></div>
                    <div><a className='hyperlink' href='/catalogue'>➤ Каталог</a></div>
                    <div><a className='hyperlink' href='/random'>➤ Ошибка :)</a></div>
                    <div><a className='hyperlink' href='/page1'>➤ Ещё страница</a></div>
                    <div><a className='hyperlink' href='/page2'>➤ Ещё страница</a></div>
                </div>
                <div className='footerBox box3'>
                    <div className='footerTitle'>Мы в социальных сетях</div>
                    <div id='socialWrapper'>
                        <a href={social[0].src}><div className='socialImgWrapper'><img alt={social[0].title} src={social[0].icon}/></div></a>
                        <a href={social[1].src}><div className='socialImgWrapper'><img alt={social[1].title} src={social[1].icon}/></div></a>
                        <a href={social[2].src}><div className='socialImgWrapper'><img alt={social[2].title} src={social[2].icon}/></div></a>
                        <a href={social[3].src}><div className='socialImgWrapper'><img alt={social[3].title} src={social[3].icon}/></div></a>
                        <a href={social[4].src}><div className='socialImgWrapper'><img alt={social[4].title} src={social[4].icon}/></div></a>
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
                <div className='footerBox box5'>Дубинина Д. С. © 2025</div>
            </div>
        </div>);
};