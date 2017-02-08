import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import ToDo from '../../components/todo.js';

describe("ToDo", () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });
});
