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
      text: "Do smtng",
      completed: true
    },{
      id: uuid(),
      text: "Pew pew",
      completed: false
    }]};
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
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
        <ToDoList todos={this.state.todos} onToggle={(id) =>this.handleToggle(id)} />
        <AddTodo onChangeInput={(text) => this.handleAddTodo(text)} />
      </div>
    );
  }
}
