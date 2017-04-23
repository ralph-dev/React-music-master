import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Master</div>
        <div>
          <input placeholder="search an artisit..."/>
          <button>button</button>
        </div>
        <div className="Profile">
          <div>Artisit Picture</div>
          <div>Artisit Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
