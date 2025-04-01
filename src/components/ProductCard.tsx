import { useNavigate } from 'react-router-dom';
import '../css/style.css';

interface TypeProps {
    id: number,
    name: string,
    price: number,
    src: string,
    sizesNum: number,
};

export default function ProductCard(props: TypeProps) {
    const navigate: Function = useNavigate();

    const link: string = '/product/' + props.id;

    return(
        <div title={props.name} className={'productCard' + (props.sizesNum === 0 ? ' stockout' : '')} onClick={() => navigate(link)}>
            <div className='productImageWrapper'><img className="productImage" alt={props.name} src={props.src} /></div>
            <div className='productName'>{props.name}</div>
            <div className='productPriceWrapper'><div className="productPrice">{props.sizesNum === 0 ? 'Отсутствует' : (props.price.toLocaleString('ru-RU') + ' ₽')}</div></div>
        </div>
    );
};

/*
return(
        <div className='productCard' onClick={props.onClick}>
            <a href={link}>
                <div className='productImageWrapper'><img className="productImage" alt={props.name} src={props.src} /></div>
                <div className="productName">{props.name}<br/>({props.price} руб.)</div>
            </a>
        </div>
    );
*/