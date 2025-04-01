import { useState, useEffect } from 'react';
import { TypeProduct, products } from '../data/productsData';
import ProductCardRating from './ProductCardRating';

export default function TopProducts() {
    const [top, setTop] = useState<TypeProduct[]>(products);

    useEffect(() => {
        setTop([...products].filter(item => item.size.length !== 0).sort((item1, item2) => item2.rating - item1.rating).slice(0, 3).sort(() => 0.5 - Math.random()));
    }, [products]);

    const listData: React.ReactElement[] = top.map(item =>
        <ProductCardRating key={item.id} sizesNum={item.size.length} rating={item.rating} id={item.id} name={item.name} price={item.price} src={`/assets/${item.src}`} />
    );

    return(
        <div id='topProductsWrapper'>
            <div id='topProducts'>
                <div id='topProductsTitle'>наши клиенты выбирают</div>
                <div id='topProductsList'>{listData}</div>
            </div>
        </div>
    );
};