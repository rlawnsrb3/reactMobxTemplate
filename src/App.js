import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('homeworkStore')
@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>value = {this.props.homeworkStore.homework}</div>
        <div>
          <button onClick={this.props.homeworkStore.changetoFinish}>
            Change to Finish
          </button>
        </div>
      </div>
    );
  }
}
