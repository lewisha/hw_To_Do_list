import to_do_item from "./to_do_item";

const to_do_list = ({ todos, setTodos }) => {
  const todolist = todos.map((todo, index) => {
    return (
      <todoItem
        todo={todo}
        key={"todo-${index}"}
        index={indexs}
        setTodos={setTodos}
      />
    );
  });
  return <ul>{todolist}</ul>;
};

export default to_do_list;
