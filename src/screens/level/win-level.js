import React from 'react';
import { Link } from "react-router-dom";
import MainLogo from '../../component/main-logo/index';

export default (props) => {
    return (
        <div className="win-level-modal">
            <MainLogo />
            <div className="message">
                {
                    !props.level_number ?
                        `Congratulations! This level is complete! Go ahead and try to beat the next level` :
                        `Congratulations! You beat the Game!`
                }
            </div>
            <ul>
                {
                    !props.is_last_level && <li>
                        <Link to={`/level/${parseInt(props.level_number) + 1}`} onClick={() => {props.restart(); props.toggle_win_modal();}}>Next Level</Link>
                    </li>
                }
                <li>
                    <Link to="#" onClick={() => { props.restart(); props.toggle_win_modal(); }}>Restart Level</Link>
                </li>
                <li>
                    <Link to="/level-selection">Change Level</Link>
                </li>
                <li>
                    <Link to="/">Quit</Link>
                </li>
            </ul>
        </div>
    );
}