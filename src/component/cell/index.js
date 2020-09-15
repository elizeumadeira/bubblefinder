import React, { useState } from 'react';

export default (props) => {
    const [bubble_color] = useState(props.color);

    var cell = <div className={`cell ${props.disabled ? 'cell_disabled' : ''} ${props.clicked ? 'cell_clicked' : ''}`} onClick={props.onClick}>
        <div className={`bubble ${props.cell_code}`}></div>
    </div>

    return cell;
}

