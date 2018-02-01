import React from "react";
import { userIsNotAuthenticatedRedir } from "./../helpers/auth";
import { connect } from "react-redux";
import { login } from "./../ducks/auth";

let Login = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch(login());
        }}
      >
        Do a login
      </button>
    </div>
  );
};

Login = connect()(Login);

export default userIsNotAuthenticatedRedir(Login);
