'use client'
import { useDispatch, useSelector } from "react-redux"
import { fetchApiData, fetchApiUsers } from "../redux/slice"

export default function Apipage() {

  const dispatch = useDispatch() ;
  const apiUserData = useSelector((data)=>data.usersData.userAPIData);
  return (
    <div className="h-screen">
      <h1 className="text-2xl flex justify-center"> User List from API</h1>
      <button
        onClick={() => dispatch(fetchApiUsers())}
        className="w-40 h-10 flex bg-gray-400 mx-2 rounded-md hover:bg-blue-400 text-lg"
      >
        Load Users
      </button>
      <div>
      {apiUserData.length &&
        apiUserData.map((item) => {
          <h4 key={item.name}>{item.name}</h4>;
        })}
        </div>
    </div>
  );
}