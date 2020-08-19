import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './index.scss';

export default (props) => {
    return (
        <>
            <header className="App-header">
                <ul>
                    <li>
                        <Link to="/">Main Menu</Link>
                    </li>
                    <li>
                        <Link to="/level-selection">Level selection</Link>
                    </li>
                    <li>
                        <Link to="/options">Options</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}