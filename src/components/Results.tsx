import React, {useContext} from 'react';
import { TypingContext } from '../utils/TypingContext';
import './Results.scss';

const Results = () => {
    const { stats } = useContext(TypingContext);
    const { correct = [], incorrect = [] } = stats;
    return (
        <section className="results">
            <h3>YOUR RESULTS</h3>
            <div className="numbers">
                <h4>{`Correct words: ${correct.length}`}</h4>
                <h4>{`Incorrect words: ${incorrect.length}`}</h4>
                <h4>{`Words per minute: ${correct.length + incorrect.length}`}</h4>
            </div>
        </section>
    );
}

export default Results;