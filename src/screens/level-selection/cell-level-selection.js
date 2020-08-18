import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return <Link to={`/level/${props.stage_number}`} className={`${!props.disabled ? 'cell_disabled' : ''}`} onClick={(event) => !props.disabled && event.preventDefault()}>#{props.stage_number}</Link>
}