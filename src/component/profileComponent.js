import { connect } from "react-redux";
import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      {props.formdata.firstName}
      <br />
      {props.formdata.lastName}
      <br />
      {props.formdata.email}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    formdata: state.form.myform.values,
  };
};
export default connect(mapStateToProps)(Profile);
