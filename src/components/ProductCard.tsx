import { useNavigate } from 'react-router-dom';
import '../css/style.css';

interface TypeProps {
    id: number,
    name: string,
    price: number,
    src: string,
};

export default function ProductCard(props: TypeProps) {
    const navigate: Function = useNavigate();

    const link: string = '/product/' + props.id;

    return(
        <div className='productCard' onClick={() => navigate(link)}>
            <div className='productImageWrapper'><img className="productImage" alt={props.name} src={props.src} /></div>
            <div className="productName">{props.name}<br/>({props.price} руб.)</div>
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