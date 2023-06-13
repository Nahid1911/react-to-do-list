import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from '@/components/TodoApp';
import '@/styles/app.css';
import { BrowserRouter } from 'react-router-dom';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
    </React.StrictMode>

);
