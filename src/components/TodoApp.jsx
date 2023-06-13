import React from "react";
import Header from "./Header";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
    return (
        <React.StrictMode>
        <>
        <div className="wrapper">
          <div className="todos">
             <Header />
             <TodosLogic />
          </div>
        </div>
        </>
        </React.StrictMode>
    );
};

export default TodoApp;