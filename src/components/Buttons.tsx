import React from 'react';
import obj from './Buttons.module.css';


type ButtonsPropsType = {
    children: string
    onClick: () => void
    flag: boolean
    class:string
}

function Buttons(props: ButtonsPropsType) {
    return (
        <>
            <button disabled={props.flag}
                    onClick={() => props.onClick && props.onClick()}
                    className={props.class}>
                {props.children}
            </button>
        </>
    );
}

export default Buttons;