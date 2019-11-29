import React from 'react';

import Cross from './Cross';
import Round from './Round';

function ScoreBoard(props) {
    let { totalWins, turn } = props;
    return (
        <div className="ScoreBoard">
        	<div className="ScoreBoard_Score">
            	<span className="ScoreBoard_Title">TOTAL WINS</span>
            	<Cross className={turn === 'playerA'?'Switch16 ScoreBoard_Icon ScoreBoard_Icon--Turn' : 'Switch16 ScoreBoard_Icon'} />
            	<span className="ScoreBoard_Count">{totalWins.x}</span>
            	<Round className={turn === 'playerB'?'Switch16 ScoreBoard_Icon ScoreBoard_Icon--Turn' : 'Switch16 ScoreBoard_Icon'} />
            	<span className="ScoreBoard_Count">{totalWins.o}</span> 
        	</div>
        	<div className="ScoreBoard_Turn">{turn === 'playerA' ? 'Your Turn' : (turn === 'playerB' ? 'Computer Turn': '')}</div>
    	</div>
    );
}

export default ScoreBoard;