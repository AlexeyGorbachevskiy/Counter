import React from 'react';
import obj from './Screen.module.css';


type ScreenPropsType = {
    value: number
    screenMessage: string
    maxValue:number
}

function Screen(props: ScreenPropsType) {

    return (
        <div className={obj.screen}>
            {
                props.screenMessage !== ''
                ?
                <span className={obj.screenMessage} style={props.screenMessage === 'Incorrect value!' ? {color: "red"} : {}}>{props.screenMessage}</span>
                :
                <span className={obj.main_screen_value} style={props.value === props.maxValue ? {color: "red"} : {}}>
                {props.value}
            </span>
            }
        </div>
    );
}

export default Screen;