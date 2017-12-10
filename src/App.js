import React, { Component } from 'react';
import marked from 'marked';
import { sample } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: sample
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <textarea className="Text"
          autofocus onChange={this.onChange}>
          {this.state.text}
        </textarea>

        <div className="Markdown"
          dangerouslySetInnerHTML={{
          __html: marked.parse(this.state.text, { sanitize: true })
        }}/>

      </div>
    );
  }
}

export default App;
