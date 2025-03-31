import { useState } from 'react';
import '../css/style.css'

interface TypeProps {
    caption: string,
    onClick: any,
    inStock: boolean,
}

export default function ToggleButton(props: TypeProps) {
    const [pressed, setPressed] = useState<boolean>(false);

    const handleClick = () => {
        switch(pressed) {
            case true:
                setPressed(false);
                break;
            case false:
                setPressed(true);
                break;
        };
    };

    return(
        <input disabled={!props.inStock} className={(props.inStock ? '' : 'disabled') + (pressed ? 'pressed' : '')} type="button" value={props.caption} onClick={handleClick}></input>
    );
};