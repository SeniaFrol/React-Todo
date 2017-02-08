import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import ToDoListItem from '../../components/listitem.js';

describe("ToDoListItem", () => {
  it('should exist', () => {
    expect(ToDoListItem).toExist();
  });

  it('should call onToggle props with id on click', () => {
    const todoData = {
      id: 13,
      text: 'Some new text',
      completed: true
    };
    const spy = expect.createSpy();
    const todolistitem = TestUtils.renderIntoDocument(<ToDoListItem {...todoData} onToggle={spy} />);
    const $el = $(ReactDOM.findDOMNode(todolistitem));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(13);

  });
});
