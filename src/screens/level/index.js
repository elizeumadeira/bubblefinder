import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default, colors, setLocalStorage } from '../../configs'
import Board from '../../component/board';
import OptionLevel from './options-level';
import WinLevel from './win-level';
import FailLevel from './fail-level';
import Modal from 'react-modal';
import ThemeContext from '../../configs/theme-context.js';

import './index.scss';

function Level() {
    const { level } = useParams();
    const level_config = level_config_default()[level];
    const [score, setScore] = useState(0);
    const [tries, setTries] = useState(level_config.tries);
    const [nv, setNextLevel] = useState(false);
    const [pu, setPU] = useState(0);
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [isFailedOpen, setIsFailedOpen] = useState(false);
    const [isWinOpen, setIsWinOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleIsOptionModal() {
        setIsOptionOpen(!isOptionOpen);
    }

    function toggleIsFailedModal() {
        setIsFailedOpen(!isFailedOpen);
    }

    function toggleIsWinModal() {
        setIsWinOpen(!isWinOpen);
    }

    useEffect(() => {
        var lv = { levels: {} };
        lv.levels[level] = {};
        lv.levels[level] = { score: (score > level_config.score ? score : level_config.score) };
        setLocalStorage(lv);
    }, [score]);

    useEffect(() => {
        if (nv) {
            var lv = { levels: {} };
            lv.levels[parseInt(level) + 1] = {};
            lv.levels[parseInt(level) + 1] = { unlock: true };
            setLocalStorage(lv);

            setIsWinOpen(true);
        }
    }, [nv]);

    function restartLevel() {
        setPU(pu + 1);

        setScore(0);
        setTries(level_config.tries);
        setIsOptionOpen(false);
        setIsWinOpen(false);
        setNextLevel(false);
    }

    return (
        <div className="container-level">
            <div className="sub-header-level">
                <div>Level: {level}</div>
                <div>Tries: {tries}</div>
                <div>Best Score: {level_config.score}</div>
                <div>Score: {score}</div>
            </div>

            <div key={pu}>
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
                    restart_level={restartLevel}
                    set_fail={toggleIsFailedModal}
                />
            </div>

            <div className="button-container">
                <button className="button" onClick={toggleIsOptionModal}>Options</button>
            </div>

            <Modal
                isOpen={isOptionOpen}
                onRequestClose={toggleIsOptionModal}
                className={`Modal ${theme}-modal`}
                overlayClassName={`ModalOverlay ${theme}-modal-overlay`}
                contentLabel="Dialog Option">
                <OptionLevel restart={restartLevel} toggle_option_modal={toggleIsOptionModal} />
            </Modal>

            <Modal
                isOpen={isWinOpen}
                onRequestClose={toggleIsWinModal}
                className={`Modal ${theme}-modal`}
                overlayClassName={`ModalOverlay ${theme}-modal-overlay`}
            >
                <WinLevel restart={restartLevel} is_last_level={level == 10} level_number={level} toggle_win_modal={toggleIsWinModal} />
            </Modal>

            <Modal
                isOpen={isFailedOpen}
                onRequestClose={toggleIsFailedModal}
                className={`Modal ${theme}-modal`}
                overlayClassName={`ModalOverlay ${theme}-modal-overlay`}
            >
                <FailLevel restart={restartLevel} toggle_fail_modal={toggleIsFailedModal} />
            </Modal>
        </div>
    );
}

export default Level;
