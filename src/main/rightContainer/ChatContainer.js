import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('homeworkStore')
@observer
class ChatContainer extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <h1>chat</h1>
      </div>
    );
  }
}

export default ChatContainer;
