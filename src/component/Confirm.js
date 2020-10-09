import React from "react";
import { useSelector } from "react-redux";

const Confirm = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users.firstName);
  return (
    <div>
      {users}
      <br />
      {users.lastName}
      <br />
      {users.email}
    </div>
  );
};

export default Confirm;
