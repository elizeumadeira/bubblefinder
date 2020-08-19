import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <ul>
            <li>
                <a href="#" onClick={props.toggle_option_modal}>Resume</a>
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
    );
}