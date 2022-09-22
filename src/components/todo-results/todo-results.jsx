import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos} = React.useContext(TodosContext);
  let count = 0
  
  const calculateChecked = () => {
    for (let i = 0; i < todos.length; i++) {
      if(todos[i].checked === true){
        count++;
      }
    }
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
