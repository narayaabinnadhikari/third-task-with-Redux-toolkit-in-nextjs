"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function Page() {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();
  return (
    <div className="h-screen">
      <h1 className="text-2xl flex justify-center">Remove User Page</h1>
      {userData.map((item) => (
        <div className="flex justify-center mt-5 " key={item.name}>
          <span className="px-2 text-xl">{item.name}</span>
          <button className='bg-red-600 px-2 rounded' onClick={() => dispatch(removeUser(item.id))}>
            Remove User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Page;
