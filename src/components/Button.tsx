import '../css/style.css'

interface TypeProps {
    caption: string,
    onClick: React.MouseEventHandler<HTMLInputElement>,
}

export default function Button(props: TypeProps) {
    return(
        <input type="button" value={props.caption} onClick={props.onClick}></input>
    );
};