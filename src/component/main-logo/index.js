import React from 'react';
import logo from '../../themes/bubble-finder/bubble-finder-logo.png';
import './index.scss';

export default () =>
    <div className="bubble-finder-header-logo">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="name">
            <div>
                <span>B</span><span>u</span><span>b</span><span>b</span><span>l</span><span>e</span>
            </div>
            <div>
                <span>F</span><span>i</span><span>n</span><span>d</span><span>e</span><span>r</span>
            </div>
        </div>
    </div>