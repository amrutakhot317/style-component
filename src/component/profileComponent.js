import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import inputAction from "../Actions/inputAction";
import UserAction from "../Actions/UserAction";
import { Button, Form, Li } from "../style";

const ProfileComponent = ({ firstName, lastName, email, onItemClicked }) => {
  const id = useSelector((state) => state.inputs.id);

  console.log(id);
  const dispatch = useDispatch();

  const deleteUser = () => {
    console.log(id);
    dispatch(UserAction.deleteUser(id));
    dispatch(inputAction.resetInputs());
  };
  const confirm = () => {
    if (firstName && lastName) {
      dispatch(UserAction.confirm(id, { firstName, lastName }));
      dispatch(inputAction.resetInputs());
    }
  };
  return (
    <>
      <Form>
        <ul>
          <Li>
            <h2> First-Name: {firstName}</h2>
          </Li>
          <Li>
            <h2> Last-Name: {lastName}</h2>
          </Li>
        </ul>
        <div>
          {" "}
          <Link to="/forms">
            <Button onClick={onItemClicked}>
              <span>Edit-User</span>
            </Button>
          </Link>
          <Button onClick={deleteUser}>Remove</Button>
          <Link to="/confirm">
            <Button onClick={confirm}>
              <span>Confirm</span>
            </Button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default ProfileComponent;
