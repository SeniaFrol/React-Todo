import React, {Component} from 'react';

export default class TodoSearch extends Component {
  handleSearch() {
    const showComplited = this.refs.showComplited.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showComplited, searchText);
  }
  render() {
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search ToDo" onChange={(e) => this.handleSearch(e)}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showComplited" onChange={(e) => this.handleSearch(e)} />
            Show complited todos
          </label>
        </div>
      </div>
    );
  }
}