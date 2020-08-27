import React from 'react';
import { Link } from "react-router-dom";
import { levels } from '../../configs';
import './index.scss';
import MainLogo from '../../component/main-logo/index';

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
            <MainLogo />
            <ul>
                <li><Link to={`/level/${get_last_level()}`}>Start</Link></li>
                <li><Link to='/level-selection'>Level Selection</Link></li>
                <li><Link to='/options'>Options</Link></li>
            </ul>
        </div>
    )
}