import React from 'react';
import './index.css';
import Cell from '../cell';

function Coluna(linhas) {
    console.log(linhas);

    return (<div>linha: {linhas.length}</div>);
}

function Board({ board_config, color_number, color_list }) {
    var line_key = 0;
    var column_key = 0;
    var markey_cell1 = null;
    var markey_cell2 = null;

    // [1, 1],
    // [1, 1],
    // [1, 1],
    // [1, 1],

    function get_random_colors(colors) {
        var color_number = colors.length;
        var result = [];

        for (let cont = color_number - 1; cont >= 0; cont--) {
            let color = colors.splice(Math.floor(Math.random() * cont), 1);
            result = result.concat(color);
        }

        return result;
    }

    let random_colors = get_random_colors(color_list.concat(color_list))

    var stylecontainer = {
        gridTemplateColumns: `repeat(${board_config[0].length}, 40px [col-start])`,
        gridTemplateRows: `repeat(${board_config.length}, 40px [col-start])`
    };

    const board_matrix = board_config.map(
        (linhas) => {
            line_key++;
            column_key = 0;
            return linhas.map((celula) => {
                column_key++;
                return <Cell
                    disabled={celula == 0}
                    key={`${line_key}_${column_key}`}
                    color={random_colors.splice(0, celula)}
                    onClick={() => {
                        if (markey_cell1 == null) {
                            markey_cell1 = `${line_key}_${column_key}`;
                        }
                        else {
                            markey_cell2 = `${line_key}_${column_key}`;
                            console.log(markey_cell1, markey_cell1);
                        }
                    }}
                />
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