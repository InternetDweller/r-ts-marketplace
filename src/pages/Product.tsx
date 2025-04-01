import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; //get URL link parameters
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';
import '../css/style.css';
import { products, TypeProduct } from '../data/productsData';

export default function Product() {
    let { productid } = useParams<string>();

    const [buttons, setButtons] = useState<Array<boolean>>([false, false, false, false, false]);

    const product: TypeProduct | undefined = products.find(product => product.id === Number(productid));

    const navigate: Function = useNavigate();
    useEffect(() => {
        if (product === undefined) {
            navigate('/error');
        };
    });

    function handleButtonStates(buttonKey: number): void {
        setButtons(previousState => {
            const newState: boolean[] = [...previousState];
            newState[buttonKey] = !newState[buttonKey];
            return newState;
        });
    };

    return(
        <div className='mainContent'>
            <Header />
            <div id='productPageContentWrapper'>
                <div id='productPageGridWrapper'>
                    <div id='productPageName'><b>{product?.name}</b></div>
                    <div></div>
                    <div id='productPageImageWrapper'><img alt={product?.name} src={`/assets/${product?.src}`} /></div>
                    <div id='reviewsWrapper'>⭐ {product?.rating} / 5 <Button caption='Отзывы' onClick={() => navigate('reviews')}/></div>
                    <div className='productPagePrice'>{product?.price.toLocaleString('ru-RU')} ₽</div>
                    <div id='sizesWrapper'>
                        <div className='productPageSubName'>Размеры:</div>
                        <div id='sizes'>
                            <ToggleButton inStock={product?.size.includes(1) ? true : false} caption='60-62' onClick={() => handleButtonStates(0)} pressed={buttons[0]} />
                            <ToggleButton inStock={product?.size.includes(2) ? true : false} caption='64-72' onClick={() => handleButtonStates(1)} pressed={buttons[1]} />
                            <ToggleButton inStock={product?.size.includes(3) ? true : false} caption='76-88' onClick={() => handleButtonStates(2)} pressed={buttons[2]} />
                            <ToggleButton inStock={product?.size.includes(4) ? true : false} caption='90-100' onClick={() => handleButtonStates(3)} pressed={buttons[3]} />
                            <ToggleButton inStock={product?.size.includes(5) ? true : false} caption='105-117' onClick={() => handleButtonStates(4)} pressed={buttons[4]} />
                        </div>
                        <span id='toBasket' className={buttons.includes(true) ? '' : ' invisible'}><Button caption='✚ В корзину' onClick={() => console.log('Здесь будет функционал, не могу присвоить значение null типу MouseEventHandler<HTMLInputElement> :<')} /></span>
                    </div>
                    <div id='madeOfWrapper'>
                        <div className='productPageSubName'>Состав:</div>
                        <div>{product?.madeof}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};