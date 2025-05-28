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
    axios.delete('https://jsonplaceholder.typicode.com/posts/${userId}')
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
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-black rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        
          <h1 className="text-grey-darkest">User List</h1>
          <ul>
            {users.map((user, index) => (
              <li
                key={user.id}
                className="flex flex-row justify-between items-center mb-2 text-white"
              >
                <span>
                  {user.name}
                </span>
                <button onClick={()=> removeUser(index, user.id)}   className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                aria-label="{'Remove ${user.name}'}" >
                  X
                </button>
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  );
}

export default List;
