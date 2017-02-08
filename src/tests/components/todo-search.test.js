import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoSearch from '../../components/todo-search.js';

describe("TodoSearch", () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input', () => {
    const searchText = 'Search me';
    const spy = expect.createSpy();
    const todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch when checkbox is checked with proper value', () =>{
    const spy = expect.createSpy();
    const todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.showComplited.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showComplited);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
