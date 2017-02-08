import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import AddTodo from '../../components/addtodo.js';

describe("AddTodo",() => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onInputChange if text entered', () => {
    const todoText = 'Hi there'
    const spy = expect.createSpy();
    const addtodo = TestUtils.renderIntoDocument(<AddTodo onChangeInput={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
});

  it('should not call onInputChange when invalid input', () => {
    const todoText = ''
    const spy = expect.createSpy();
    const addtodo = TestUtils.renderIntoDocument(<AddTodo onChangeInput={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(todoText);
});
});
