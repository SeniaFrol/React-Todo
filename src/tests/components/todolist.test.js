import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../components/todolist.js';

describe("ToDoList", () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
});
