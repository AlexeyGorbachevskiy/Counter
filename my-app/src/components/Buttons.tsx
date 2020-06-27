import React from 'react';
import obj from './Buttons.module.css';


type ButtonsPropsType = {
    btnName: string
    value?: number
    onIncBtnClickHandler?: () => void
    onResBtnClickHandler?: () => void
    resBtnFlag?: boolean
    incBtnFlag?: boolean
    children: string
    setBtnFlag?: boolean
    onSetBtnClickHandler?: () => void
    clearBtn?: boolean
    onClearBtnClickHandler?: () => void
}

function Buttons(props: ButtonsPropsType) {
    return (
        <>
            {
                props.btnName === 'inc'
                &&
                <button disabled={props.incBtnFlag}
                        onClick={() => props.onIncBtnClickHandler && props.onIncBtnClickHandler()}
                        className={obj.inc}>
                    {props.children}
                </button>
            }

            {
                props.btnName === 'res'
                &&
                <button disabled={props.resBtnFlag}
                        onClick={() => props.onResBtnClickHandler && props.onResBtnClickHandler()}
                        className={obj.reset}>
                    {props.children}
                </button>
            }
            {
                props.btnName === 'set'
                &&
                <button className={obj.set}
                        disabled={props.setBtnFlag}
                        onClick={() => props.onSetBtnClickHandler && props.onSetBtnClickHandler()}
                >
                    {props.children}
                </button>
            }
            {
                props.btnName === 'clear'
                &&
                <button disabled={props.clearBtn}
                        onClick={() => props.onClearBtnClickHandler && props.onClearBtnClickHandler()}
                        className={obj.clear}
                >
                    {props.children}
                </button>

            }
        </>
    );
}

export default Buttons;