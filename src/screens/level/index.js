import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default, colors } from '../../configs'
import Board from '../../component/board';


function Level() {
    const { level } = useParams();
    const level_config = level_config_default[level];
    const [score, setScore] = useState(0);
    const [tries, setTries] = useState(level_config.tries);

    // console.log(level_config);
    return (
        <div className="App">
            Level: {level}<br />
            Tries: {tries}<br />
            Best Score: {level_config.score}<br />
            Score: {score}

            <div>
                <Board
                    board_config={level_config.board}
                    color_number={level_config.color_number}
                    color_list={colors.slice(0, level_config.color_number / 2)}
                    score={score}
                    set_score={setScore}
                    tries={tries}
                    set_tries={setTries}
                />
            </div>
        </div>
    );
}

export default Level;
