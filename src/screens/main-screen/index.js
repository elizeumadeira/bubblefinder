import React from 'react';
import { Link } from "react-router-dom";
import { levels } from '../../configs';
import './index.scss';
import logo from '../../themes/bubble-finder/bubble-finder-logo.png';

export default (props) => {
    function get_last_level() {
        return Object.entries(levels()).reduce((accumulator, current_value) => {
            let [key, entry] = current_value;
            if (entry.unlock) {
                accumulator = key;
            }
            console.log(accumulator);
            return accumulator;
        });
    }

    return (
        <div className="container-main-menu">
            <div className="bubble-finder-header-logo">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="name">
                    <span>B</span><span>u</span><span>b</span><span>b</span><span>l</span><span>e</span>&nbsp;
                    <span>F</span><span>i</span><span>n</span><span>d</span><span>e</span><span>r</span>
                </div>
            </div>
            <ul>
                <li><Link to={`/level/${get_last_level()}`}>Start</Link></li>
                <li><Link to='/level-selection'>Level Selection</Link></li>
                <li><Link to='/options'>Options</Link></li>
            </ul>
        </div>
    )
}