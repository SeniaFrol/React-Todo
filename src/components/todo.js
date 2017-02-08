import React, {Component} from 'react';
import ToDoList from './todolist.js';
import AddTodo from './addtodo.js';

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [{
      id: 1,
      text: "Do smtng"
    },{
      id: 2,
      text: "Pew pew"
    }]};
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }
  render() {
    return(
      <div>
        <ToDoList todos={this.state.todos}/>
        <AddTodo onChangeInput={(text) => this.handleAddTodo(text)} />
      </div>
    );
  }
}
