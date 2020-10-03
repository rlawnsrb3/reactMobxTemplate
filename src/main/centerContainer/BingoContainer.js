import React from 'react';
import { observer, inject } from 'mobx-react';
import BoardContainer from './board/BoardContainer';

@inject()
@observer
class BingoContainer extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <BoardContainer />
      </div>
    );
  }
}

export default BingoContainer;
