import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { products } from '../data/productsData';

export default function ProductFilteredList() {
    let { query } = useParams<string>();

    const filtered = products.filter(item => (item.name).toLowerCase().includes('' + query?.toLowerCase()));

    const listData: React.ReactElement[] = filtered.map(item =>
        <ProductCard key={item.id} sizesNum={item.size.length} id={item.id} name={item.name} price={item.price} src={`/assets/${item.src}`} />
    );

    return(<>
        <div className={filtered.length === 0 ? '' : 'invisible'} id='msgNothingFound'>Ничего не найдено</div>
        <div className='productList'>
            {listData}
        </div>
    </>);
};