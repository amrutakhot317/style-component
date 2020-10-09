import React from "react";
import { Form, Input, Li } from "../style";
import { useDispatch, useSelector } from "react-redux";
import inputAction from "../Actions/inputAction";
import UserAction from "../Actions/UserAction";
import { Button } from "../style";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const id = useSelector((state) => state.inputs.id);
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.inputs.firstName);
  const lastName = useSelector((state) => state.inputs.lastName);

  const addUser = () => {
    if (firstName && lastName) {
      dispatch(
        UserAction.addUser({
          firstName,
          lastName,
        })
      );
      dispatch(inputAction.resetInputs());
    }
  };

  const updateUser = () => {
    if (firstName && lastName) {
      dispatch(UserAction.updateuser(id, { firstName, lastName }));
      dispatch(inputAction.resetInputs());
    }
  };

  return (
    <>
      <h1>Add User</h1>

      <Form>
        <ul>
          <Li>
            <Input
              type="text"
              small
              placeholder="First Name"
              defaultValue={firstName}
              onChange={(e) =>
                dispatch(inputAction.setInputFirstName(e.target.value))
              }
            />
          </Li>
          <Li>
            {" "}
            <Input
              small
              type="text"
              placeholder="lastName"
              defaultValue={lastName}
              onChange={(e) =>
                dispatch(inputAction.setInputLastName(e.target.value))
              }
            />
          </Li>
          <Li>
            <div>
              <Link to="/profile">
                <Button onClick={id === -1 ? addUser : updateUser}>
                  <span>{id === -1 ? "Add User" : "Edit User"}</span>
                </Button>
              </Link>
            </div>
          </Li>
        </ul>
      </Form>
    </>
  );
};
export default CreateUser;
