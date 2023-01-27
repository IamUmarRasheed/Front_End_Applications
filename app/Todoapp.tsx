"use client";
import { left } from "inquirer/lib/utils/readline";
import React, { useState } from "react";

export default function Todoapp() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([
    { todoText: "helllo", Completed: false },
    { todoText: "jeri", Completed: true },
    { todoText: "queen", Completed: false },
  ]);
  const onchangehandler = (elm: any) => {
    const newtodos = todos.map((Todo) => {
      console.log("todo:", Todo);
      if (Todo.todoText == elm.todoText) {
        Todo.Completed = !Todo.Completed;
      }
      return Todo;
    });
    console.log(newtodos);
    settodos(newtodos);
  };
  const addtodo = () => {
    const newtodo = { todoText: todo, completed: false };
    const newtodos1 = [...todos, newtodo];
    settodos(newtodos1);
  };
  const deltetetodo = (mera: any) => {
    const nestodos = todos.filter((todo) => {
      if (todo.todoText === mera.todoText) return false;
      return true;
    });
    settodos(nestodos);
  };
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder="Plz Enter Your Todo"
          value={todo}
          onChange={(e) => {
            settodo(e.target.value);
          }}
        />
        <button onClick={addtodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.Completed ? "green" : "red",
                fontStyle: elm.Completed ? "italic" : "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.Completed}
                onChange={() => {
                  onchangehandler(elm);
                }}
              />
              {elm.todoText}
              <button
                style={{ background: "red", padding: "3px" }}
                onClick={() => deltetetodo(elm)}
              >
                {" "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
