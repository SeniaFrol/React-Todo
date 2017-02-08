import React, {Component} from 'react';
import ToDoList from './todolist.js';
import AddTodo from './addtodo.js';
import TodoSearch from './todo-search';

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComplited: false,
      searchText: '',
      todos: [{
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
