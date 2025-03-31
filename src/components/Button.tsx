import '../css/style.css'

interface TypeProps {
    caption: string,
    onClick: any,
}

export default function Button(props: TypeProps) {
    return(
        <input type="button" value={props.caption} onClick={props.onClick}></input>
    );
};