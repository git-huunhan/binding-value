import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h2>Binding value</h2>
        <p>Hello, {this.state.value}</p>
        <input type="text" onChange={this.handleChange} placeholder="Nhập tên bạn vào đây"/>
      </div>
    );
  }
}

export default App;
