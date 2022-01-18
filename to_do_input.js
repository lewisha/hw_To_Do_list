const to_do_input = ({ inputVal, setInputVal, setTodos }) => {
  const handleOnAddTodo = () => {
    if (!inputVal.trim()) {
      return;
    }

    setTodos((preTodos) => {
      return [...preTodos, { content: inputVal, isCompleted: false }];
    });
    setInputVal("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button conClick={handleOnAddTodo}>Add Todo</button>
    </div>
  );
};
