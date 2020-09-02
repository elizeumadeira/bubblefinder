import React from 'react';
import { Link } from "react-router-dom";
import { levels } from '../../configs';
import './index.scss';
import MainLogo from '../../component/main-logo/index';

export default (props) => {
    function get_last_level() {
        var level = Object.entries(levels());
        let level_start = 1;

        for (const item of level) {
            let [key, entry] = item;
            if (entry.unlock) {
                level_start = key;
            } else {
                break;
            }
        }
        return level_start;
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