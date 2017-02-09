import React, {Component} from 'react';
import TodoAPI from '../api/todoapi.js';
import moment from 'moment';

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
      todos: TodoAPI.getTodos()
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
    const {todos, showComplited, searchText} = this.state;
    const filterTodos = TodoAPI.filterTodos(todos, showComplited, searchText);

    return(
      <div>
      <h1 className='page-title'>Todo App</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch}/>
            <ToDoList todos={filterTodos} onToggle={(id) =>this.handleToggle(id)} />
            <AddTodo onChangeInput={(text) => this.handleAddTodo(text)} />
          </div>
        </div>
      </div>

      </div>
    );
  }
}
