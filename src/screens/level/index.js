import React from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default, colors } from '../../configs'
import Board from '../../component/board';


function Level() {
    const { level } = useParams();
    const level_config = level_config_default[level];

// console.log(level_config);
    return (
        <div className="App">
            Level: {level}<br />
            Score: {level_config.score}

            <Board 
                board_config={level_config.board} 
                color_number={level_config.color_number} 
                color_list={colors.slice(0, level_config.color_number / 2)}
            />
        </div>
    );
}

export default Level;
