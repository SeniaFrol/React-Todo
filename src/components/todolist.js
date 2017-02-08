import React, {Component} from 'react';
import ToDoListItem from './listitem.js';

export default class ToDoList extends Component {

  render() {
    const items = this.props.todos.map((item) => {
      return <ToDoListItem key={item.id} {...item} onToggle={this.props.onToggle}/>
    });

    return(
      <div>
        {items}
      </div>
    );
  }
}
