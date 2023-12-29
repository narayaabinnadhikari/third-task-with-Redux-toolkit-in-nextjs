"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function DisplayUsers() {
  const userData = useSelector((data) => data.usersData.users);

  const dispatch = useDispatch();
  console.log(userData);
  return (
    <div className="h-52 w-[440px] p-3 border-2 border-solid border-sky-400 mt-3 rounded-md overflow-scroll">
      <h3>User List</h3>
      {userData.map((item) => (
        <div
          className="bg-gray-200 mt-2 p-2 rounded w-90 text.lg text-black flex justify-between"
          key={item.id}
        >
          <span>{item.name}</span>
          <button
            onClick={() => dispatch(removeUser(item.id))}
            className="bg-red-600 px-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisplayUsers;
