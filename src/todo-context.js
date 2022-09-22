import React, { createContext } from "react";

export const TodosContext = createContext();

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

const TodoContextProvider = (props) => {
  const [todos, setTodos] = React.useState(() => {
    const lsTodos = localStorage.getItem("todos");
    // console.log(lsTodos);
    if (!lsTodos) {
      return todosTemplate;
    } else if (lsTodos) {
      return JSON.parse(lsTodos);
    }
  });

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
