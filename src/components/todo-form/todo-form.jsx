import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, addTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = (e) => {
    addTodos({
      id: todos.length,
      label: task, 
      checked: false,
    });
    // clears out the input
    setTask('')

  };

  const handleKeyUp = (e) => {
    // keycode 13 is enter button
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
