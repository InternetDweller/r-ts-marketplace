import ProductCard from './ProductCard';
import { products } from '../data/productsData';

export default function ProductList() {    
    const listData: React.ReactElement[] = products.map(product =>
        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} src={`/assets/${product.src}`} />
    );

    return(
        <div className='productList'>
            {listData}
        </div>
    );
};