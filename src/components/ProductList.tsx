import ProductCard from './ProductCard';
import { TypeProduct, products } from '../data/productsData';
import { useState, useEffect } from 'react';

interface TypeProps {
    sorting: string,
    filter: string,
}

export default function ProductList(props: TypeProps) {
    const [data, setData] = useState<TypeProduct[]>(products);

    useEffect(() => {
        let effectedData = [...products];

        switch(props.filter) {
            case 'male':
                effectedData = effectedData.filter(item => (item.gender === 'M' || item.gender === 'U'));
                break;
            case 'female':
                effectedData = effectedData.filter(item => (item.gender === 'F' || item.gender === 'U'));
                break;
        };

        switch(props.sorting) {
            case 'alphabet':
                effectedData = effectedData.sort((item1, item2) => item1.name.localeCompare(item2.name));
                break;
            case 'price':
                effectedData = effectedData.sort((item1, item2) => item1.price - item2.price);
                break;
            default:
                effectedData = effectedData.sort((item1, item2) => item1.id - item2.id);
                break;
        };
        
        setData(effectedData);
    }, [props.sorting, props.filter]);

    const listData: React.ReactElement[] = data.map(item =>
        <ProductCard key={item.id} sizesNum={item.size.length} id={item.id} name={item.name} price={item.price} src={`/assets/${item.src}`} />
    );

    return(
        <div className='productList'>
            {listData}
        </div>
    );
};