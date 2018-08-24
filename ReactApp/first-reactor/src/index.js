import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// functional component style
function Square(props) {
  return (
    <button className="square" onClick=
    {props.onClick}>
      {props.value}
    </button>
  );
}



//Class Style
// class Square extends React.Component {  
//   render() {
//     return (

//       // ES6 Syntax
//       <button className="square" 
//        onClick={() => this.props.onClick()}> 
//       {/* ES5 Syntax */}
//       {/* // <button className="square" onClick={function() { alert('click'); }}> */}
//        {this.props.value}
//       </button>
//     );
//   }
// }

class Board extends React.Component {
  //like js, a constructor for subclass uses super
  //The constructors in React keep track of state
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) { //open constructor
    super(props);
    this.state = { //open state
      history: [
        { //open history
        squares: Array(9).fill(null)
      }
    ],//close history
      stepNumber: 0,
      xIsNext: true
    }; //close state
  } //close constructor.

  handleClick(i) { //open handleClick
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();  
    if (calculateWinner(squares) || squares[i]) { //open if statement
      return;
    } //close if statement
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ //open setState
      history: history.concat([
        {
        squares: squares
      }
    ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    }); //close set state
  }//close handleClick

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });



    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
        <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) { //open function calculateWinner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) { //open for loop
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {//open if statement
      return squares[a];
    } //end if statement
  } //end for loop
  return null;
} //end function calculateWinner