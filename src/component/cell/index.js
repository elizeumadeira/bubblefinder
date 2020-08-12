import React, { useState } from 'react';

export default (props) => {
    const [bubble_color] = useState(props.color);

    var cell = <div  className={`cell ${props.disabled && 'cell_disabled'}`} onClick={props.onClick}>
        <div className='bubble' style={{ backgroundColor: bubble_color }}></div>
    </div>

    return cell;
}

