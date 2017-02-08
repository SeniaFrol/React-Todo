import $ from 'jQuery';

export default {
  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos(todos, showCompleted, searchText) {
    let filterTodos = todos;

    // Filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //Filter by seaarchText

    filterTodos = filterTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return (searchText.length === 0 || text.indexOf(searchText) > -1);
    });

    //Sort todos by complited or not
    filterTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }

    });

    return filterTodos;
  }
};
