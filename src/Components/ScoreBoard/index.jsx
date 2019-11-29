import React from 'react';

import Cross from '../Board/Cross';
import Round from '../Board/Round';

import './ScoreBoard.scss';

class ScoreBoard extends React.Component {
    render() {
    	let {totalWins} = this.props;
        return (
            <div className="ScoreBoard">
            	<span className="ScoreBoard_Title">TOTAL WINS</span>
            	<Cross className="Switch16 ScoreBoard_Icon" />
            	<span className="ScoreBoard_Count">{totalWins.x}</span>
            	<Round className="Switch16 ScoreBoard_Icon" />
            	<span className="ScoreBoard_Count">{totalWins.o}</span> 
        	</div>
        );
    }
}

export default ScoreBoard;