import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; //get URL link parameters
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';
import '../css/style.css';
import { products, TypeProduct } from '../data/productsData';

export default function Product() {
    let { productid } = useParams();

    const product: TypeProduct | undefined = products.find(product => product.id === Number(productid));

    const navigate = useNavigate();
    useEffect(() => {
        if (product === undefined) {
            navigate('/error');
        };
    });

    function reviewsButtonClick() {
        navigate('/reviews');
    };

    return(
        <div className='mainContent'>
            <Header />
            <div id='productPageContentWrapper'>
                <div id='productPageGridWrapper'>
                    <div id='productPageName'><b>{product?.name}</b></div>
                    <div></div>
                    <div id='productPageImageWrapper'><img alt={product?.name} src={`/assets/${product?.src}`} /></div>
                    <div>⭐ {product?.rating} / 5 <Button caption='Отзывы' onClick={reviewsButtonClick}/></div>
                    <div>{product?.price} ₽</div>
                    <div>
                        <div>Размеры:</div>
                        <div id='sizes'>
                            <ToggleButton inStock={product?.size.includes(1) ? true : false} caption='60-62' onClick={null}/>
                            <ToggleButton inStock={product?.size.includes(2) ? true : false} caption='64-72' onClick={null}/>
                            <ToggleButton inStock={product?.size.includes(3) ? true : false} caption='76-88' onClick={null}/>
                            <ToggleButton inStock={product?.size.includes(4) ? true : false} caption='90-100' onClick={null}/>
                            <ToggleButton inStock={product?.size.includes(5) ? true : false} caption='105-117' onClick={null}/>
                        </div>
                    </div>
                    <div>Состав:</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};