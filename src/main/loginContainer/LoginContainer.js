import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('')
@observer
class AdContainer extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <h1>AdContainer</h1>
      </div>
    );
  }
}

export default AdContainer;
