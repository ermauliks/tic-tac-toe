import React from 'react';

import Cross from './Cross';
import Round from './Round';
import ScoreBoard from './ScoreBoard';
import Banner from '../Banner';

import './Board.scss';

import {getWinner, getRandomPos} from '../../utils/lib';


class Board extends React.Component {
    constructor(props) {
        super(props);

        let { size } = props;

        this.state = {
            board: new Array(size).fill().map((o, i) => new Array(size).fill()),
            playerA: 'x',
            playerB: 'o',
            turn: 'playerA',
            winner: null,
            showBanner: false,
            totalWins: { x: 0, o: 0 }
        };

        this.playerATurn = this.playerATurn.bind(this);
        this.restart = this.restart.bind(this);
    }

    toggleTurn() {
        this.setState({ turn: (this.state.turn === 'playerA' ? 'playerB' : 'playerA') });
    }

    playerATurn(e) {
        let { i, j } = e.currentTarget.parentElement.dataset;
        let isOver = this.playTurn(i, j);
        if (!isOver) this.playerBTurn();
    }

    playerBTurn() {
        let { board } = this.state;

        setTimeout(() => {
            let [i, j] = getRandomPos(board);
            if (i === null && j === null) {
                this.endGame(false);
            } else {
                this.playTurn(i, j);
            }
        }, 500);
    }

    endGame(result) {
        this.setState({
            showBanner: true,
            turn: null
        });
    }

    playTurn(i, j) {
        let { board, turn } = this.state;
        board[i][j] = this.state[turn];
        this.setState({ board });

        let winner = getWinner(board);
        if (winner === null) {
            this.toggleTurn();
            return false;
        } else {
            let { totalWins } = this.state;
            totalWins[winner] = totalWins[winner] + 1;
            this.setState({ totalWins, winner }, () => { this.endGame(true) });
            return true;
        }

    }

    getCell(v, i, j) {
        return (
            <td key={`${i}-${j}`} data-i={i} data-j={j}>
                {
                    v === 'x' ?
                        <Cross className="Switch32" /> :
                        (v === 'o' ? <Round  className="Switch32" /> :
                            <span className="Board-Cell" onClick={this.playerATurn}/>)
                }
            </td>
        )
    }

    restart() {
        this.setState({
            board: new Array(this.props.size).fill().map((o, i) => new Array(this.props.size).fill()),
            turn: 'playerA',
            winner: null,
            showBanner: false
        })
    }

    getRow(a, i) {
        return a.map((v, j) => this.getCell(v, i, j))
    }

    render() {
        return (
            <div>
                <ScoreBoard totalWins={this.state.totalWins} turn={this.state.turn}/>
                {this.state.showBanner && <Banner restart={this.restart} winner={this.state.winner}/>}
                <table className="Board" cellSpacing="0" cellPadding="0">
                    <tbody>
                        {this.state.board.map((v, i) => <tr key={i}>{this.getRow(v, i)}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;