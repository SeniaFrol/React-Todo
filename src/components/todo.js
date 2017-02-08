import React, {Component} from 'react';
import ToDoList from './todolist.js';
import AddTodo from './addtodo.js';
import TodoSearch from './todo-search';
import uuid from 'node-uuid';

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComplited: false,
      searchText: '',
      todos: [{
      id: uuid(),
      text: "Do smtng"
    },{
      id: uuid(),
      text: "Pew pew"
    }]};
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  }

  handleSearch = (showComplited, searchText) => {
    this.setState({
      showComplited: showComplited,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={this.state.todos}/>
        <AddTodo onChangeInput={(text) => this.handleAddTodo(text)} />
      </div>
    );
  }
}
