import ProductCard from './ProductCard';
import { products } from '../data/productsData';

export default function ProductList() {
    const listData = products.map(product =>
        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} src={`/assets/${product.src}`} />
    );

    return(
        <div id='productList'>
            {listData}
        </div>
    );
};