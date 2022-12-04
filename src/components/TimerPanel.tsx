import React, { useState, useContext, useEffect } from 'react';
import { TypingContext } from '../utils/TypingContext';
import './TimerPanel.scss';

const SECONDS = 60;

const TimerPanel = () => {
    const {isStartedTyping, onTimerStop, onRestart} = useContext(TypingContext);
    const [secondsLeft, setSecondsLeft] = useState<number>(SECONDS);
    const [isRestartBtnVisible, setIsRestartBtnVisible] = useState<boolean>(true);

    const onRestartClick = () => {
        onRestart();
        setSecondsLeft(SECONDS);
    };

    useEffect(() => {
        if (isStartedTyping && secondsLeft > 0) {
            let id = setInterval(() => {
                setSecondsLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(id);
        }
    }, [isStartedTyping, secondsLeft]);

    useEffect(() => {
        if (secondsLeft === 0) {
            setIsRestartBtnVisible(true);
            onTimerStop();
        }
    }, [secondsLeft, onTimerStop]);

    useEffect(() => {
        if (isStartedTyping) {
            setIsRestartBtnVisible(false);
        }
    }, [isStartedTyping]);

    return (
        <section className="timer">
            <span className="time-run">{secondsLeft > 9 ? `00:${secondsLeft}` : `00:0${secondsLeft}`}</span>
            {isRestartBtnVisible && <button className="start-btn" onClick={onRestartClick}>RESTART</button>}
        </section>
    );
}

export default TimerPanel;