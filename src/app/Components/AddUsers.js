"use client";

import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="h-52 p-3 border-2 border-solid border-red-400 rounded overflow-scroll">
      <h3>AddUsers</h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Add New User"
          className="w-60 h-10 p-3 text-black"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="w-40 h-10 bg-gray-400 mx-2 rounded-md hover:bg-blue-400 text-lg"
          onClick={userDispatch}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col">
        <Link
          href="/removeuser"
          className="flex text-xl p-2 mt-2 underline text-blue-500 "
        >
          Remove User Page{" "}
        </Link>
        <Link
          href="/todolist"
          className="flex text-xl p-2 mb-2 underline text-blue-500 "
        >
          Go to TODO page
        </Link>
        <Link
          href="/apiusers"
          className="flex text-xl p-2 mb-2 underline text-blue-500 "
        >
          Go to API users
        </Link>
      </div>
    </div>
  );
}

export default AddUsers;
