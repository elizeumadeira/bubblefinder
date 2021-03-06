import React from 'react';
import { Link } from "react-router-dom";
import MainLogo from '../../component/main-logo/index';

export default (props) => {
    return (
        <div className="option-level-modal">
            <MainLogo />
            <ul>
                <li>
                    <Link to="#" onClick={props.toggle_option_modal}>Resume</Link>
                </li>
                <li>
                    <Link to="#" onClick={() => { props.restart(); props.toggle_option_modal(); }}>Restart Level</Link>
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