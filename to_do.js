import { useState, useEffect } from "react";
import { to_do_header } from "./to_do_header";
import { to_do_input } from "./to_do_input";
import to_do_list from "./to_do_list";

const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: 123, isCompleted: true });
    }, 1000);
  });
};

const TodoApp = () => {
  const [inputVal, setInputVal] = useState(" ");
  const [todos, setTodos] = useState([{ content: 123, isCompleted: true }]);

  useEffec(() => {
    const fetchData = async () => {
      const res = await mockApi();
      setTodos([res]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <to_do_header />
      <to_do_input
        inputVal={inputVal}
        setInputVal={setInputVal}
        setTodos={setTodos}
      />
      <to_do_list todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
