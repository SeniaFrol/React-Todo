import React, {Component} from 'react';

export default class AddTodo extends Component {
  onInputChange(e) {
    e.preventDefault();
    const todotext = this.refs.text.value;
    if(todotext.length > 0) {
      this.refs.text.value = '';
      this.props.onChangeInput(todotext);
    } else {
    this.refs.text.focus();
    }
  }

  render() {
    return(
      <div className="container__footer">
        <form onSubmit={e => this.onInputChange(e)}>
          <input type='text' ref='text' placeholder='Add new ToDo'/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    );
  }
}
