import React from 'react';

import './Banner.scss';

function Banner(props) {
    return (
    	<div className="Banner">
    		{props.winner === 'x' ? 
    			<span>You won! </span> : (props.winner === 'o' ? <span>Computer won!</span>: <span>It was draw :(</span>)}
    			<div><button onClick={props.restart}>Restart</button></div>
    	</div>
	);
}

export default Banner;