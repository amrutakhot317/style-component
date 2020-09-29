import { Field, reduxForm } from "redux-form";
import React, { useState } from "react";
import Profile from "./profileComponent";
import styled from "styled-components";

function FormRedux(props) {
  const { handleSubmit } = props;
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <h1>Form</h1>
      <form
        onSubmit={handleSubmit((formValues) => {
          setShowProfile(true);
        })}
      >
        <ul className="form-container">
          <li>
            <lable>First Name</lable>
            <Field type="text" name="firstName" component="input" />
          </li>
          <li>
            <lable>Last Name</lable>
            <Field type="text" name="lastName" component="input" />
          </li>
          <li>
            <lable>Email Address</lable>
            <Field type="text" name="email" component="input" />
          </li>
          <li>
            <lable> Address</lable>
            <Field type="text" name="address" component="input" />
          </li>
        </ul>
        <StyledButton type="submit">Submit</StyledButton>
      </form>

      <br />
      {showProfile ? <Profile /> : null}
    </div>
  );
}

export default reduxForm({
  form: "myform",
})(FormRedux);

const StyledButton = styled.button`
  background-color: #203040;
  font-size: 22px;
  color: white;
`;
