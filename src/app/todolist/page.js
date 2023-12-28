'use client'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice";

export default function Page() {
  const[todo, setTodo]= useState('');
  const todoData = useSelector((data)=>data.todosData.todos);
  const dispatch = useDispatch();
  return (
    <div className="h-screen">
      <h2 className="text-2xl flex justify-center"> Add Todos</h2>
      <div className="flex justify-center">
        <input
          type="text"
          className="w-60 h-10 p-3 text-black"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add new task"
        />
        <button
          onClick={() => dispatch(addTodos(todo))}
          className="w-40 h-10 bg-gray-400 mx-2 rounded-md hover:bg-blue-400 text-lg"
        >
          Add Todo
        </button>
      </div>
      <div className=" mt-4">
      <h3 className="text-2xl flex justify-center">Todo List</h3>
      { todoData.length && todoData.map((item)=>(

        <h4 key={item.name}>{item.name}</h4>
   )) }
      </div>
    </div>
  );
}
