import React from 'react';

const ToDoListItem = ({item}) => {
  return(
    <div>
      {item.id}. {item.text}
    </div>
  );
};

export default ToDoListItem;
