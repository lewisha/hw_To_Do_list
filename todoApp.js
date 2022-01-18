import { useState, useEffect, useMemo } from "react";
import TodoApp from "./to_do";
import { todoApi } from "./todoApis";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}
