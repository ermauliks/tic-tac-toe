import React from 'react';


function Cross(props) {
    return (
        <svg aria-label="X" role="img" viewBox="0 0 128 128" className={props.className}>
            <path className="Switch-x" d="M16,16L112,112"></path>
            <path className="Switch-x" d="M112,16L16,112"></path>
        </svg>
    )
}

export default Cross;