import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { products } from '../data/productsData';

export default function ProductFilteredList() {
    let { query } = useParams<string>();

    const filtered = products.filter (product => (product.name).toLowerCase().includes('' + query?.toLowerCase()));
    console.log(filtered);

    const listData: React.ReactElement[] = filtered.map(product =>
        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} src={`/assets/${product.src}`} />
    );

    return(<>
        <div className={filtered.length === 0 ? '' : 'invisible'} id='msgNothingFound'>Ничего не найдено</div>
        <div className='productList'>
            {listData}
        </div>
    </>);
};