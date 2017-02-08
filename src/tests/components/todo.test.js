import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import ToDo from '../../components/todo.js';

describe("ToDo", () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should add Todo to the todods state on handleAddTodo', () => {
    const todoText = 'test';
    const todo = TestUtils.renderIntoDocument(<ToDo />);

    todo.setState({todos: []});
    todo.handleAddTodo(todoText);

    expect(todo.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called',() => {
    const todoData = {
      id: 11,
      text: "Test text",
      completed: false
    };
    const todo = TestUtils.renderIntoDocument(<ToDo />);
    todo.setState({todos: [todoData]});

    expect(todo.state.todos[0].completed).toBe(false);
    todo.handleToggle(11);
    expect(todo.state.todos[0].completed).toBe(true);
  });
});
