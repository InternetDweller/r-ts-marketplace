import '../css/style.css';

interface TypeProps {
    id: number,
    name: string,
    price: number,
    src: string,
};

//<div className='productImageWrapper'><img className="productImage" alt={props.name} src={require(`../assets/${props.src}`)} /></div>

export default function ProductCard(props: TypeProps) {
    const link: string = 'product/' + props.id;

    return(
        <div className='productCard'>
            <a href={link}>
                <div className='productImageWrapper'><img className="productImage" alt={props.name} src={props.src} /></div>
                <div className="productName">{props.name}<br/>({props.price} руб.)</div>
            </a>
        </div>
    );
};