import React from 'react';
import { observer, inject } from 'mobx-react';

import AdContainer from '../leftContainer/AdContainer';
import BingoContainer from '../centerContainer/BingoContainer';
import ChatContainer from '../rightContainer/ChatContainer';

@inject('bingoStore')
@observer
class MainContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(
            to right,
            rgba(20, 20, 20, 0.1) 10%,
            rgba(20, 20, 20, 0.5) 70%,
            rgba(20, 20, 20, 0.9)
          ),
          url(https://source.unsplash.com/random/640x480?dog)`,
          backgroundSize: 'cover',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Bingo Chat</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '20%' }}>
            <AdContainer />
          </div>
          <div
            style={
              {
                //  width: '60%'
              }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '2rem 0',
                fontSize: `${this.props.bingoStore.totalBingo / 2}rem`,
                fontWeight: 'bold',
                transition: `0.5s ease-in-out`,
                color: 'white',
              }}
            >
              {this.props.bingoStore.totalBingo}
            </div>
            <BingoContainer />
          </div>
          <div style={{ width: '20%' }}>
            <ChatContainer />
          </div>
        </div>
        {/* <div>value = {this.props.homeworkStore.homework}</div>
        <div>
          <button onClick={this.props.homeworkStore.changetoFinish}>
            Change to Finish
          </button>
        </div> */}
      </div>
    );
  }
}

export default MainContainer;
