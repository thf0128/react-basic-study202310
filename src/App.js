import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUsersHandler = (user) => {
    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };

  return (
    <div>
      <AddUsers onAddUser={addUsersHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
