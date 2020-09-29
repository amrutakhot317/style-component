import { useSelector, useDispatch } from "react-redux";
import { reset, addUser, remove } from "../Actions/type";
import React, { useRef } from "react";

const Form = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={userRef} />
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <button onClick={() => dispatch(remove(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;
