import '../css/style.css'

interface TypeProps {
    caption: string,
    pressed: boolean,
    inStock: boolean,
    onClick: React.MouseEventHandler<HTMLInputElement>,
}

export default function ToggleButton(props: TypeProps) {
    return(
        <input disabled={!props.inStock} className={(props.inStock ? '' : 'disabled') + (props.pressed ? 'pressed' : '')} type="button" value={props.caption} onClick={props.onClick}></input>
    );
};