import React, { useContext } from 'react';
import ThemeContext from '../../configs/theme-context.js';

export default () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}-header-logo`}>
            <div className="logo">

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
    );
}