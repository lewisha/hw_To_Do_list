import to_do_list from "./to_do_list";

const to_do_item = ({ todo: { content, isCompleted }, index, setTodos }) => {
  const handleOnDelTodo = () => {
    setTodos((preTodos) => {
      const newTodos = [...preTodos];
      return [...newTodos.slice(0, index), ...newTodos.slice(index + 1)];
    });
  };
  const handleOnMod = () => {
    setTodos((preTodos) => {
      const newTodos = [...preTodos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      return newTodos;
    });
  };

  return (
    <li className="todo-content">
      <span
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        onDoubleClick={handleOnMod}
      >
        {content}
      </span>
      <button onClick={handleOnDelTodo}>Delete Todo</button>
    </li>
  );
};

export default to_do_item;
