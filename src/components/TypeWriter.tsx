import React, { useEffect, useState, useMemo, useContext } from 'react';
import { getWordBank } from '../utils/word-bank';
import { TypingContext } from '../utils/TypingContext';
import CurrentWord from './CurrentWord';
import './TypeWriter.scss';

const isWordCorrect = (userInput: string, word: string) => userInput.toLowerCase() === word.toLowerCase();

const TypeWriter = () => {
    const words = useMemo(() => getWordBank(), []);
    const [userInput, setUserInput] = useState<string>('');
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [correctWords, setCorrectWords] = useState<string[]>([]);
    const [incorrectWords, setIncorrectWords] = useState<string[]>([]);
    const {isStartedTyping, setIsStartedTyping, setStats} = useContext(TypingContext);
    
    const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isStartedTyping) {
            setIsStartedTyping(true);
        }
        if (evt.key === ' ') {
            const currentWord = words[currentWordIndex];
            if (isWordCorrect(userInput.trim(), currentWord)) {
                setCorrectWords(prev => [...prev, currentWord]);
            } else {
                setIncorrectWords(prev => [...prev, currentWord]);
            }
            setUserInput('');
            setCurrentWordIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        console.log('useEffect on isTimerStopped');
        setStats({correct: correctWords, incorrect: incorrectWords});
    }, [correctWords, incorrectWords, setStats]);

    return (
        <section className="type-writer">
            <div className="words-container">
				{words.map((word, idx) => (
                    <span 
                        className={`
                        word 
                        ${correctWords.includes(word) ? 'correct': ''}
                        ${incorrectWords.includes(word) ? 'incorrect' : ''}
                        `}
                        key={`${word}-${idx}`}
                    >
                        {idx === currentWordIndex ? <CurrentWord word={word} userInput={userInput} /> : word}
                    </span>
                ))}
			</div>
			<input
                className="user-input"
                type="text" 
                value={userInput} 
                onChange={(evt) => setUserInput(evt.target.value)} 
                onKeyDown={onKeyDown} 
            />
        </section>
    );
};

export default TypeWriter;