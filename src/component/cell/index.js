import React from 'react';

export default (props) => {
    return (
        <div className={`cell ${props.disabled ? 'cell_disabled' : ''} ${props.clicked ? 'cell_clicked' : ''}`} onClick={props.onClick}>
            {props.clicked && <div style={{ transform: `rotate(${(props.contra_rotate * -1)}deg)` }} className={`bubble ${props.cell_code}`}></div>}
        </div>
    )
}