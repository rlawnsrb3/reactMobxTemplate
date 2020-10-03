import React from 'react';
import { observer, inject } from 'mobx-react';
import SquareView from '../square/SquareView';

const emoji = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🦝',
  '🐻',
  ' 🐼',
  '🦘',
  '🦡',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐽',
  '🐸',
  '🐵',
  '🙈',
  '🙉',
  '🙊',
  '🐒',
  '🐔',
  '🐧',
  '🐦',
  '🐤',
  '🐣',
  '🐥',
  '🦆',
  '🦢',
  '🦅',
  '🦉',
  '🦚',
  '🦜',
  '🦇',
  '🐺',
  '🐗',
  '🐴',
  '🦄',
  '🐝',
  '🐛',
  '🦋',
  '🐌',
  '🐚',
  '🐞',
  '🐜',
  '🦗',
  '🦂',
  '🦟',
  '🦠',
  '🐢',
  '🐍',
  '🦎',
  '🦖',
  '🦕',
  '🐙',
  '🦑',
  '🦐',
  '🦀',
  '🐡',
  '🐠',
  '🐟',
  '🐬',
  '🐳',
  '🐋',
  '🦈',
  '🐊',
  '🐅',
  '🐆',
  '🦓',
  '🦍',
  '🐘',
  '🦏',
  '🦛',
  '🐪',
  '🐫',
  '🦙',
  '🦒',
  '🐃',
  '🐂',
  '🐄',
  '🐎',
  '🐖',
  '🐏',
  '🐑',
  '🐐',
  '🦌',
  '🐕',
  '🐩',
  '🐈',
  '🐓',
  '🦃',
  '🐇',
  '🐁',
  '🐀',
  '🦔',
  '🐾',
  '🐉',
  '🐲',
  '🌵',
  '🎄',
  '🌲',
  '🌳',
  '🌴',
  '🌱',
  '🌿',
  '🍀',
  '🎍',
  '🎋',
  '🍃',
  '🍂',
  '🍁',
  '🍄',
  '🌾',
  '💐',
  '🌷',
  '🌹',
  '🥀',
  '🌺',
  '🌸',
  '🌼',
  '🌻',
  '🌞',
  '🌝',
  '🌛',
  '🌜',
  '🌚',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌙',
  '🌎',
  '💫',
  '💥',
  '🔥',
  '🌈',
  '☁️',
  '⛄️',
  '💧',
  '💦',
  '🌊',
  '🔩',
  '⚙️',
  '🔫',
  '💣',
  '🔪',
  '⚔️',
  '🚬',
];

@inject('bingoStore')
@observer
class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    let matrix = [];
    const { size } = this.props.bingoStore;
    //square 초기화
    for (let i = 0; i < size; i++) {
      matrix[i] = new Array(size).fill({ content: '', check: false });
    }
    const shuffledEmoji = this.shuffle(emoji);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        matrix[i].splice(j, 1, {
          content: shuffledEmoji[i * size + j],
          check: false,
        });
      }
    }

    this.state = { matrix };
  }

  // shuffle = (emo) => {
  //   for (let i = emo.length - 1; i > 0; i--) {
  //     let j = (Math.floor(Math.random() * (i + 1))[(emo[i], emo[j])] = [
  //       emo[j],
  //       emo[i],
  //     ]);
  //   }
  //   return emo;
  // };

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  handleOnClickSquare = async (row, col) => {
    const prevMatrix = this.state.matrix;
    prevMatrix[row].splice(col, 1, {
      ...prevMatrix[row][col],
      check: !prevMatrix[row][col].check,
    });
    await this.setState({ matrix: prevMatrix });
  };

  checkBingo = () => {
    const { size } = this.props.bingoStore;
    const { matrix } = this.state;
    let totalBingo = 0;
    // row
    for (let i = 0; i < size; i++) {
      if (matrix[i].reduce((bingo, square) => bingo && square.check, true))
        totalBingo++;
    }
    // column
    for (let i = 0; i < size; i++) {
      let bingo = true;
      for (let j = 0; j < size; j++) {
        bingo = bingo && matrix[j][i].check;
      }
      if (bingo) totalBingo++;
    }
    // diagnal
    let diagnalBingoOne = true;
    let diagnalBingoTwo = true;
    for (let i = 0; i < size; i++) {
      diagnalBingoOne = diagnalBingoOne && matrix[i][size - i - 1].check;
      diagnalBingoTwo = diagnalBingoTwo && matrix[i][i].check;
    }
    if (diagnalBingoOne) totalBingo++;
    if (diagnalBingoTwo) totalBingo++;

    this.props.bingoStore.changeTotalBingo(totalBingo);
  };

  render() {
    const { size } = this.props.bingoStore;
    this.checkBingo();

    return (
      <div
        style={{
          border: '5px solid black',
          display: 'grid',
          gridTemplateColumns: `repeat(${size}, 5rem)`,
          gridTemplateRows: `repeat(${size}, 5rem)`,
          fontSize: '2.5rem',
        }}
      >
        {this.state.matrix.map((row, rowIndex) =>
          row.map((square, colIndex) => (
            <SquareView
              handleOnClickSquare={this.handleOnClickSquare}
              key={rowIndex * size + colIndex}
              content={square.content}
              check={square.check}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          )),
        )}
      </div>
    );
  }
}

export default BoardContainer;
