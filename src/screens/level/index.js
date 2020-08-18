import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default, colors, setLocalStorage } from '../../configs'
import Board from '../../component/board';


function Level() {
    const { level } = useParams();
    const level_config = level_config_default()[level];
    const [score, setScore] = useState(0);
    const [tries, setTries] = useState(level_config.tries);
    const [nv, setNextLevel] = useState(false);

    useEffect(() => {
        var lv = {};
        lv[level] = {};
        lv[level] = { score: (score > level_config.score ? score : level_config.score) };
        setLocalStorage(lv);
    }, [score]);

    useEffect(() => {
        console.log(nv);
        if (nv) {
            var lv = {};
            lv[parseInt(level) + 1] = {};
            lv[parseInt(level) + 1] = { unlock: true };
            console.log(lv);
            setLocalStorage(lv);
        }
    }, [nv]);

    return (
        <div className="App">
            Level: {level}<br />
            Tries: {tries}<br />
            Best Score: {level_config.score}<br />
            Score: {score}

            <div>
                <Board
                    allow_entry={level_config.unlock}
                    board_config={level_config.board}
                    color_number={level_config.color_number}
                    color_list={colors.slice(0, level_config.color_number / 2)}
                    score={score}
                    set_score={setScore}
                    tries={tries}
                    set_tries={setTries}
                    set_next_level={setNextLevel}
                />
            </div>
        </div>
    );
}

export default Level;
