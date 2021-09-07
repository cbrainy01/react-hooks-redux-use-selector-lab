import React from "react";
import { useSelector } from "react-redux";



function Users() {

  const users = useSelector( (state) => state.users )
  const userCount = useSelector((state) => state.users.length);
  // console.log(users)

  const renderUsers = users.map( (user) => <li key={user.username}>{user.username}</li> )

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {renderUsers}
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {userCount}</p>
      </ul>
    </div>
  );
}

export default Users;
