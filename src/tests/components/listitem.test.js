import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import ToDoListItem from '../../components/listitem.js';

describe("ToDoListItem", () => {
  it('should exist', () => {
    expect(ToDoListItem).toExist();
  });
});
