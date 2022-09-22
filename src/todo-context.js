import React, { createContext } from "react";

import { todosTemplate } from "./app";

export const TodosContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = React.useState(() => {
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      return JSON.parse(lsTodos);
    } else {
      return todosTemplate;
    }
  });

  // setTodos(todosTemplate);

  const addTodos = (task) => {
    setTodos([...todos, task]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      })
    );
  };

  // set local storage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{ removeTodo, addTodos, checkTodo, localStorage, todos }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
