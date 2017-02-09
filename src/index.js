import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/todo.js';

class App extends Component {

  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.containerApp')
);
