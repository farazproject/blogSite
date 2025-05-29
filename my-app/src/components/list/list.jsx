import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [users, setUsers] = useState([]); // State to store the data

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setUsers(res.data); // Set the state with the response data
        console.log("Fetched users:", res.data);
      })
      .catch((err) => console.log(err));
  };


  const removeUser = (indexToRemove, userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(() => {
        console.log(`user with ID ${userId} removed`);
        setUsers(users.filter((_, index ) => index !== indexToRemove));
    })
    .catch((err) => console.log(err));
    
  };

  useEffect(() => {
    getData(); // Fetch data on mount
  }, []);

  return (
      <div className="flex items-center justify-center bg-gray-900 mt-50px">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 mt-10 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
        <ul className="divide-y divide-gray-700">
          {users.map((user, index) => (
            <li
              key={user.id}
              className="flex justify-between items-center py-3"
            >
              <span className="text-lg font-semibold">{user.title}</span>
              <button
                onClick={() => removeUser(index, user.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
                aria-label={`Remove ${user.title}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
