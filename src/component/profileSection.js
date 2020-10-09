import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputAction from "../Actions/inputAction";
import ProfileComponent from "./profileComponent";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const onItemClicked = (item, index) => {
    dispatch(inputAction.setInputId(index));
    dispatch(inputAction.setInputFirstName(item.firstName));
    dispatch(inputAction.setInputLastName(item.lastName));
  };

  console.log(users);
  if (users.length === 0) {
    return <h1>No User, plz add one</h1>;
  }

  return (
    <div>
      {users.map((item, index) => (
        <ProfileComponent
          firstName={item.firstName}
          lastName={item.lastName}
          onItemClicked={() => {
            onItemClicked(item, index);
          }}
        />
      ))}
    </div>
  );
};

export default ProfileSection;
