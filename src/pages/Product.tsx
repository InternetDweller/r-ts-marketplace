import { useParams } from 'react-router-dom'; //get URL link parameters
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/style.css';
import { products, TypeProduct } from '../data/productsData';
import { useState } from 'react';

export default function Product() {
    console.log(useParams());
    let { productid } = useParams();

    const product: TypeProduct | undefined = products.find(product => product.id === Number(productid));

    return(
        <div className='mainContent'>
            <Header />
            <div>This is the <b>Product</b> page</div>
            <div>Отображаем информацию о товаре {productid}</div>

            <div><b>{product?.name}</b></div>
            <div>⭐ 4.3 / 5</div>
            <div id='productPageImageWrapper'><img alt={product?.name} src={`/assets/${product?.src}`} /></div>
            <div>{product?.price} рублей</div>
            <div>Размеры</div>
            <div>Состав</div>
            <Footer />
        </div>
    );
};