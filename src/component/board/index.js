import React, { useState, useEffect } from 'react';
import './index.scss';
import Cell from '../cell';
import { useHistory } from 'react-router-dom'

function Board({ allow_entry, board_config, score, set_score, color_number, tries, set_tries, set_next_level, set_fail }) {
    let history = useHistory()
    if (!allow_entry) {
        history.push('/level-selection');
    }

    let line_key = 0;
    let column_key = 0;
    const [markey_cell1, setCell1] = useState(null);
    const [markey_cell2, setCell2] = useState(null);
    const [board_matrix, setBoardMatrix] = useState({});
    const [rotate, setRotate] = useState(0);
    const [cell_number, setCellNumber] = useState(color_number);
    const [clickable, setClickable] = useState(true);

    function get_random_colors(color_number) {
        var result = [];
        var color_list = Array.from(Array(color_number / 2).keys());
        color_list = color_list.concat(color_list);

        for (let cont = color_list.length; cont >= 0; cont--) {
            let color = color_list.splice(Math.floor(Math.random() * cont), 1);
            result = result.concat(color);
        }
        return result;
    }

    let random_colors = get_random_colors(color_number);

    var stylecontainer = {
        transform: `rotate(${rotate}deg)`
    };

    const board_matrix_component = board_config.map(
        (linhas) => {
            line_key++;
            column_key = 0;
            return linhas.map((celula) => {
                let cell_code = random_colors.splice(0, celula)[0];
                column_key++;
                let key = `${line_key}_${column_key}`;
                var b = {};
                b[key] = null;
                b[key] = {
                    disabled: celula == 0,
                    key: key,
                    cell_code: `cell-number-${cell_code}`,
                    clicked: false
                };

                return b;
            }
            ).flat()
        }
    ).flat().reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));

    useEffect(() => {
        if (markey_cell1 == null || markey_cell2 == null)
            return;

        if (markey_cell1 == markey_cell2)
            return;

        setTimeout(compara, 500);
    }, [markey_cell2, markey_cell1]);


    useEffect(() => {
        setBoardMatrix(board_matrix_component);
    }, []);

    useEffect(() => {
        if (cell_number == 0) {
            finaliza_win();
            return;
        }

        if (tries == 0) {
            finaliza_fail();
            return;
        }
    }, [cell_number, tries]);

    function compara() {
        const board = { ...board_matrix };
        let rotate_board = false;

        if (board[markey_cell1].cell_code == board[markey_cell2].cell_code) {
            board[markey_cell1].disabled = true;
            board[markey_cell2].disabled = true;
            set_score(score + 100);
            setCellNumber(cell_number - 2);
        } else {
            board[markey_cell1].clicked = false;
            board[markey_cell2].clicked = false;
            set_tries(tries - 1);
            if (tries > 1) {
                rotate_board = true;
            }
        }

        setBoardMatrix(board);
        setCell1(null);
        setCell2(null);

        if (rotate_board) {
            setRotate(rotate + 90);
        }
    }

    function finaliza_win() {
        set_score(score + (tries * 80));
        set_next_level(true);
    };

    function finaliza_fail() {
        set_fail();
        setClickable(false);
    };

    function actionClick(key) {
        if (!clickable)
            return;

        if (markey_cell1 == null) {
            setCell1(key);
        } else {
            if (markey_cell1 != key) {
                setCell2(key);
            }
        }

        var b = { ...board_matrix };
        b[key].clicked = true;

        setBoardMatrix(board_matrix);
    }

    return (
        <div className={`container ${!clickable ? 'game_over' : ''}`} style={stylecontainer}>
            {
                Object.entries(board_matrix).map(([key, object]) =>
                    <Cell
                        disabled={object.disabled}
                        key={key}
                        clicked={object.clicked}
                        cell_code={object.cell_code}
                        contra_rotate={rotate}
                        onClick={() => actionClick(key)}
                    />
                )
            }
        </div>
    );
}


export default Board;