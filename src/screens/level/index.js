import React from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default } from '../../configs'
import Board from '../../component/board';


function Level() {
    const { level } = useParams();
    const level_config = level_config_default[level];

console.log(level_config);
    return (
        <div className="App">
            Level: {level}<br />
            Score: {level_config.score}

            <Board board_config={level_config.board} />
        </div>
    );
}

export default Level;
