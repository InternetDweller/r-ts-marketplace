import { useNavigate } from 'react-router-dom';
import '../css/style.css';

interface TypeProps {
    id: number,
    name: string,
    price: number,
    src: string,
    sizesNum: number,
    rating: number,
};

export default function ProductCardRating(props: TypeProps) {
    const navigate: Function = useNavigate();

    const link: string = '/product/' + props.id;

    return(
        <div title={props.name} className='productCard withRating' onClick={() => navigate(link)}>
            <div className='productImageWrapper'><img className="productImage" alt={props.name} src={props.src} /></div>
            <div className='productName'>{props.name}</div>
            <div className='productPriceRatingWrapper'>
                <div className='productRating'>★ {props.rating}</div>
                <div className="productPriceAtRating">{props.price.toLocaleString('ru-RU') + ' ₽'}</div>
            </div>
        </div>
    );
};