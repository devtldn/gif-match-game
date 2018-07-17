import React, { Component } from 'react';
import Gifs from './component/Gifs';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  getGifs() {
    this.setState({
      gifs: [
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/B2vBunhgt9Pc4/giphy.gif'
        },
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/xXxIj4rrbo92g/giphy.gif'
        },
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/26FmRLBRZfpMNwWdy/giphy.gif'
        },
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/11EEXw1EIEoHaE/giphy.gif'
        },
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/QYrBsJj6vNCak/giphy.gif'
        },
        {
          id: uuid.v4(),
          source: 'https://media.giphy.com/media/wmgsmee4a4vx6/giphy.gif'
        }
      ]
    });
  }

  componentDidMount() {
    this.getGifs();
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="display-2">THIS IS THE GAME</h2>
            <Gifs gifs={this.state.gifs.id.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
