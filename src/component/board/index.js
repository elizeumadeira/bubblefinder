import React from 'react';
import './index.css';

function Coluna(linhas) {
    console.log(linhas);

    return (<div>linha: {linhas.length}</div>);
}

function Board({ board_config }) {
    var line_key = 0;
    var column_key = 0;

    // [1, 1],
    // [1, 1],
    // [1, 1],
    // [1, 1],

    var stylecontainer = {
        gridTemplateColumns: `repeat(${board_config[0].length}, 20px [col-start])`,
        gridTemplateRows: `repeat(${board_config.length}, 20px [col-start])`
    };

    const board_matrix = board_config.map(
        (linhas) => {
            return linhas.map((celula) => {
                var cell = (<div key={`${line_key}_${column_key}`} className={`cell ${celula == 0 && 'cell_disabled'}`}>1</div>)
                line_key++;
                column_key++;
                return cell;
            }
            )
        }
    );

    return (
        <>
            <div>board</div>
            <div className='container' style={stylecontainer}>
                {
                    board_matrix
                }
            </div>
        </>
    );
}


export default Board;