import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { levels as level_config_default, colors, setLocalStorage } from '../../configs'
import Board from '../../component/board';
import OptionLevel from './options-level';
import Modal from 'react-modal';

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
        var lv = {};
        lv[level] = {};
        lv[level] = { score: (score > level_config.score ? score : level_config.score) };
        setLocalStorage(lv);
    }, [score]);

    useEffect(() => {
        if (nv) {
            var lv = {};
            lv[parseInt(level) + 1] = {};
            lv[parseInt(level) + 1] = { unlock: true };
            setLocalStorage(lv);
        }
    }, [nv]);

    function restartLevel() {
        setPU(pu + 1);

        setScore(0);
        setTries(level_config.tries);
        setIsOptionOpen(false);
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
                />
            </div>

            <div className="button-container">
                <button className="button" onClick={toggleIsOptionModal}>Options</button>
            </div>

            <Modal 
                isOpen={isOptionOpen} 
                onRequestClose={toggleIsOptionModal} 
                className="Modal bubble-finder-modal"
                overlayClassName="ModalOverlay bubble-finder-modal-overlay" 
                contentLabel="Dialog Option">
                <OptionLevel restart={restartLevel} toggle_option_modal={toggleIsOptionModal} />
            </Modal>

            <Modal isOpen={isFailedOpen} onRequestClose={toggleIsFailedModal} contentLabel="My dialog">
                <div>My modal dialog.</div>
                <button onClick={toggleIsFailedModal}>Close modal</button>
            </Modal>

            <Modal isOpen={isWinOpen} onRequestClose={toggleIsWinModal} contentLabel="My dialog">
                <div>My modal dialog.</div>
                <button onClick={toggleIsWinModal}>Close modal</button>
            </Modal>
        </div>
    );
}

export default Level;
