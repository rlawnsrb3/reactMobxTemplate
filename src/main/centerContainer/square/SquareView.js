import React from 'react';

class SquareView extends React.Component {
  render() {
    const {
      handleOnClickSquare,
      content,
      check,
      rowIndex,
      colIndex,
    } = this.props;
    return (
      <div
        style={{
          backgroundColor: `${check ? '#aaa' : 'white'}`,
          boxShadow: `${check ? 'inset 0px 0px 10px #000' : null}`,
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: '0.2s ease-in-out',
          cursor: 'pointer',
        }}
        onClick={() => handleOnClickSquare(rowIndex, colIndex)}
        check={check}
      >
        {content}
      </div>
    );
  }
}

export default SquareView;
