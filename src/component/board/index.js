import React, { useState, useEffect } from 'react';
import './index.css';
import Cell from '../cell';

function Coluna(linhas) {
    console.log(linhas);

    return (<div>linha: {linhas.length}</div>);
}

function Board({ board_config, color_number, color_list }) {
    let line_key = 0;
    let column_key = 0;
    const [markey_cell1, setCell1] = useState(null);
    const [markey_cell2, setCell2] = useState(null);
    const [board_matrix, setBoardMatrix] = useState({});

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

    const board_matrix_component = board_config.map(
        (linhas) => {
            line_key++;
            column_key = 0;
            return linhas.map((celula) => {
                column_key++;
                let key = `${line_key}_${column_key}`;
                var b = {};
                b[key] = null;
                b[key] = {
                    disabled: celula == 0,
                    key: key,
                    color: celula == 0 ? null : random_colors.splice(0, celula)[0],
                    clicked: false
                };

                return b;
            }
            ).flat()
        }
    ).flat().reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));

    useEffect(() => {
        if (JSON.stringify(board_matrix) == '{}') {
            console.log('renderiza board');
            setBoardMatrix(board_matrix_component);
        }

        if (markey_cell1 != null & markey_cell2 != null) {

            if (markey_cell1 == markey_cell2)
                return;

            console.log('compara', markey_cell1, markey_cell2);

            setCell1(null);
            setCell2(null);
            return;
        }
    }, [markey_cell2, markey_cell1, board_matrix]);

    function actionClick(key) {
        if (markey_cell1 == null) {
            setCell1(key);
        } else {
            if (markey_cell1 != key) {
                setCell2(key);
            }
        }

        var b = {};
        b[key] = {clicked: true}

        setBoardMatrix({...board_matrix, ...b});
    }
    return (
        <>
            <div>board</div>
            <div className='container' style={stylecontainer}>
                {
                    Object.entries(board_matrix).map(([key, object]) =>
                        <Cell
                            disabled={object.disabled}
                            key={key}
                            color={object.color}
                            clicked={object.clicked}
                            onClick={() => actionClick(key)}
                        />
                    )
                }
            </div>
        </>
    );
}


export default Board;