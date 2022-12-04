import React from 'react';

const calculateCharColor = (char: string, index: number, userInput: string) => {
    const trimmedInput = userInput.trim().toLowerCase();
    if (!trimmedInput[index]) {
        return 'inactive';
    }
    return char.toLowerCase() === trimmedInput[index] ? 'correct' : 'incorrect';
};

const CurrentWord = ({ word, userInput }: {word: string, userInput: string}) => (
        <span className="word current">
            {word.split('').map((char, index) => (
                <span 
                    key={`${char}-${index}`} 
                    className={`char ${calculateCharColor(char, index, userInput)}`}
                >
                    {char}
                </span>
                ))
            }
        </span>
    );

export default CurrentWord;