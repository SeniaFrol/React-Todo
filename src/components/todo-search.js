import React, {Component} from 'react';

export default class TodoSearch extends Component {
  handleSearch() {
    const showComplited = this.refs.showComplited.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showComplited, searchText);
  }
  render() {
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search ToDo" onChange={e => this.handleSearch(e)}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showComplited" onChange={e => this.handleSearch(e)} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}
