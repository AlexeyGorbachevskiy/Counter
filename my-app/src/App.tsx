import React, {useState} from 'react';
import './App.css';
import Screen from './components/Screen';
import Buttons from "./components/Buttons";
import obj from "./components/Buttons.module.css";
import SetScreen from "./components/SetScreen";

function App() {
    let localStorageMinValue = localStorage.getItem('minValue');
    let localStorageMaxValue = localStorage.getItem('maxValue');
    let [value, setValue] = useState<number>(localStorageMinValue ? +localStorageMinValue : 0);
    let [minValue, setMinValue] = useState<number>(localStorageMinValue ? +localStorageMinValue : 0);
    let [maxValue, setMaxValue] = useState<number>(localStorageMaxValue ? +localStorageMaxValue : 5);
    let [screenMessage, setScreenMessage] = useState<string>('');
    const [incBtnFlag, setIncBtnFlag] = useState<boolean>(false);
    const [resBtnFlag, setResBtnFlag] = useState<boolean>(true);
    const [setBtnFlag, setSetBtnFlag] = useState<boolean>(true);
    const [clearBtn, setClearBtn] = useState<boolean>(false);

    const onIncBtnClickHandler = () => {
        if (value < maxValue) {
            if (value === maxValue - 1) {
                setIncBtnFlag(true);
            }
            setResBtnFlag(false);
            value++;
            setValue(value);
        }
    }
    const onResBtnClickHandler = () => {
        setIncBtnFlag(false);
        setResBtnFlag(true);
        setValue(minValue);
    }

    const onSetBtnClickHandler = () => {
        setSetBtnFlag(true);
        setIncBtnFlag(false);
        setScreenMessage('');
        setValue(minValue);
        localStorage.setItem('minValue', minValue.toString());
        localStorage.setItem('maxValue', maxValue.toString());
    }
    const onClearBtnClickHandler = () => {
        localStorage.clear();
        setClearBtn(true);
    }

    return (
        <div className='container'>
            <div className='setter_wrapper'>
                <SetScreen maxValue={maxValue}
                           setMaxValue={setMaxValue}
                           minValue={minValue}
                           setMinValue={setMinValue}
                           setIncBtnFlag={setIncBtnFlag}
                           setResBtnFlag={setResBtnFlag}
                           setSetBtnFlag={setSetBtnFlag}
                           screenMessage={screenMessage}
                           setScreenMessage={setScreenMessage}
                           setClearBtn={setClearBtn}
                />
                <div className='buttons'>
                    <Buttons btnName='clear'
                             clearBtn={clearBtn}
                             onClearBtnClickHandler={onClearBtnClickHandler}
                    >
                        Clear LS</Buttons>
                    <Buttons btnName='set'
                             setBtnFlag={setBtnFlag}
                             onSetBtnClickHandler={onSetBtnClickHandler}
                    >
                        Set</Buttons>
                </div>
            </div>
            <div className='counter_wrapper'>
                <Screen
                    maxValue={maxValue}
                    screenMessage={screenMessage}
                    value={value}/>
                <div className='buttons'>
                    <Buttons btnName='inc'
                             incBtnFlag={incBtnFlag}
                             onIncBtnClickHandler={onIncBtnClickHandler}
                    >Inc</Buttons>
                    <Buttons btnName='res'
                             resBtnFlag={resBtnFlag}
                             onResBtnClickHandler={onResBtnClickHandler}
                    >Reset</Buttons>
                </div>
            </div>
        </div>
    );
}

export default App;
