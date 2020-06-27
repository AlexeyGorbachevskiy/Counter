import React, {ChangeEvent, useState} from 'react';
import obj from './Screen.module.css';


type SetScreenType = {
    screenMessage: string
    setScreenMessage: (screenMessage: string) => void
    setIncBtnFlag: (flag: boolean) => void
    setSetBtnFlag: (flag: boolean) => void
    minValue: number
    setMinValue: (value: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setClearBtn: (flag: boolean) => void
    setResBtnFlag:(flag: boolean)=>void
}

function SetScreen(props: SetScreenType) {


    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if ((parseInt(e.currentTarget.value) >= 0) && (parseInt(e.currentTarget.value) < props.maxValue)) {
            props.setMinValue(parseInt(e.currentTarget.value));
            props.setScreenMessage('enter values and press \'set\' ');
            props.setIncBtnFlag(true);
            props.setSetBtnFlag(false);
            props.setClearBtn(false);


        } else {
            props.setMinValue(parseInt(e.currentTarget.value));
            props.setScreenMessage('Incorrect value!');
            props.setIncBtnFlag(true);
            props.setSetBtnFlag(true);
            props.setResBtnFlag(true);
        }
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if ((parseInt(e.currentTarget.value) > props.minValue) && (props.minValue >= 0)) {
            props.setMaxValue(parseInt(e.currentTarget.value));
            props.setScreenMessage('enter values and press \'set\' ');
            props.setIncBtnFlag(true);
            props.setSetBtnFlag(false);
            props.setClearBtn(false);

        } else {
            props.setMaxValue(parseInt(e.currentTarget.value));
            props.setScreenMessage('Incorrect value!');
            props.setIncBtnFlag(true);
            props.setSetBtnFlag(true);
            props.setResBtnFlag(true);
        }
    }

    return (
        <div className={obj.screen}>
            <div className={obj.extra_container}>
                <div className={obj.flex_container}>
                    <p>max value:</p>
                    <input value={props.maxValue}
                           onChange={onChangeMaxInputHandler}
                           className={obj.max_input}
                           style={
                               props.maxValue <= props.minValue
                                   ? {
                                       backgroundColor: "plum",
                                       border: '3px solid red',
                                   }
                                   :
                                   {}
                           }
                           type='number'/>
                </div>
                <div className={obj.flex_container}>
                    <p>start value:</p>
                    <input value={props.minValue}
                           onChange={onChangeStartInputHandler}
                           className={obj.min_input}
                           style={
                               props.minValue >= props.maxValue || props.minValue < 0
                                   ? {
                                       backgroundColor: "plum",
                                       border: '3px solid red',
                                   }
                                   :
                                   {}
                           }
                           type='number'/>
                </div>
            </div>
        </div>
    );
}

export default SetScreen;