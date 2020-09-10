import React from 'react';
import { Link } from "react-router-dom";
import MainLogo from '../../component/main-logo/index';

export default (props) => {
    return (
        <div className="fail-level-modal">
            <MainLogo />
            <div className="message">
                You Failed! Go ahead and trye to beat this level again! I'm sure you are capable of doing this!
            </div>
            <ul>
                <li>
                    <Link to="#" onClick={() => { props.restart(); props.toggle_fail_modal(); }}>Restart Level</Link>
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