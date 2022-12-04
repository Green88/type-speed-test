import React, { useState } from 'react';
import TimerPanel from './TimerPanel';
import TypeWriter from './TypeWriter';
import Results from './Results';
import { TypingContext } from '../utils/TypingContext';
import { Stats } from '../types';
import './Main.scss';


const Main = () => {
	const [showTypeWriter, setShowTypeWriter] = useState<boolean>(true);
	const [isStartedTyping, setIsStartedTyping] = useState<boolean>(false);
	const [stats, setStats] = useState<Stats>({} as Stats);
	
	const onTimerStop = () => {
		setShowTypeWriter(false);
		setIsStartedTyping(false);
	}

	const onRestart = () => {
		setShowTypeWriter(true);
		setStats({} as Stats);
	}

    return (
		<TypingContext.Provider value={{ 
				isStartedTyping, 
				setIsStartedTyping, 
				onRestart, 
				onTimerStop, 
				stats, 
				setStats,
			}}>
			<section className="main">
				<TimerPanel />
				{showTypeWriter ? <TypeWriter /> : <Results />}
			</section>
		</TypingContext.Provider>
	);
};

export default Main;