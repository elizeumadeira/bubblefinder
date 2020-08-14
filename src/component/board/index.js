import React, { useState, useEffect } from 'react';
import './index.css';
import Cell from '../cell';

function Coluna(linhas) {
    console.log(linhas);

    return (<div>linha: {linhas.length}</div>);
}

function Board({ board_config, score, set_score, color_list, tries, set_tries }) {
    let line_key = 0;
    let column_key = 0;
    const [markey_cell1, setCell1] = useState(null);
    const [markey_cell2, setCell2] = useState(null);
    const [board_matrix, setBoardMatrix] = useState({});
    const [rotate, setRotate] = useState(0);
    const [cell_number, setCellNumber] = useState(board_config[0].length * board_config.length);

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
        gridTemplateRows: `repeat(${board_config.length}, 40px [col-start])`,
        transform: `rotate(${rotate}deg)`
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
        console.log(markey_cell1, markey_cell2, markey_cell1 == null || markey_cell2 == null);
        if (markey_cell1 == null || markey_cell2 == null)
            return;

        if (markey_cell1 == markey_cell2)
            return;

        if(cell_number==0){
            finaliza_win();
            return;
        }

        if(tries==0){
            finaliza_fail();
            return;
        }

        setTimeout(compara, 500);
    }, [markey_cell2, markey_cell1, rotate]);


    useEffect(() => {
        setBoardMatrix(board_matrix_component);
    }, []);

    function compara() {
        const board = { ...board_matrix };
        let rotate_board = false;

        if (board[markey_cell1].color == board[markey_cell2].color) {
            board[markey_cell1].disabled = true;
            board[markey_cell2].disabled = true;
            set_score(score + 100);
            setCellNumber(cell_number-2);
        } else {
            board[markey_cell1].clicked = false;
            board[markey_cell2].clicked = false;
            rotate_board = true;
            set_tries(tries-1);
        }

        setBoardMatrix(board);
        setCell1(null);
        setCell2(null);

        if (rotate_board) {
            setRotate(rotate + 90);
        }
    }

    function finaliza_win(){
        alert('finalizou');
        console.log('finaliza_win');
    };

    function finaliza_fail(){
        alert('você falhou');
        console.log('finaliza_fail');
    };

    function actionClick(key) {
        if (markey_cell1 == null) {
            setCell1(key);
        } else {
            if (markey_cell1 != key) {
                setCell2(key);
            }
        }

        var b = { ...board_matrix };
        b[key].clicked = true;
        // console.log(JSON.stringify(board_matrix), JSON.stringify(b));

        setBoardMatrix(board_matrix);
    }
    return (
        <>
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